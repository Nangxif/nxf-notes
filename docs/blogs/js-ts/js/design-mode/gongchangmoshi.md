# 模式三——工厂模式

由一个工厂对象决定创建某一种产品对象类的实例。主要用来创建同一类对象。

即由一个工厂函数，返回某一种产品对象的实例，如果返回的这个对象，每次它里面的内容都是一样的话，也就没有意义了，所以我们会根据我们传给工厂函数的不同参数，返回的实例里面的内容不同。

我们可以用我们平时做管理后台权限的例子来引入这个工厂模式

```
function User(role, pages) {
    this.role = role;
    this.pages = pages;
}
// 假设我们现在有三种不同的角色，然后我们要根据接口返回的数据判断我们要使用角色a还是b，c
var a = new User("superadmin",["home","user-manage","right-manage","news-manage"]);
var b = new User("admin",["home","user-manage","news-manage"]);
var c = new User("superadmin",["home","user-manage"]);
// 接口返回之后我们通过类似a.role===current.role去判断是否取a，还是b,还是c，这种写法一开始就实例化了三个User实例，占用内存，这是不合理的
```

开始优化

**ES5写法**

```
function UserFactory(role) {
	function User(role, pages) {
		this.role = role;
		this.pages = pages;
	}
	switch(role) {
		case "superadmin": {
			return new User("superadmin",["home","user-manage","right-manage","news-manage"]);
		}
		case "admin": {
			return new User("admin",["home","user-manage","news-manage"]);
		}
		case "editor": {
			return new User("superadmin",["home","user-manage"]);
		}
		default: {
			throw new Error("参数错误");
		}
	}
}
// 使用
var user = UserFactory("superadmin");
```

**ES6写法**

```
class User {
	constructor(role, pages) {
    	this.role = role;
    	this.pages = pages;
	}
	// 静态方法
    static UserFactory(role) {
        switch(role) {
            case "superadmin": {
                return new User("superadmin",["home","user-manage","right-manage","news-manage"]);
            }
            case "admin": {
                return new User("admin",["home","user-manage","news-manage"]);
            }
            case "editor": {
                return new User("superadmin",["home","user-manage"]);
            }
            default: {
                throw new Error("参数错误");
            }
        }
    }
}
// 使用
var user = User.UserFactory("superadmin");
```

简单工厂的优点在于，你只需要一个正确的参数，就可以获取到你所需要的对象，而无需知道其创建的具体细节。但是在函数包含了所有对象的创建逻辑和判断逻辑的代码，没增加新的构造函数还需要修改判断的逻辑代码，当我们的对象不是上面三个而是十个或者更多的时候，这个函数会成为一个庞大的超级函数，变得更难以维护。所以，简单工厂只能用于创建的对象数量较少，对象的创建逻辑不复杂时使用。