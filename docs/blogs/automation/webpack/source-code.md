# 手写迷你版webpack

## 一、调试webpack

### 1.通过chrome调试

```
node --inspect-brk ./node_modules/webpack-cli/bin/cli.js
```

然后打开Chrome浏览器控制台就可以调试了

### 2.通过执行命令调试

* 打开工程目录，点击调试按钮，再点击小齿轮的配置按钮，系统就会生成lanuch.json配置文件
* 修改好了之后直接点击F5就可以启动调试

```
// .vscode/lanuch.json
{
	"version": "0.2.0",
	"configurations": [{
		"type": "node",
		"request": "lanuch",
		"name": "debug webpack",
		"cmd": "${workspaceFolder}",
		"program": "${workspaceFolder}/node_modules/webpack-cli/bin/cli.js"
	}]
}
```

## 二、tapable.js

* tapable是一个类似于Node.js中的EventEmitter的库，但更专注于自定义事件的触发和处理

* webpack通过tapable将实现与流程解耦，所有具体实现通过插件的形式存在

  ```
  class SyncHook {
  	constructor() {
  		this.taps = [];
  	}
  	tap(name, fn) {
  		this.taps.push(fn);
  	}
  	call() {
  		this.taps.forEach((tap) => tap())
  	}
  }
  let hook = new SyncHook();
  hook.tap("some name", () => {
  	console.log("some name")
  })
  class Plugin {
  	apply() {
  		hook.tap("Plugin", () => {
  			console.log("Plugin");
  		})
  	}
  }
  
  new Plugin().apply();
  hook.call();
  ```

## 三、webpack执行流程

  1. 初始化参数，从配置文件和Shell语句中读取并合并参数，得出最终的配置对象
  2. 用上一步得到的参数初始化Compiler对象
  3. 加载所有配置的插件
  4. 执行对象的run方法开始执行编译
  5. 根据配置中的entry找出入口文件
  6. 从入口文件出发，调用所有配置的loader对模块进行编译
  7. 再找出该模块依赖的模块，再递归本步骤直到所有入口依赖的文件都经过了本步骤的处理
  8. 根据入口和模块之间的依赖关系，组装成一个个包含多个模块的chunk
  9. 再把每个chunk转换成一个单独的文件加入到输出列表
  10. 在确定好输出内容后，根据配置确定输出到路径和文件名，把文件内容写入到文件系统
  11. 以上过程中，webpack会在特定的时间点广播出特定的事件，插件在监听到感兴趣的事件后会执行特定的逻辑，并且插件可以调用webpack提供的api改变webpack的运行结果

## 四、代码执行流程 
<Image :src="'/automation/webpack/source-code/1.png'" />

## 五、代码实现 
```
// 入口文件index.js
const Compiler = require('./compiler');

function  webpack(options) {
  // 1、初始化参数，从配置文件和 Shell 语句中读取参数，得出最终的配置对象
  const argv = process.argv.slice(2);

  const shellOpions = argv.reduce((shellOpion, option) => {
    const [key, value] = option.split('=');
    shellOpion[key.slice(2)] = value;
    return shellOpion
  }, {});

  const finalOptions = {...options, ...shellOpions};

  // 2、用上一步得到的参数 初始化 compiler 对象
  const compiler = new Compiler(finalOptions);

  // 3、加载所有配置的插件
  const { plugins } = finalOptions;
  plugins.forEach((plugin) => {
    plugin.apply(compiler)
  });

  return compiler;
}

module.exports = webpack;
```

```
// compiler.js
const { SyncHook } = require('tapable');
const path  = require('path');
const fs = require('fs');
const Compilation = require('./compilation');

/**
 * 代表整个编译对象，负责整个编译的过程，里面会保存所有编译的配置对象
 */
class Compiler {
  constructor(options) {
    this.options = options;
    // 保存当前 Compiler 上面所有的钩子
    this.hooks = {
      // 开始编译时触发
      run: new SyncHook(),
      // 编译结束时触发
      done: new SyncHook(),
      compilation: new SyncHook(['chunk', 'filename'])
    }
  }
  run = (callback) => {
    // ①、开始编译
    this.hooks.run.call();
    const _this = this;
    function onCompiled(err, stats, fileDependencies) {
      // 10、在确定好输出内容后，根据配置确定输出的路径和文件名，把文件写入到文件系统
      for (const filename in stats.assets) {
        const filePath = path.join(_this.options.output.path, filename);
        fs.writeFileSync(filePath, stats.assets[filename], 'utf8');
      }
      callback(null, {
        toJson: () => {
          return stats;
        }
      })
      fileDependencies.forEach((fileDependencie) => {
        fs.watch(fileDependencie, () => {
          _this.compile(onCompiled);
        })
      })
    }
    // ②、编译过程
    this.compile(onCompiled);
    // ③、结束编译
    this.hooks.done.call();
  }
  compile = (onCompiled) => {
    // 每次开启一次新的编译，都会创建一个新的 Compilation 类的实例
    const compilation = new Compilation(this.options);
    this.hooks.compilation.call(compilation)
    compilation.build(onCompiled);
  }
}
module.exports = Compiler;
```

```
// compilcation.js
const path = require("path").posix;
const fs = require("fs");
const parser = require("@babel/parser");
const traverse = require("@babel/traverse").default;
const generator = require("@babel/generator").default;
const types = require("@babel/types");
const { SyncHook } = require("tapable");

const baseDir = toUnixPath(process.cwd());

function toUnixPath(filePath) {
  return filePath.replace(/\\/g, "/");
}

class Compilation {
  constructor(options) {
    this.options = options;
    // 当前编译依赖的文件
    // 所有涉及到的文件的绝对路径
    this.fileDependencies = [];
    // 本次编译的所有模块
    /**
     * module的结构
     * {
          id: string,
          dependencies: {depModuleId: string; depModulePath: string;}[],
          names: string[],
        }
    */
    this.modules = [];
    // 里面放置所有的代码块
    /**
     * chunk的结构
     * {
     *    name: '',
     *    entryModule: Module,
     *    modules: Module[]
     * }
    */
    this.chunks = [];
    /**
     * assets是最后用于提取内容并生成文件的，它的结构是
     * {
     *    chunkName: source;
     * }
     * 
    */
    this.assets = [];
    this.hooks = {
      chunkAsset: new SyncHook(["chunk", "filename"]),
    };
  }

  build = (onCompiled) => {
    // 5、根据配置中的 entry 找出入口文件
    let entry = {};
    if (typeof this.options.entry === "string") {
      entry.main = this.options.entry;
    } else {
      entry = this.options.entry;
    }

    for (const entryName in entry) {
      // 获取到了所有入口文件的绝对路径
      const entryPath = path.join(baseDir, entry[entryName]);
      this.fileDependencies.push(entryPath);
      // 6、从入口文件出发，调用所有配置的 loader 对模块进行编译
      const entryModule = this.buildModule(entryName, entryPath);
      // 8、根据入口和模块之间的依赖关系，组装成一个个包含多个模块的 chunk
      // 目前看着是入口有几个，chunk至少就有几个，chunk是用于生成this.assets的
      const chunk = {
        name: entryName,
        entryModule,
        modules: this.modules.filter((module) =>
          module.names.includes(entryName)
        ),
      };
      this.chunks.push(chunk);
    }
    // 9、再把每个 chunk 转换成一个单独的文件加入到输出列表
    console.dir(this.chunks, { depth: null });
    this.chunks.forEach((chunk) => {
      const filename = this.options.output.filename.replace(
        "[name]",
        chunk.name
      );
      this.hooks.chunkAsset.call(chunk, filename);
      this.assets[filename] = getSource(chunk);
    });
    onCompiled(
      null,
      {
        module: this.modules,
        chunks: this.chunks,
        assets: this.assets,
      },
      this.fileDependencies
    );
  };
  /**
   * 编译模块
   * @param {*} name 入口的名称
   * @param {*} modulePath 模块的路径
   */
  buildModule = (name, modulePath) => {
    const _this = this;
    // ① 读取源代码的内容
    let sourceCode = fs.readFileSync(modulePath, "utf8");
    // ② 调用此模块需要使用的loader
    const { rules } = this.options.module;
    const loaders = [];
    rules.forEach((rule) => {
      if (modulePath.match(rule.test)) {
        loaders.push(...rule.use);
      }
    });
    sourceCode = loaders.reduceRight((code, loader) => {
      return require(loader)(code);
    }, sourceCode);
    // src/entry1.js src/entry2.js
    const moduleId = "./" + path.relative(baseDir, modulePath);
    /**
     * 创建一个模块对象，
     * id moduleId是相对于根目录的相对路径
     * dependencies 表示此模块依赖的模块
     * names  表示此模块添加了那几个入口依赖
     */
    const module = {
      id: moduleId,
      dependencies: [],
      names: [name],
    };

    // 获取当前路径所在的路径
    const dirName = path.dirname(modulePath);
    const extensions = this.options.resolve.extensions;

    // 7、再找出该模块依赖的模块，在递归本步骤（buildModule），知道所有依赖入口文件加载完
    const ast = parser.parse(sourceCode, { sourceType: "module" });
    traverse(ast, {
      CallExpression({ node }) {
        if (node.callee.name === "require") {
          const depModuleName = node.arguments[0].value; // '.title'
          // 获取依赖路径的绝对路径
          let depModulePath = path.join(dirName, depModuleName);
          depModulePath = tryExtensions(depModulePath, extensions);
          // 把此依赖文件添加到依赖数组里面，当文件发生变化了，会重新编译文件，创建一个新的 Compilation
          _this.fileDependencies.push(depModulePath);
          const depModuleId = "./" + path.relative(baseDir, depModulePath);
          // 修改 ast 语法树，把 require 方法的参数变成依赖的模块 ID
          node.arguments = [types.stringLiteral(depModuleId)];
          module.dependencies.push({
            depModuleId,
            depModulePath,
          });
        }
      },
    });

    const { code } = generator(ast);
    module._source = code;

    module.dependencies.forEach(({ depModuleId, depModulePath }) => {
    	// 将当前这个module遍历节点得来的dependencies进行遍历，如果这个id已经被遍历过了，那么直接将当前的入口的name放入当前module的names中
      const buildModule = _this.modules.find(
        (module) => module.id === depModuleId
      );
      if (buildModule) {
        buildModule.names.push(name);
      } else {
        // 如果遍历到的module没被构建过，那么就递归调用buildModule
        const depModule = _this.buildModule(name, depModulePath);
        _this.modules.push(depModule);
      }
    });

    return module;
  };
}

/**
 * 尝试给当前的路径添加扩展名，直到找到文件为止
 */
function tryExtensions(modulePath, extensions) {
  if (fs.existsSync(modulePath)) {
    return modulePath;
  }

  for (let i = 0; i < extensions.length; i++) {
    const filePath = modulePath + extensions[i];
    if (fs.existsSync(filePath)) {
      return filePath;
    }
  }
  throw new Error(`找不到${modulePath}`);
}

function getSource(chunk) {
  return `
    (() => {
      var modules = {
        ${chunk.modules.map(
          (module) => `
          "${module.id}": (module) => {
            ${module._source}
          }
        `
        )}
      }
      var cache = {};
      function require(moduleId) {
        var cachedModule = cache[moduleId];
        if (cachedModule !== undefined) {
          return cachedModule.exports;
        }
        var module = cache[moduleId] = {
          exports: {}
        };
        modules[moduleId](module, module.exports, require);
        return module.exports;
      }

      var exports = {};
      ${chunk.entryModule._source}
    })();
  `;
}
module.exports = Compilation;
```

## 六、Q&A

1.module、chunk、bundle是什么？

2.loader和plugin的区别是什么？

- 对模块源码的转换，描述了 webpack 如何处理非 javascript 模块，并且在 build 中引入这些依赖。loader 可以将文件从不同的语言（如 TypeScript）转换为 JavaScript，或者将内联图像转换为 data URL。比如说：css-loader，style-loader 等。
- 解决 loader 无法实现的其他事,扩展了webpack的功能。插件的范围包括，从打包优化和压缩，一直到重新定义环境中的变量。插件接口功能极其强大，可以用来处理各种各样的任务。

