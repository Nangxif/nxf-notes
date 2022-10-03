# lerna使用【摘录】

原博客链接https://juejin.cn/post/6844903918279852046

**1.安装lerna**

```
npm i lerna -g
```

**2.创建lerna项目**

```
lerna init
```

**3.创建npm包**

在packages里面创建包

```
lerna create package-c
```

**4.增加模块依赖**

分别给相应的 package 增加依赖模块

```
lerna add antd // 为所有 package 增加 antd 模块，这个模块会被安装到每个包的node_modules里面
lerna add antd --scope @monorepo/react-app // 为 @monorepo/react-app 增加 antd 模块 
lerna add @monorepo/package-a --scope @monorepo/react-app // 增加内部模块之间的依赖
```

**5.依赖包管理**

当我们维护这个项目时，新拉下来仓库的代码后，需要为各个 package 安装依赖包。lerna add 时也发现了，为某个 package 安装的包被放到了这个 package 目录下的 `node_modules` 目录下。这样对于多个 package 都依赖的包，会被多个 package 安装多次，并且每个 package 下都维护 `node_modules` ，也不清爽。于是我们使用 --hoist 来把每个 package 下的依赖包都提升到工程根目录，来降低安装以及管理的成本。

```
lerna bootstrap --hoist
```

为了省去每次都输入 --hoist 参数的麻烦，可以在 lerna.json 配置：

```
{
  "packages": [
    "packages/*"
  ],
  "command": {
    "bootstrap": {
      "hoist": true
    }
  },
  "version": "0.0.1-alpha.0"
}
```

PS:关于 lerna link 和 lerna bootstrap

如果 packages 下的包有相互依赖，我试了一下直接lerna bootstrap，已经帮我们进行了 lerna link 了，而 lerna link 只是帮我们做软链接工作。

而且即使发布到线上，执行 `lerna bootstrap` ，也是会 link 本地依赖包，而不是去线上安装。

所以感觉只需使用 `lerna bootstrap` 命令就行了。

**6.删除依赖包**

删除所有包的node_modules，顶层的node_modules不会被删除

```
lerna clean
```

<Image :src="'/automation/package-management-tool/monorepo/lerna/1.png'" />

**7.查看packages下面有哪些包**

```
lerna ls
lerna list
```

<Image :src="'/automation/package-management-tool/monorepo/lerna/2.png'" />

**8.运行某个包里的命令`lerna run < script >`**

```
lerna run --scope my-component test
```

**9.在某个包或者所有包运行命令`lerna exec -- < command >`**

```
// 在每个包运行命令
lerna exec -- rm -rf ./node_modules
// 在某个包运行命令
lerna exec --scope my-component
```

**10.列出下次发版要更新的包**

```
lerna changed
```

**11.发布包**

在发布包之前一定要有一个github仓库，而且还需要有一个master分支，不然流程走不下去。而且要登录npm。

在登录npm的时候一定要关注一下npm的镜像是否正确，我之前的镜像是taobao的，所以导致登录一直报403，切换为https://registry.npmjs.org/后输入账号、密码，邮箱，以及邮箱验证码即可登录成功。

然后输入

```
lerna publish
```

输入命令行之后会出现这样的界面

<Image :src="'/automation/package-management-tool/monorepo/lerna/3.png'" />

选择我们要发版的版本号，是大版本还是小版本？选择完之后会列出这次需要更新的包

<Image :src="'/automation/package-management-tool/monorepo/lerna/4.png'" />

然后就发布成功啦