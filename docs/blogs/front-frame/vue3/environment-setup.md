# Vue3环境搭建

Vue3中使用`pnpm` `workspace`来实现`monorepo`

## 一、全局安装pnpm

```
npm instanll pnpm -g

pnpm init -y
```

## 二、创建.npmrc文件

```
shamefully-hoist = true
```

这里可以尝试一下安装Vue3，`pnpm install vue@next` 此时默认情况下Vue3中依赖的模块不会被提升到node_modules下，添加羞耻的提升可以将Vue3所依赖的模块提升到node_modules中

## 三、目录结构

```
packages
 - reactivity  // Vue3响应式api逻辑代码
 - runtime-core  // Vue3虚拟节点，创建节点，diff算法，生命周期等逻辑代码
 - runtime-dom  // Vue3渲染器createRenderer，以及渲染器的配置代码
 - shared  // Vue3公共方法文件
scripts
 - dev.js
.npmrc
pnpm-workspace.yaml
```

## 四、打包配置（dev.js）

```
const args = require('minimist')(process.argv.slice(2));
const { build } = require('esbuild');
const { resolve } = require('path');
const target = args._[0] || 'reactivity';
const format = args.f || 'global';

const pkg = require(resolve(__dirname, `../packages/${target}/package.json`));
// iife 立即执行函数
// cjs node中的模块
// esm 浏览器中的esmodule模块
const outputformat = format.startsWith('global')
  ? 'iife'
  : format === 'cjs'
  ? 'cjs'
  : 'esm';

const outfile = resolve(
  __dirname,
  `../packages/${target}/dist/${target}.${format}.js`
);

build({
  entryPoints: [resolve(__dirname, `../packages/${target}/src/index.ts`)],
  outfile,
  bundle: true,
  sourcemap: true,
  format: outputformat,
  globalName: pkg.buildOptions?.name,
  platform: format === 'cjs' ? 'node' : 'browser',
  watch: {
    onRebuild(error) {
      if (!error) {
        console.log(error);
      }
    },
  },
}).then(() => {
  console.log('watching----');
});

```

## 五、运行的命令

```
"dev": "node scripts/dev.js reactivity -f global",
"dev:runtimeDOM": "node scripts/dev.js runtime-dom -f global",
"dev:runtimeCORE": "node scripts/dev.js runtime-core -f global"
```

## 六、各个包的package.json配置

### 1.reactivity

```
{
  "name": "@vue/reactivity",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "keywords": [],
  "author": "",
  "license": "ISC",
  "buildOptions": {
    "name": "VueReactivity",
    "formats": [
      "global",
      "cjs",
      "esm-bundler"
    ]
  }
}
```

### 2.runtime-core

```
{
  "name": "@vue/runtime-core",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "keywords": [],
  "author": "",
  "license": "ISC",
  "buildOptions": {
    "name": "VueRuntimeCORE",
    "formats": [
      "cjs",
      "esm-bundler"
    ]
  }
}
```

### 3.runtime-dom

```
{
  "name": "@vue/runtime-dom",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "keywords": [],
  "author": "",
  "license": "ISC",
  "buildOptions": {
    "name": "VueRuntimeDOM",
    "formats": [
      "cjs",
      "esm-bundler",
      "global"
    ]
  }
}
```

### 4.shared

```
{
  "name": "@vue/shared",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "keywords": [],
  "author": "",
  "license": "ISC",
  "buildOptions": {
    "formats": [
      "cjs",
      "esm-bundler"
    ]
  }
}
```

