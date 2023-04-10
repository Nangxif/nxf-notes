# 协商缓存和强缓存

## 一、什么是缓存？

浏览器缓存(Brower Caching)是浏览器对之前请求过的文件进行缓存，以便下一次访问时重复使用，节省带宽，提高访问速度，降低服务器压力。

http缓存机制主要在http响应头中设定，响应头中相关字段为Expires、Cache-Control、Last-Modified、Etag。

## 二、缓存的类别

浏览器缓存分为强缓存和协商缓存

##### 1.强缓存：浏览器不会像服务器发送任何请求，直接从本地缓存中读取文件并返回Status Code: 200 OK。

##### 2.协商缓存: 向服务器发送请求，服务器会根据这个请求的request header的一些参数来判断是否命中协商缓存，如果命中，则返回304状态码并带上新的response header通知浏览器从缓存中读取资源。

## 三、跟浏览器缓存相关的字段

### 1.强缓存相关字段

#### ①Expires

过期时间，如果设置了时间，则浏览器会在设置的时间内直接读取缓存，不再请求。

#### ②Cache-Control

当值设为max-age=300时，则代表在这个请求正确返回时间（浏览器也会记录下来）的5分钟内再次加载资源，就会命中强缓存。

Cache-Control除了max-age之外，还有以下几个常用的值

```
max-age：用来设置资源（representations）可以被缓存多长时间，单位为秒；
s-maxage：和max-age是一样的，不过它只针对代理服务器缓存而言；
public：指示响应可被任何缓存区缓存；
private：只能针对个人用户，而不能被代理服务器缓存；
no-cache：强制客户端直接向服务器发送请求,也就是说每次请求都必须向服务器发送。服务器接收到请求，然后判断资源是否变更，是则返回新内容，否则返回304，未变更。这个很容易让人产生误解，使人误以为是响应不被缓存。实际上Cache-Control:no-cache是会被缓存的，只不过每次在向客户端（浏览器）提供响应数据时，缓存都要向服务器评估缓存响应的有效性。
no-store：禁止一切缓存（这个才是响应不被缓存的意思）。
```

**cache-control是http1.1的头字段，expires是http1.0的头字段,如果expires和cache-control同时存在，cache-control会覆盖expires，建议两个都写。**

接下来我们用两个小实验来验证一下no-cache和no-store

我们写一遍整个服务的框架，后面的实验都是基于这个框架来

**no-store实验**

```
const express = require('express');
const path = require('path');
const app = express();

const router = express.Router();

router.get('/test.js', (req, res) => {
  console.log('访问了');
  res.set('cache-control', 'no-store');
  res.sendFile(path.join(__dirname, './test.js'));
});

app.use(router);

app.listen(3000, function () {
  console.log('127.0.0.1:3000');
});

```

<Image :src="'/browser/negotiated-cache-and-strong-cache/1.png'" />

我们发现设置了**no-store**之后浏览器每次请求这个资源都会返回200。

**no-cache实验**

```
res.set('Cache-Control', 'no-cache');
```

<Image :src="'/browser/negotiated-cache-and-strong-cache/2.png'" />

<Image :src="'/browser/negotiated-cache-and-strong-cache/3.png'" />

我们发现设置了**no-cache**之后浏览器第一次请求这个资源返回200，后面判断到资源没有变更后，返回304，接口也接收到了请求，控制台会输出“访问了”。

### 2.协商缓存相关字段

Last-Modifed/If-Modified-Since和Etag/If-None-Match是分别成对出现的，呈一一对应关系

#### ①Etag/If-None-Match

Etag字段是在响应头返回的，If-None-Match是存在于请求头的。

Etag是属于HTTP 1.1属性，它是由服务器（Apache或者其他工具）生成返回给前端，用来帮助服务器控制Web端的缓存验证。 Apache中，ETag的值，默认是对文件的索引节（INode），大小（Size）和最后修改时间（MTime）进行Hash后得到的。

当资源过期时，浏览器发现响应头里有Etag,则再次像服务器请求时带上请求头if-none-match(值是Etag的值)。服务器收到请求进行比对，决定返回200或304。

我们接下来用一个实验来看一下这个过程

首先设置Cache-Control

```
res.set('Cache-Control', 'no-cache');
```

第一次请求接口

<Image :src="'/browser/negotiated-cache-and-strong-cache/4.png'" />

接口返回200，此时请求头里面是没有If-Modified-Since字段的，响应头里面会有一个ETag返回给浏览器。

第二次请求

<Image :src="'/browser/negotiated-cache-and-strong-cache/5.png'" />

在资源文件没有变更的情况下，接口返回304，此时请求头里面有If-Modified-Since字段的，响应头里面会有一个ETag返回给浏览器，而且这两个值是相等的。

修改资源文件之后进行第三次请求

<Image :src="'/browser/negotiated-cache-and-strong-cache/6.png'" />

在资源文件变更的情况下，接口返回200，此时请求头里面有If-Modified-Since字段的，响应头里面会有一个ETag返回给浏览器，而且这两个值是不相等的。

#### ②Last-Modifed/If-Modified-Since

Last-Modified：浏览器向服务器发送资源最后的修改时间，**存在于响应头**。

If-Modified-Since：当资源过期时（浏览器判断Cache-Control标识的max-age过期），发现响应头具有Last-Modified声明，则再次向服务器请求时带上头If-Modified-Since，表示请求时间。服务器收到请求后发现有if-modified-since则与被请求资源的最后修改时间进行对比（Last-Modified）,若最后修改时间较新（大），说明资源又被改过，则返回最新资源，HTTP 200 OK;若最后修改时间较旧（小），说明资源无新修改，响应HTTP 304 走缓存。**存在于请求头**。

- Last-Modifed/If-Modified-Since的时间精度是秒，而Etag可以更精确。
- Etag优先级是高于Last-Modifed的，所以服务器会优先验证Etag

## 四、F&Q

**1.http请求为什么会自动加上If-Modified-Since**

HTTP请求中的If-Modified-Since请求头是用来帮助服务器判断资源是否已被修改，从而避免下载无需更新的资源。当浏览器第一次从服务器请求某个资源时，服务器会返回该资源的Last-Modified头部，表示该资源最后一次修改的时间，浏览器则将该时间存储在缓存中。当下次再请求该资源时，浏览器会在请求头中带上If-Modified-Since头部，值为上次服务器返回的Last-Modified时间。如果该资源的最后修改时间与If-Modified-Since时间相等或者更早，说明资源没有更新，服务器会返回一个特殊的304 Not Modified响应码，告诉浏览器直接从缓存中读取该资源，加快了页面的加载速度。

因此浏览器在每次请求资源的时候，可能会自动加上If-Modified-Since请求头，以便于避免下载无需更新的资源，从而提高性能。

**2.If-Modified-Since不够用了吗？为什么还需要Etag**

虽然If-Modified-Since在HTTP协议中已经有了很长时间，但是存在一些问题，比如：

1. 如果文件的修改时间被篡改了，那么If-Modified-Since就无法起作用了。
2. 有些情况下，修改时间并不是最好的标识，对于动态生成的内容或者文本文件，每次修改后修改时间都会改变，因此无法利用If-Modified-Since缓存这些内容。
3. 对于一些大型网站，即使最后修改的时间没有改变，但是网站的内容仍然有可能已经发生了变化，这时If-Modified-Since就无法准确地判断内容是否被修改过。

相对应的，ETag是使用一种类似哈希摘要的方式生成的唯一标识符，无论文件的修改时间还是内容是否发生变化，都能够准确地标识该资源的特定版本。因此，ETag提供了比If-Modified-Since更精确地判断文件是否修改的方法，可以更好地支持Web缓存和其他应用场景的需求。所以，ETag是If-Modified-Since的一种补充，可以更完善地衡量资源是否发生变化。

**3.Cache-Control和If-Modified-Since的优先级**

Cache-Control是比If-Modified-Since优先级更高的，如果Cache-Control头存在，则浏览器会按照Cache-Control指示的缓存机制来处理响应，而忽略If-Modified-Since请求头。具体来说，如果响应的Cache-Control头包含no-cache或no-store指令，则浏览器不会缓存响应，而会在每次请求时向服务器发起完整请求。

如果响应中没有Cache-Control头，则浏览器会在发送请求时自动添加If-Modified-Since头，并在下一次请求时通过比较Last-Modified头来判断资源是否被修改。如果未发生修改，则服务器仅返回304 Not Modified响应，在浏览器中加载缓存的资源，并更新缓存的Last-Modified时间戳。

因此，当Cache-Control和If-Modified-Since同时存在时，浏览器会优先遵循Cache-Control头中的缓存策略来处理响应。

**4.Cache-Control和Etag的优先级**

Cache-Control是比Etag优先级更高的，如果响应头包含Cache-Control指令，则浏览器会按照Cache-Control中指定的缓存策略来处理响应，而忽略Etag头。具体来说，如果响应的Cache-Control指令为no-cache或no-store，则浏览器不会缓存响应，而是在每次请求时向服务器发送请求。

如果响应头中缺少Cache-Control指令，则浏览器会检查Etag头来判断资源是否有更新。如果Etag值与浏览器上次请求相同，则浏览器会直接从本地缓存加载资源，否则浏览器会向服务器发送请求，并在响应中包含新的Etag值，更新本地缓存。

因此，当Cache-Control和Etag同时存在时，浏览器会优先遵循Cache-Control中指定的缓存策略来处理响应，而Etag只是一个辅助判断缓存更新的标识。

**5.为什么我一直实现不出强缓存**