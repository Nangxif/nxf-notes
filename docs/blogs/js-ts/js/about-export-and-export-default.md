# 关于export和export default的一些知识
1.
const a = 1;
const b = 2;
export { a ,b };

等价于
export const a = 1;
export const b = 2;

导入方式
import {a,b} from 'xxx'

2.
const a = 1;
export { a as default };
等价于
const a = 1;
export default a;
导入方式
import a from 'xxx'

3.
const a = 1;
const b = 2;
export { a, b }
导入方式
import * as module from 'xxx'
调用方式
module.a
module.b

等价于
const a = 1;
const b = 2;
export default { a, b }
导入方式
import module from 'xxx'
调用方式
module.a
module.b


4.
export const a = 1;
const b = 2;
export default b;
导入方式
import * as module from 'xxx'
调用方式
module.a
module.default // b藏在module的default里

5.
1.js文件
export const a = 1;
export const b = 2;
2.js文件
export const c = 3;
export * from './1.js'

导入方式
import * as module from 'xxx'

module的值为
{
    a:1,
    b:2,
    c:3
}

6.
export const a = 1;
const b =2;
export default b;
导入方式
import {a, default as b} from 'xxx'