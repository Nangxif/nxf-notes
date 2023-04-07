# 沙箱的原理

沙箱的作用是防止应用加载的时候，对widow造成污染。

## 一、单例沙箱

### 1.快照沙箱SnapshotSandbox

```
class SnapshotSandbox {
    constructor(){
        this.modifyPropsMap = {}; // 存储全局哪些属性被修改了
    }
    active(){
        this.windowSnapShot = {};
        // 给window拍照
        Object.keys(window).forEach(prop=>{
            this.windowSnapShot[prop] = window[prop]
        })
        // 激活的时候把被修改过的属性重新赋值给window
        Object.keys(this.modifyPropsMap).forEach(prop=>{
            window[prop] = this.modifyPropsMap[prop]
        })
    }
    inactive(){
        // 失活的时候，将modifyPropsMap先清空，然后存储最新的被修改的window属性
        this.modifyPropsMap = {}
        Object.keys(window).forEach(prop=>{
            if(window[prop] !== this.windowSnapShot[prop]){
                this.modifyPropsMap[prop] = window[prop]; 
                // 最后把window上的属性重置回激活前的状态
                window[prop] = this.windowSnapShot[prop];
            }
        })
    }
}
let sandbox = new SnapshotSandbox();
sandbox.active();
window.a = 100;
window.b = 200;
sandbox.inactive();
console.log(window.a,window.b)
sandbox.active();
console.log(window.a,window.b)
```

缺点：浪费内存。

### 2.proxy沙箱LegacySandbox

```
class LegacySandbox {
    constructor(){
        // 1) 修改的内容    
        this.modifyPropsMap = new Map();
        // 2) 新增的内容
        this.addedPropsMap = new Map();
        // 3) 不管修改还是新增的内容
        this.currentPropsMap = new Map();
		// 创建一个空对象，用作代理对象
        const fakeWindow = Object.create(null)
        const proxy = new Proxy(fakeWindow,{
            get:(target,key,recevier)=>{
            	// 取值代理对象的时候，直接从window上查找相应的属性
                return window[key]
            },
            set:(target,key,value)=>{
            	// 给代理对象设置值的时候，需要区分是添加的属性还是修改的属性
                if(!window.hasOwnProperty(key)){
                    // 如果这个key在window找不到，那么就是添加的属性
                    this.addedPropsMap.set(key,value)
                }else if(!this.modifyPropsMap.has(key)){
                    // 如果key在window找得到，但是在modifyPropsMap找不到，那么就保存修改的前的值
                    this.modifyPropsMap.set(key,window[key])
                }
                // 所有的修改操作都保留了一份最新的
                this.currentPropsMap.set(key,value);
                window[key] = value;// 修改成最新的内容 
            },
        })
        this.proxy = proxy
    }
    setWindowProp(key,value){
        if(value == undefined){
        	// 如果传进来的value是undefined那么就直接删除这个属性
            delete window[key];
        }else{
            window[key] = value; // 覆盖修改前的
        }
    }
    active(){
    	// 沙箱被激活的时候，遍历currentPropsMap将之前操作过的值赋值给window
        this.currentPropsMap.forEach((value,key)=>{
            this.setWindowProp(key,value)
        })
    }
    inactive(){
    	// 沙箱失活的时候，遍历modifyPropsMap将存储的window被修改前的值重置赋值给window
        this.modifyPropsMap.forEach((value,key)=>{
            this.setWindowProp(key,value)
        })
        // 沙箱失活的时候，遍历addedPropsMap将添加的属性从window删除
        this.addedPropsMap.forEach((value,key)=>{
            this.setWindowProp(key,undefined)
        })
    }
}
let sandbox = new LegacySandbox();
sandbox.proxy.a = 100;
console.log(window.a,sandbox.proxy.a)
sandbox.inactive();
console.log(window.a,sandbox.proxy.a)
sandbox.active();
console.log(window.a,sandbox.proxy.a)
```

优点：相比快照模式节约内存。

缺点：proxy兼容性问题。

**单例模式的缺点：快照 、基于proxy只能单例的情况下使用，同时加载两个应用就会混乱，有风险**

## 二、多例模式

### 1.ProxySandbox

```
class ProxySandbox {
    constructor(){
    	// 当前沙箱是否处于激活状态
        this.running = false
        // 创建一个对象作为window的代理对象
        const fakeWindow = Object.create(null)
        this.proxy = new Proxy(fakeWindow,{
            get:(target,key)=>{
            	// 从代理对象取值的时候，先判断这个key有没有在fakeWindow上，没有的话去window上面取
                return key in target ? target[key]:window[key]
            },
            set:(target,key,value)=>{
                if(this.running) {
                    // 给沙箱的fakeWindow设置值的时候必须在沙箱处于激活状态的时候，这种模式修改不再操作window属性
                    target[key] = value;
                }
                return true;
            }
        })
    }
    active(){
        if(!this.running) this.running = true
    }
    inactive(){
        this.running = false;
    }
}
let sandbox1 = new ProxySandbox();
let sandbox2 = new ProxySandbox();
sandbox1.active();
sandbox2.active();
sandbox1.proxy.a = 100;
sandbox2.proxy.a = 100; // 不会影响window
console.log(sandbox1.proxy.a)
console.log(sandbox2.proxy.a)
sandbox1.inactive();
sandbox2.inactive();
sandbox1.proxy.a = 200;
sandbox2.proxy.a = 200;
console.log(sandbox1.proxy.a,window.a)
console.log(sandbox2.proxy.a)
```

