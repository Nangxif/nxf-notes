# 模式十五——组合模式

> 组合模式在对象间形成树形结构；
>
> 组合模式中基本对象和组合对象被一致对待；
>
> 无需关心对象有多少层，调用时只需在根部进行调用。

它在我们的树形结构的问题中，模糊了简单元素和复杂元素的概念。客户程序可以像处理简单元素一样来处理复杂元素，从而使得客户程序与复杂元素内部的结构解耦。

我们现在来写一段遍历文件夹以及遍历文件夹里面的文件的程序

```
const Folder = function(folder) {
	this.folder = folder;
	this.lists = [];
}
Folder.prototype.add = function(res) {
	this.lists.push(res);
}
Folder.prototype.scan = function(res) {
	console.log(`开始扫描文件夹：${this.folder}`);
	for(let index = 0;index < this.lists.length; index++) {
		this.lists[index].scan();
	}
}
const File = function(file) {
	this.file = file;
}

File.prototype.scan = function() {
	console.log(`开始扫描文件：${this.file}`);
}

const folder = new Folder("root");
const folder1 = new Folder("html");
const folder2 = new Folder("js");

const file1 = new File("html4");
const file2 = new File("html5");
const file3 = new File("es5");
const file4 = new File("es6");

folder.add(folder1);
folder.add(folder2);
folder1.add(file1);
folder1.add(file2);
folder2.add(file3);
folder2.add(file4);

folder.scan();
```

