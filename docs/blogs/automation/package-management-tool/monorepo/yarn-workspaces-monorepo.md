# yarn workspaces创建monorepo项目

我们先用`yarn init -y`创建一个项目

此时的`package.json`长这样

```
{
  "name": "yarn-monorepo",
  "version": "1.0.0",
  "main": "index.js",
  "license": "MIT"
}
```

上面的`main`字段是用不到的，因为我们的包并不在根目录下面，同时要添加`private: true`

注意：`private: true`配置是必需的！工作区并不意味着要被发布，所以需要添加了这个安全措施，以确保不会发布到npm仓库。

最后要加上

```
{
	"workspaces":[
		"packages/*"
	]
}
```

`workspaces`可以是一个数组也可以是一个对象。

上面表示我们所有的包都放在一个叫做packages的文件夹里面。如果除了packages之外我们还想在app文件夹下面放包，可以这么表示

```
{
	"workspaces":[
		"packages/*",
		"app/*"
	]
}
```

接着我们在packages下面用`yarn init -y`创建两个包，一个package-a，另一个package-b。

然后修改这两个包的包名

```
{
  "name": "@monorepo/package-a",
  "version": "1.0.0",
  "main": "index.js",
  "license": "MIT"
}
{
  "name": "@monorepo/package-b",
  "version": "1.0.0",
  "main": "index.js",
  "license": "MIT"
}
```

我们在package-a里面创建一个index.js并且写点东西

```
// package-a/index.js
console.log("package-a");
```

然后给package-a添加一个命令行

```
"dev": "node index.js"
```

同样的，package-b也有个index.js，但是package-b会引用package-a

```
// package-b/index.js
require("@monorepo/package-a");
console.log("package-b");
```

同时，我们在package-b的依赖里面添加package-a包

```
"dependencies": {
  "@monorepo/package-a": "1.0.0"
}
```

到目前为止，我们直接执行package-b的dev还是会报错的，因为我们压根就没安装`@monorepo/package-a`。

那么此时我们需要在package-b文件夹下面执行

```
yarn
yarn install
```

然后执行

```
yarn dev
此刻会输出
This is package a
This is package b
```

细心的朋友可以发现，我们在package-b里面装了package-a这个包的时候，并没有在package-b目录下出现node_modules这个包，而是在monorepo根目录下有node_modules。这个就是workspaces的一个特性，叫hoisting！！

hoisting这种特性会把所有包的依赖都安装到monorepo根目录下，这样做的好处就是节省磁盘空间。

比如我们现在有十个react项目，这十个项目都需要react这个包，那如果每个包都装一下这些重复的依赖，那么会占用很多磁盘空间。

yarn-workspaces的monorepo还有一个很方便的点就是，如果我们在github上面拉了一个monorepo项目，我们可以不用进去每个包里面执行`yarn install`，我们可以在根目录下面执行就可以安装全部包的依赖。

这里有个需要注意的点，因为我们还没有发布`@monorepo/package-a`这个包，因此我们没办法直接在package-b下面用`yarn add @monorepo/package-a`安装包，我们只能手动地去package_b的package.json里面添加依赖。如果我们想用命令行去安装本地包的依赖的话，lerna倒是可以做到。

我们再来讲解其他的用法，如果现在我的packages里面有两个react前端项目，一个项目用antd3，一个用antd4，依赖的版本不一样，那么yarn-monorepo的hoisting要怎么提升依赖呢？我们可以配置一个属性，让antd不被提升。

在根目录的package.json重新配置workspaces

```
"workspaces": {
	"packages": [
		"packages/*"
	],
	"nohoist": [
		"**/antd"
	]
}
```

在项目开发过程中我们难免会使用到代码格式化或者语法检查工具，如果我们一个项目一个项目地安装这些，就很没有必要，所以我们可以将它放在根目录下统一管理

所以我们在根目录执行

```
yarn add prettier
```

<Image :src="'/automation/package-management-tool/monorepo/yarn-workspaces-monorepo/1.png'" />

控制台会提示目前是根目录，是不是搞错了，不在packages的包里面不能安装包。

如果我们一定要安装的话，可以用下面的命令行

```
yarn add prettier -W
```

