# 模式五——建造者模式

建造者模式属于创建型模式的一种，提供一种创建复杂对象的方式。它将一个复杂的对象的构建与它的标识分离，使得同样的构建过程可以创建不同的表示。

建造者模式是一步一步地创建一个复杂的对象，它允许用户只通过指定复杂的对象的类型和内容就可以构建它们，用户不需要指定内部的具体构造细节。

假设现在有个例子，淘票票有一个navbar用来显示不同的电影种类，同时也有一个list来显示navbar选择的不同的种类的电影。

那么此时navbar和list都需要经过三个步骤

1. init创建各自的容器节点
2. ajax请求数据
3. render渲染页面

```
class Navbar {
	init() {
		console.log("navbar-init");
	}
	getData() {
		return new Promise((resolve) => {
			setTimeout(() => {
				resolve();
				console.log("navbar-getData");
			}, 1000)
		})
	}
	render() {
		console.log("navbar-render");
	}
}
class List {
	init() {
		console.log("list-init");
	}
	getData() {
		return new Promise((resolve) => {
			setTimeout(() => {
				resolve();
				console.log("list-getData");
			}, 1000)
		})
	}
	render() {
		console.log("list-render");
	}
}
// 建造者模式就是通过建造的这么一个类，这个类关注的是我们每一步的步骤，想看细节我们也可以看到细节
class Creator {
	async startBuild(builder) {
		await builder.init();
		await builder.getData();
		await builder.render();
	}
}
const op = new Creator();
op.startBuild(new Navbar());
op.startBuild(new List());
```

建造者模式将一个复杂对象的构建层与其表示层相互分离，同样的构建过程可采用不同的表示。工厂模式主要是为了创建对象实例或者类簇（抽象工厂），关心的是最终产出（创建）的是什么，而不关心创建的过程。而建造者模式关心的是创建这个对象的整个过程，甚至于创建对象的每一个细节。

上面的代码如果我们说不要Creator，我们非要写成这样子

```
class Navbar {
	init() {
		console.log("navbar-init");
		getData();
	}
	getData() {
		return new Promise((resolve) => {
			setTimeout(() => {
				resolve();
				console.log("navbar-getData");
			}, 1000)
		})
		render();
	}
	render() {
		console.log("navbar-render");
	}
}
```

这样子写行不行，当然可以，但是代码看起来就很混乱。init，getData和render本来就是同级的函数，非要把它们合并在一起。