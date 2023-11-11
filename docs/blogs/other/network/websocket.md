# websocket

参考链接：https://juejin.cn/post/7127455765534605349

在开始讲这个课题之前，我们先了解一下三种数据传输模式

## 一、数据传输模式

### 1.单工

在单工模式下，通信是**单向**的，即数据流向一个方向。设备只能发送数据而不能接收数据，或者可以接收数据但不能发送数据。

例子：广播电台是一个单工频道，它将信号传输给听众，但从不允许他们回传。

### 2.半双工

半双工**允许双向通信**，但**不能同时进行**，信号在介质上双向传播，但一次只能向一个方向传播，由于信号仅沿一个方向传播，因此设备可以在给定时间发送或接收数据，设置为半双工的网卡在发送数据时无法接收数据。

例子：对讲机、http

### 3.全双工

全双工允许**同时**在**两个方向**上进行通信，它将可用通道分为两部分，一部分用于发送数据，另一部分用于接收数据。

例子：电话、websocket

http是一种无状态协议，每个请求都是独立的，请求应答模式，服务端无法主动给客户端推送消息，所以它是半双工协议。而且http受浏览器同源策略的影响。因此在某些场景，使用http这种协议来处理逐渐变得棘手。

## 二、不用websocket以前是怎样实现实时获取服务端数据

### 1.轮询

```javascript
// 服务端只提供一个查询当前时间的接口
import express from 'express';
import cors from 'cors';
const app = express();
app.use(cors());
// 轮询，短轮询（设置一个时间来询问你获取最新的信息）
app.get('/clock',function(req,res){
    // 如果有新的数据了 在响应给服务器
    res.send(new Date().toLocaleString())
});
app.listen(3000,function(){
    console.log('server start 3000')
})
```

```javascript
setInterval(() => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET','http://localhost:3000/clock',true);
    xhr.onload = function(){
        clock.innerHTML = xhr.responseText;
    }
    xhr.send();
}, 1000); // 每隔1s就发送一个请求
```

上面的案例就是一个轮询的例子，每隔一秒请求一下接口获取最新的服务器时间。这种方式有优点也有缺点

优点：

实现容易； 不适合实时性比较的高的，低并发。

缺点：

- 竞速问题： 无法保证请求的先后顺序，可能会出现多个请求返回的时候同时修改资源。

- 频繁的网络请求：请求数目多导致服务端增加负载，客户端发请求也会出现性能问题。

- http在发送的时候会增加http报文（鉴权，内容类型），造成额外的数据消耗。

### 2.长轮询

长轮询的服务端案例代码与轮询一致

```javascript
// 客户端发送请求后，服务端响应后，我就发下一个请求
function longPolling(){
    const xhr = new XMLHttpRequest();
    xhr.open('GET','http://localhost:3000/clock',true);
    xhr.onload = function(){
        clock.innerHTML = xhr.responseText
        longPolling();
    }
    xhr.send();
}
longPolling();
```

长轮询就是想解决短轮询的问题 ，希望实时性更强，但是缺点也是很明显

- 如果实时性强了，也会造成频繁的网络请求。

- 链接堆积问题  这些链接都需要在服务端中保持打开， 占用服务端资源。

总之，实时性高了，但是要求服务端的并发能力必须强。

### 3.iframe流

iframe流属于Comet技术。Comet是一种用于web的推送技术，能使服务器实时地将更新的信息传送到客户端，而无须客户端发出请求，目前有两种实现方式，长轮询和iframe流。

```javascript
// 服务端代码
import express from 'express'
import cors from 'cors'
const app = express();
app.use(cors());
app.get('/clock',function(req,res){
    // 如果有新的数据了 再响应给服务器
    // 不能使用res.end、res.send
    // 使用res.write方法不会结束本次的响应
    setInterval(()=>{
        res.write(`
        <script>
            document.domain = 'localhost'
            parent.document.getElementById('clock').innerHTML = "${new Date().toLocaleString()}"
        </script>
        `)
    },1000);
});
app.listen(3000,function(){
    console.log('server start 3000')
})
```

```html
<body>
    <div id="clock"></div>
    <script>
        document.domain = 'localhost'
    </script>
    <iframe src="http://localhost:3000/clock" frameborder="0"></iframe>
</body>
```

这种方式可以保证实时性，而且不用客户端和服务端频繁发，但是还是单向通信。

### 4.sse EventSource（Server-Sent Events）

SSE正是一种流(Streaming)的实现方式，可以看作是Comet技术的一种实现和演进。

```javascript
// 服务端代码
import express from 'express'
import cors from 'cors'
const app = express();
app.use(cors());
app.get('/clock',function(req,res){
    res.setHeader('Content-Type','text/event-stream'); // 这里标明服务端传递的是一个事件流
    setInterval(()=>{
        // 和http协议一样 按照行的方式传输
        // Content-Type: xxxx
        // Authorization: xxx
        res.write(`id:${Math.random()}\nevent:message\ndata:${JSON.stringify({name:"jw",age:30})}\n\n`)
    },1000)
    // 缺点就是单向传输，客户端，无法给服务端传递数据
});
app.listen(3000,function(){
    console.log('server start 3000')
})
```

```html
// 客户端代码
<script>
    const eventsource = new EventSource('http://localhost:3000/clock')
    eventsource.onopen = function(){
        console.log('Connection opened');
    }
    eventsource.onmessage = function(e){ // 写法类似postMessage
        console.log(e.data) 
    }
</script>
```

这种方式具有以下特点:

- 基于HTTP长连接实现
- 服务端向客户端单方面推送消息
- 轻量级协议,文本格式
- 支持事件流与重连

以上几种方式终究是无法高效地实现双工通信。

## 三、websocket

websocket支持双向通信，并且能建立持久链接， 发送的消息增加帧是非常小的，支持多种数据格式，天生支持跨域通信。

WebSocket 和 Comet 技术有一定的相似之处,但更准确地来说,WebSocket 不完全属于传统的 Comet 技术。

### 1.websocket的简单使用

```javascript
// 服务器端代码
import express from 'express';
import http from 'http'; 
import {WebSocketServer} from 'ws';
const app = express();
const server = http.createServer(app); // http服务
const wss = new WebSocketServer({server});
wss.on('connection',(ws)=>{
    console.log('Connection opend');
    // 给客户端发送消息
    ws.send('hello client');
    ws.on('message',function(message){
        console.log('客户端发送的数据:' + message);
    });
})
server.listen(3000);
```

```javascript
// 客户端代码
// 服务端主要提供一个websocket服务
const ws = new WebSocket('ws://localhost:3000');
ws.onopen = function(){
    console.log('Connection opend');
    ws.send('hello server'); // 给服务端能发送消息
}
// 监控服务端的数据
ws.onmessage = function(e){
    console.log('服务度响应的数据:' + e.data);
}
```

### 2.解剖websocket

我们可以看到上面的例子在浏览器的network里面是这么展示的

```
General
Request URL: ws://localhost:4000/
Request Method: GET
Status Code: 101 Switching Protocols

Response Headers
HTTP/1.1 101 Switching Protocols
Upgrade: websocket
Connection: Upgrade
Sec-WebSocket-Accept: AAEtvt1ZBbmjP1+d/Lj8oKO1XYM=

Request Headers
GET ws://localhost:4000/ HTTP/1.1
Host: localhost:4000
Connection: Upgrade
Pragma: no-cache
Cache-Control: no-cache
User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36
Upgrade: websocket
Origin: http://localhost:8080
Sec-WebSocket-Version: 13
Accept-Encoding: gzip, deflate, br
Accept-Language: zh-CN,zh;q=0.9
Sec-WebSocket-Key: HC0pLkiAQVkS9CR+upVDEw==
Sec-WebSocket-Extensions: permessage-deflate; client_max_window_bits
```

从General里面我们可以看出，WebSocket连接的建立需要通过发送一个HTTP GET请求来进行握手。

WebSocket连接的建立过程如下：

1. 客户端发送一个HTTP GET请求到服务器，请求升级到WebSocket协议。

   ```
   GET /path/to/websocket HTTP/1.1
   Host: example.com
   Upgrade: websocket
   Connection: Upgrade
   Sec-WebSocket-Key: dGhlIHNhbXBsZSBub25jZQ==
   Sec-WebSocket-Version: 13
   ```

2. 服务器收到请求后，验证请求头部字段，如果接受WebSocket连接，则返回状态码101（Switching Protocols）作为响应。

   ```
   HTTP/1.1 101 Switching Protocols
   Upgrade: websocket
   Connection: Upgrade
   Sec-WebSocket-Accept: s3pPLMBiTxaQ9kYGzzhZRbK+xOo=
   ```

3. 客户端收到状态码101的响应后，确认连接已经切换到WebSocket协议。

4. 连接建立后，双方可以通过WebSocket帧进行实时的双向通信。

PS：WebSocket连接的建立过程中，首先发送的是一个HTTP GET请求，而不是直接发送WebSocket帧。这是因为WebSocket协议是基于HTTP的，通过发送HTTP GET请求来进行握手，然后切换到WebSocket协议进行实时通信。

 在WebSocket握手过程中，客户端会在请求头部字段中包含一个`Sec-WebSocket-Key`字段，该字段的值是一个随机生成的Base64编码字符串。服务器收到请求后，会使用特定的算法对`Sec-WebSocket-Key`的值进行处理，然后将处理后的结果作为`Sec-WebSocket-Accept`字段的值返回给客户端。

客户端收到服务器的响应后，会验证`Sec-WebSocket-Accept`字段的值是否与预期的值匹配。如果匹配成功，说明服务器接受了WebSocket连接请求，并且连接可以继续进行。如果匹配失败，客户端会中断连接。

`Sec-WebSocket-Accept`字段的值是通过将`Sec-WebSocket-Key`的值与一个特定的GUID（"258EAFA5-E914-47DA-95CA-C5AB0DC85B11"）进行拼接，然后进行SHA-1哈希计算，并进行Base64编码得到的。

```javascript
import crypto from 'crypto'
const number = '258EAFA5-E914-47DA-95CA-C5AB0DC85B11'; // 固定
const websocketKey = 'P2P2F9kEf/wg18RkzXM8eA==';
const websocketAccept = crypto.createHash('sha1').update(websocketKey + number).digest('base64');
```

这个验证过程可以确保服务器接受的WebSocket连接请求是合法的，并防止恶意的WebSocket连接。这个解决的不是安全问题。只是校验合法性而已。

请注意，`Sec-WebSocket-Key`，`Sec-WebSocket-Accept`字段是WebSocket握手过程中的一部分，用于安全验证，确保连接的合法性。

而`Upgrade`字段则表示要升级到的协议是什么。

最后，我们从抓包工具，就可以完整地看出来这个建立连接的过程

<Image :src="'/other/browser/websocket/1.png'" />

建立一个WebSocket连接需要进行HTTP升级握手,整个过程会包含以下几步:

1. 客户端发起标准的HTTP请求,请求头包含Upgrade: websocket和Connection: Upgrade字段。
2. 服务器端检查Upgrade和Connection字段,确认支持WebSocket协议。
3. 服务器端返回101状态码以及Upgrade和Connection响应头,表示升级协议。
4. 建立TCP连接,客户端发送“发送握手”信息完成握手。
5. 此后客户端与服务器就可以通过该TCP连接通道进行双向数据传输。

所以严格来说,建立一个WebSocket连接客户端会发送1次初始HTTP请求用于升级检查；服务器端会发送1次101响应回应升级；随后会建立TCP通道用于WebSocket数据传输。

这其中并不会发送第二次完整的HTTP请求，只有第一个HTTP请求用于检测是否支持升级为WebSocket，那么整个握手过程是1个HTTP请求+1个HTTP响应。

下面我们基于tcp来实现一下WebSocket这个握手的过程

```javascript
function hashWebSocketKey(key) {
  const sha1 = crypto.createHash("sha1"); // 拿到sha1算法
  sha1.update(key + MAGIC_STRING, "ascii");
  return sha1.digest("base64");
}
class MyWebsocket extends EventEmitter {
  constructor(options) {
    super(options);
    this.options = options;
    this.server = createServer();
    options.port ? this.server.listen(options.port) : this.server.listen(8080); //默认端口8080
    // 监听到协议升级
    this.server.on("upgrade", (req, socket, header) => {
      this.socket = socket;
      socket.setKeepAlive(true);
      const resKey = hashWebSocketKey(req.headers["sec-websocket-key"]); // 对浏览器生成的key进行加密
      // 构造响应头
      const resHeaders = [
        "HTTP/1.1 101 Switching Protocols",
        "Upgrade: websocket",
        "Connection: Upgrade",
        "Sec-WebSocket-Accept: " + resKey,
      ]
        .concat("", "")
        .join("\r\n");
      socket.write(resHeaders); // 返回响应头部
      socket.on("data", (data) => {
        // 监听客户端发送过来的数据，该数据是一个Buffer类型的数据
        this.buffer = data; // 将客户端发送过来的帧数据保存到buffer变量中
				// TODO：处理Buffer数据
      });
      socket.on("close", (error) => {
        // 监听客户端连接断开事件
        if (!this.closed) {
          this.emit("close", 1006, "timeout");
          this.closed = true;
        }
      });
    });
  }
}
```

### 3.WebSocket的数据帧

连接建立完成之后，互相之间就可以发送数据，这里我们先抓取其中一条记录来看一下内容。

<Image :src="'/other/browser/websocket/2.png'" />

#### （1）数据帧格式

* WebSocket客户端，服务端通信的最小单位是帧，由1个或多个帧组成一条完整的消息（message）
* 发送端将消息切割成多个帧，并发送给服务端
* 接收端接收消息帧，并将关联的帧重新组装成完整的消息

#### （2）bit和byte

* 比特就是bit二进制数系统中，每个0或1就是一个位（bit），位是数据存储最小的单位
* 其中8个bit就称为一个字节（byte）

```
   1bit（位）可以表示0和1两种状态
     1byte（字节）=8个bit（位）
         0 0 0 0 1 1 1 1
         1个英文字母=1字节
         1个中文汉字=2字节
```

#### （3）位运算符

**按位与（&）**

两个输入数的同一位都为1才为1

```
Input 1: 1  1  1  1  1  1  0  0
Input 2: 0  0  1  1  1  1  1  1
 Result: 0  0  1  1  1  1  0  0
```

**按位或（｜）**

两个输入数的同一位只要有一个为1就是1

```
Input 1: 1  0  1  1  0  0  1  0
Input 2: 0  1  0  1  1  1  1  0
 Result: 1  1  1  1  1  1  1  0
```

**按位异或（^）**

两个输入数的同一位不同就是1，如果相同就设为0

```
Input 1: 0  0  0  1  0  1  0  0
Input 2: 0  0  0  0  0  1  0  1
 Result: 0  0  0  1  0  0  0  1
```

#### （4）数据帧格式

单位是位（bit/比特），比如FIN、RSV1各占据1位，opcode占据4位

```
  0                   1                   2                   3
  0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1
 +-+-+-+-+-------+-+-------------+-------------------------------+
 |F|R|R|R| opcode|M| Payload len |    Extended payload length    |
 |I|S|S|S|  (4)  |A|     (7)     |             (16/64)           |
 |N|V|V|V|       |S|             |   (if payload len==126/127)   |
 | |1|2|3|       |K|             |                               |
 +-+-+-+-+-------+-+-------------+ - - - - - - - - - - - - - - - +
 |     Extended payload length continued, if payload len == 127  |
 + - - - - - - - - - - - - - - - +-------------------------------+
 |                               |Masking-key, if MASK set to 1  |
 +-------------------------------+-------------------------------+
 | Masking-key (continued)       |          Payload Data         |
 +-------------------------------- - - - - - - - - - - - - - - - +
 :                     Payload Data continued ...                :
 + - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - +
 |                     Payload Data continued ...                |
 +---------------------------------------------------------------+
```

- FIN：1个位，如果是1，表示这是消息（message）的最后一个分片（fragment），如果是0，表示不是是消息（message）的最后一个分片（fragment）。

- RSV1, RSV2, RSV3：各占1个位。一般情况下全为0。当客户端、服务端协商采用WebSocket扩展时，这三个标志位可以非0，且值的含义由扩展进行定义。如果出现非零的值，且并没有采用WebSocket扩展，连接出错。

- Opcode: 4个位。操作代码，Opcode的值决定了应该如何解析后续的数据载荷（data payload）。如果操作代码是不认识的，那么接收端应该断开连接（fail the connection）（PS：下面用16进制数来表示）
  - %x0：表示一个延续帧。当Opcode为0时，表示本次数据传输采用了数据分片，当前收到的数据帧为其中一个数据分片。
  - %x1：表示这是一个文本帧（frame）
  - %x2：表示这是一个二进制帧（frame）
  - %x3-7：保留的操作代码，用于后续定义的非控制帧。
  - %x8：表示连接断开。
  - %x9：表示这是一个ping操作。
  - %xA：表示这是一个pong操作。
  - %xB-F：保留的操作代码，用于后续定义的控制帧。
  
- Mask: 1个比特。表示是否要对数据载荷进行掩码操作
  - 从客户端向服务端发送数据时，需要对数据进行掩码操作；从服务端向客户端发送数据时，不需要对数据进行掩码操作,如果服务端接收到的数据没有进行过掩码操作，服务端需要断开连接。
  - 如果Mask是1，那么在Masking-key中会定义一个掩码键（masking key），并用这个掩码键来对数据载荷进行反掩码。所有客户端发送到服务端的数据帧，Mask都是1。
  
- Payload length：数据载荷的长度，单位是字节。为7位，或7+16位，或7+64位。
  - Payload length=x为0~125：数据的长度为x字节。
  - Payload length=x为126：后续2个字节代表一个16位的无符号整数，该无符号整数的值为数据的长度。
  - Payload length=x为127：后续8个字节代表一个64位的无符号整数（最高位为0），该无符号整数的值为数据的长度。
  - 如果payload length占用了多个字节的话，payload length的二进制表达采用网络序（big endian，重要的位在前)
  
  readBigUInt64BE用指定的字节【readBigInt64BE()读取为大端序，readBigInt64LE()读取为小端序】从buf中指定的offset读取一个有符号的64位整数值
  
  Big-endian（大端序）高位字节在前，其实就是顺着取字节
  
  Little-endian（小端序）低位字节在前，其实就是倒着取字节
  
  ```javascript
  let buffer = Buffer.from([0b00000001,0b00000000]);
  console.log(buffer.readUInt16BE(0)); // 00000001 00000000
  console.log(buffer.readUInt16LE(0)); // 00000000 00000001
  ```
  
- Masking-key：0或4字节(32位) 所有从客户端传送到服务端的数据帧，数据载荷都进行了掩码操作，Mask为1，且携带了4字节的Masking-key。如果Mask为0，则没有Masking-key。载荷数据的长度，不包括mask key的长度

- Payload data：(x+y) 字节
  - 载荷数据：包括了扩展数据、应用数据。其中，扩展数据x字节，应用数据y字节。
  - 扩展数据：如果没有协商使用扩展的话，扩展数据数据为0字节。所有的扩展都必须声明扩展数据的长度，或者可以如何计算出扩展数据的长度。此外，扩展如何使用必须在握手阶段就协商好。如果扩展数据存在，那么载荷数据长度必须将扩展数据的长度包含在内。
  - 应用数据：任意的应用数据，在扩展数据之后（如果存在扩展数据），占据了数据帧剩余的位置。载荷数据长度 减去 扩展数据长度，就得到应用数据的长度。

#### （5）掩码算法

* 掩码键（Masking-key）是由客户端挑选出来的32bit的随机数，掩码操作不会影响数据载荷的长度
* 掩码和反掩码操作都采用如下算法
* 对索引i模以4得到结果并对原来的索引进行异或操作

<Image :src="'/other/browser/websocket/3.png'" />

```javascript
function unmask(buffer, mask) {
	const length = buffer.length;
	for(let i = 0; i < length; i++) {
		buffer[i] ^= mask[i % 4];
	}
}
let mask = Buffer.from([1,0,1,0]);
let buffer = Buffer.from([0,1,0,1,0,1,0,1]);
unmask(buffer,mask);
console.log(buffer);
```

接下来我们用代码解析一下WebSocket的数据帧

```javascript
processBuffer() {
  let buf = this.buffer;
  let idx = 2; // 首先分析前两个字节
  // 处理第一个字节
  const byte1 = buf.readUInt8(0); // 读取buffer数据的前8bit并转换为十进制整数
  // 获取第一个字节的最高位，看是0还是1
  const str1 = byte1.toString(2); // 将第一个字节转换为二进制的字符串形式
  const FIN = str1[0];
  // 获取第一个字节的后四位，让第一个字节与00001111进行与运算，即可拿到后四位
  let opcode = byte1 & 0x0f; //截取第一个字节的后4位，即opcode码, 等价于 (byte1 & 15)
  // 处理第二个字节
  const byte2 = buf.readUInt8(1); // 从第一个字节开始读取8位，即读取数据帧第二个字节数据
  const str2 = byte2.toString(2); // 将第二个字节转换为二进制的字符串形式
  const MASK = str2[0]; // 获取第二个字节的第一位，判断是否有掩码，客户端必须要有
  let length = parseInt(str2.substring(1), 2); // 获取第二个字节除第一位掩码之后的字符串并转换为整数
  if (length === 126) {
    // 说明125<数据长度<65535（16个位能描述的最大值，也就是16个1的时候)
    length = buf.readUInt16BE(2); // 就用第三个字节及第四个字节表示数据的长度
    idx += 2; // 偏移两个字节
  } else if (length === 127) {
    // 说明数据长度已经大于65535，16个位也已经不足以描述数据长度了，就用第三到第十个字节这八个字节来描述数据长度
    length = buf.readUInt64BE(2); // 获取八个字节中的后四个字节用于表示数据长度，即从第6到第10个字节，为真实存放的数据长度
    idx += 8;
  }
  let realData = null; // 保存真实数据对应字符串形式
  if (MASK) {
    // 如果存在MASK掩码，表示是客户端发送过来的数据，是加密过的数据，需要进行数据解码
    const maskDataBuffer = buf.slice(idx, idx + 4); //获取掩码数据, 其中前四个字节为掩码数据
    idx += 4; //指针前移到真实数据段
    const realDataBuffer = buf.slice(idx, idx + length); // 获取真实数据对应的Buffer
    realData = handleMask(maskDataBuffer, realDataBuffer); //解码真实数据
    console.log(`realData is ${realData}`);
  }
  let realDataBuffer = Buffer.from(realData); // 将真实数据转换为Buffer
  this.buffer = buf.slice(idx + length); // 清除已处理的buffer数据
  if (FIN) {
    // 如果第一个字节的第一位为1，表示是消息的最后一个分片，即全部消息结束了(发送的数据比较少，一次发送完成)
    this.handleRealData(opcode, realDataBuffer); // 处理操作码
  }
}
```

