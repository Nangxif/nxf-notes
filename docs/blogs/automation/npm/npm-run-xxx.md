# 运行 npm run xxx 的时候发生了什么？(摘录)

npm run xxx的时候，发生了什么。

 npm run xxx的时候，首先会去项目的package.json文件里找scripts 里找对应的xxx，然后执行 xxx的命令，例如启动vue项目 npm run serve的时候，实际上就是执行了vue-cli-service serve 这条命令

**package.json文件**

```
{
  "name": "h5",
  "version": "1.0.7",
  "private": true,
  "scripts": {
    "serve": "vue-cli-service serve"
   },
}
```

那 为什么 不直接执行`vue-cli-service serve`而要执行`npm run serve` 呢

因为 直接执行`vue-cli-service serve`，会报错，因为操作系统中没有存在`vue-cli-service`这一条指令

那既然`vue-cli-service`这条指令不存在操作系统中，为什么执行`npm run serve`的时候，也就是相当于执行了`vue-cli-service serve` ，为什么这样它就能成功，而且不报指令不存在的错误呢？

我们在安装依赖的时候，是通过npm i xxx 来执行的，例如 `npm i @vue/cli-service`，npm 在 安装这个依赖的时候，就会`node_modules/.bin/` 目录中创建 好`vue-cli-service` 为名的几个可执行文件了。

.bin 目录，这个目录不是任何一个 npm 包。目录下的文件，表示这是一个个软链接，打开文件可以看到文件顶部写着 `#!/bin/sh` ，表示这是一个脚本。

由此我们可以知道，当使用 `npm run serve` 执行 `vue-cli-service  serve` 时，虽然没有安装 `vue-cli-service`的全局命令，但是 npm 会到 `./node_modules/.bin` 中找到 `vue-cli-service` 文件作为  脚本来执行，则相当于执行了 `./node_modules/.bin/vue-cli-service serve`（最后的 serve 作为参数传入）。

可以看到，它存在项目最外层的**package-lock.json**文件中

从 package-lock.json 中可知，当我们npm i 整个新建的vue项目的时候，npm 将 bin/vue-cli-service.js 作为 bin 声明了。

所以在 npm install 时，npm 读到该配置后，就将该文件软链接到 ./node_modules/.bin 目录下，而 npm 还会自动把node_modules/.bin加入$PATH，这样就可以直接作为命令运行依赖程序和开发依赖程序，不用全局安装了。

假如我们在安装包时，使用 `npm install -g xxx` 来安装，那么会将其中的 bin 文件加入到全局，比如 create-react-app 和 vue-cli ，在全局安装后，就可以直接使用如 vue-cli projectName 这样的命令来创建项目了。

也就是说，npm i 的时候，npm 就帮我们把这种软连接配置好了，其实这种软连接相当于一种映射，执行npm run xxx 的时候，就会到 node_modules/bin中找对应的映射文件，然后再找到相应的js文件来执行。

刚刚看到在node_modules/bin中 有三个vue-cli-service文件。为什么会有三个文件呢？

如果我们在 cmd 里运行的时候，windows 一般是调用了 `vue-cli-service.cmd`，这个文件

所以当我们运行`vue-cli-service serve`这条命令的时候，就相当于运行 `node_modules/.bin/vue-cli-service.cmd serve`。

然后这个脚本会使用 node 去运行` vue-cli-service.js`这个 js 文件

由于 node 中可以使用一系列系统相关的 api ，所以在这个 js 中可以做很多事情，例如读取并分析运行这条命令的目录下的文件，根据模板生成文件等。

```
# unix 系默认的可执行文件，必须输入完整文件名
vue-cli-service

# windows cmd 中默认的可执行文件，当我们不添加后缀名时，自动根据 pathext 查找文件
vue-cli-service.cmd

# Windows PowerShell 中可执行文件，可以跨平台
vue-cli-service.ps1
```

