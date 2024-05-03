# indexDB

参考链接：https://www.ruanyifeng.com/blog/2018/07/indexeddb.html

## 一、前言

为什么我要把indexDB放在浏览器的章节，因为indexDB是属于浏览器的数据库，虽然说使用的是js，但是跟js的相关性不大。

## 二、介绍

IndexedDB 是一个全功能的数据库，用于在浏览器中存储结构化数据。IndexedDB的存储大小限制通常取决于用户的硬盘空间和特定浏览器的实现。一般来说，大多数现代浏览器为IndexedDB提供了较大的存储空间，范围从几百MB到几GB不等。

这里是一些具体的例子：

- 对于Google Chrome和Mozilla Firefox，它们通常允许每个站点使用硬盘空间的一部分（通常约为硬盘总容量的5%）。
- 对于Microsoft Edge和Internet Explorer，IndexedDB的存储限制为每个访问网站1-10GB。

然而，需要注意的是，当浏览器检测到磁盘空间不足时，可能会开始清理IndexedDB中的数据，优先清理长时间未使用或访问的数据。因此，存储在IndexedDB中的数据不应被视为永久性存储，而更适合被当作缓存或临时存储来使用。如果你需要长期存储和保护的数据，最好采用服务器端的数据库解决方案。

## 三、概念介绍

IndexedDB 是一个比较复杂的 API，涉及不少概念。它把不同的实体，抽象成一个个对象接口。学习这个 API，就是学习它的各种对象接口。

- 数据库：IDBDatabase 对象
- 对象仓库：IDBObjectStore 对象
- 索引： IDBIndex 对象
- 事务： IDBTransaction 对象
- 操作请求：IDBRequest 对象
- 指针： IDBCursor 对象
- 主键集合：IDBKeyRange 对象

下面是一些主要的概念。

**（1）数据库**

数据库是一系列相关数据的容器。每个域名（严格的说，是协议 + 域名 + 端口）都可以新建任意多个数据库。

IndexedDB 数据库有版本的概念。同一个时刻，只能有一个版本的数据库存在。如果要修改数据库结构（新增或删除表、索引或者主键），只能通过升级数据库版本完成。

**（2）对象仓库**

每个数据库包含若干个对象仓库（object store）。它类似于关系型数据库的表格。

**（3）数据记录**

对象仓库保存的是数据记录。每条记录类似于关系型数据库的行，但是只有主键和数据体两部分。主键用来建立默认的索引，必须是不同的，否则会报错。主键可以是数据记录里面的一个属性，也可以指定为一个递增的整数编号。

```javascript
{ id: 1, text: 'foo' }
```

上面的对象中，`id`属性可以当作主键。

数据体可以是任意数据类型，不限于对象。

**（4）索引**

为了加速数据的检索，可以在对象仓库里面，为不同的属性建立索引。

**（5）事务**

IndexedDB 中的事务（Transaction）是对数据库一系列操作行为的封装。在一个事务中，你可以执行读取（retrieve）、修改（update）和删除（delete）等操作。事务有两个主要特点：

1. 原子性（Atomicity）：在一个事务中，被包含的操作要么全部完成，要么全不完成，不会出现部分完成的情况。例如，如果你在一个事务中执行了两步更新操作，要么两个更新都成功，要么两个更新都不会变更数据库。
2. 隔离性（Isolation）：每个事务是隔离的，它不会看到其他并发事务进行的变更，只有该事务提交后，它对数据库的变更才能被其他事务看到。

在IndexedDB 中，你可以创建一个事务来对一个或多个对象存储进行操作，在这个事务中，你可以进行各种操作，比如添加、删除、修改数据等，而所有的这些操作，要么全都成功，要么全都失败。这就是IndexedDB 的事务（Transaction）。

事务对象提供`error`、`abort`和`complete`三个事件，用来监听操作结果。

事务是如何创建的？

在IndexedDB中，transaction对象是通过database（你打开的特定数据库）的transaction()方法来创建的。这个方法需要至少两个参数：一个表示你希望交易涉及到的object store(对象存储空间，也就是表名)的数组，以及一个表示你想进行的操作类型的字符串。

以下是创建transaction的基础示例：

```javascript
// 假设 `db` 是一个已经打开的数据库实例
let transaction = db.transaction(["myObjectStore"], "readwrite");

// 你现在可以从这个transaction中获取object store
let objectStore = transaction.objectStore("myObjectStore");
```

此代码首先创建了一个transaction，这个transaction涉及到名为"myObjectStore"的object store，并且这个transaction允许"readwrite"的操作，意味着你可以在这个transaction中执行读和写操作。

创建了transaction之后，你可以使用transaction对象的objectStore方法来获取你需要进行操作的object store。

如果你的transaction需要涉及多个object store，你可以在创建transaction时，传递一个包含所有相关object stores名称的数组。然后，你可以使用`transaction.objectStore`方法来分别获取和操作这些object store。

```javascript
// 假设 `db` 是一个打开的数据库实例
let transaction = db.transaction(["objectStore1", "objectStore2"], "readwrite");

// 获取第一个object store
let objectStore1 = transaction.objectStore("objectStore1");

// 获取第二个object store
let objectStore2 = transaction.objectStore("objectStore2");

// 然后你可以在objectStore1和objectStore2上进行你需要的操作
```

在这个示例中，我们首先创建了一个transaction，这个transaction会涉及到"objectStore1"和"objectStore2"两个object stores，并且允许进行读写操作。然后，我们分别获取了这两个object stores，就可以对它们进行后续的读写操作了。

在同一transaction中的所有操作都会在一个原子操作中执行，确保数据的完整性和一致性。如果transaction中的任何一步失败，所有的改动都会被回滚。

## 四、操作流程

### 1、打开数据库

使用 IndexedDB 的第一步是打开数据库，使用`indexedDB.open()`方法。

```javascript
var request = window.indexedDB.open(databaseName, version);
```

这个方法接受两个参数，第一个参数是字符串，表示数据库的名字。如果指定的数据库不存在，就会新建数据库。第二个参数是整数，表示数据库的版本。如果省略，打开已有数据库时，默认为当前版本；新建数据库时，默认为`1`。

`indexedDB.open()`方法返回一个 IDBRequest 对象。这个对象通过三种事件`error`、`success`、`upgradeneeded`，处理打开数据库的操作结果。

#### （1）error 事件

`error`事件表示打开数据库失败。

```javascript
request.onerror = function (event) {
  console.log('数据库打开报错');
};
```

#### （2）success 事件

`success`事件表示成功打开数据库。

```javascript
var db;

request.onsuccess = function (event) {
  db = request.result;
  console.log('数据库打开成功');
};
```

这时，通过`request`对象的`result`属性拿到数据库对象。

#### （3）upgradeneeded 事件**

如果指定的版本号，大于数据库的实际版本号，就会发生数据库升级事件`upgradeneeded`。

```javascript
var db;

request.onupgradeneeded = function (event) {
  db = event.target.result;
}
```

这时通过事件对象的`target.result`属性，拿到数据库实例。

问题：
（1）indexDB的onupgradeneeded和onsuccess有什么区别

`onupgradeneeded`和`onsuccess`都是IndexedDB中的事件处理函数，它们的差别主要表现在触发时机和处理的主要功能：

1. `onupgradeneeded`事件是在打开数据库时，如果指定的版本号大于数据库的实际版本号，便会触发这个事件。这个事件处理器通常用于设置对象存储空间，创建新的数据库，或者在数据库结构发生改变时（例如新增或删除对象存储，修改索引）更新数据库架构。请注意`onupgradeneeded`事件只有在打开数据库时才可能触发。

举例代码如下:

```javascript
let request = window.indexedDB.open("myDB", 3);
request.onupgradeneeded = function(event) {
    var db = event.target.result;
    // 创建一个对象存储空间来持有信息。我们将在此存储空间中插入"book"数据。
    var objectStore = db.createObjectStore("books", { keyPath: "id" });
    // 创建一个索引以便我们可以根据书名搜索书籍。
    objectStore.createIndex("name", "name", { unique: false });
};
```

2. `onsuccess`事件则在以下情况下触发：

- 打开数据库操作成功完成
- 读取、添加、删除和更新数据操作成功完成

在 `onsuccess` 事件处理器中，你通常会处理数据读取、添加、删除和更新的结果，或者在成功打开数据库后开始数据库的读写操作。

举例代码如下:

```javascript
let request = window.indexedDB.open("myDB", 3);
request.onsuccess = function(event) {
    var db = event.target.result;
    // 在此处进行数据库的读写操作...
};
```

请注意，`onupgradeneeded`和`onsuccess`事件并不是在同一个时间点触发。

如果一个数据库是首次被打开的，那么会先触发`onupgradeneeded`再触发`onsuccess`事件，之后如果版本号不变的话，接下来每次open都只会触发`onsuccess`事件。

如果打开的数据库版本号升级了，那么也首先会触发`onupgradeneeded`事件来执行数据库模式的升级，然后在模式升级完成后触发`onsuccess`事件。

### 2、新建表

新建数据库与打开数据库是同一个操作。如果指定的数据库不存在，就会新建。不同之处在于，后续的操作主要在`upgradeneeded`事件的监听函数里面完成，因为这时版本从无到有，所以会触发这个事件。

通常，新建数据库以后，第一件事是新建对象仓库（即新建表）。

```javascript
request.onupgradeneeded = function(event) {
  db = event.target.result;
  var objectStore = db.createObjectStore('person', { keyPath: 'id' });
}
```

上面代码中，数据库新建成功以后，新增一张叫做`person`的表格，主键是`id`。

更好的写法是先判断一下，这张表格是否存在，如果不存在再新建。

```javascript
request.onupgradeneeded = function (event) {
  db = event.target.result;
  var objectStore;
  if (!db.objectStoreNames.contains('person')) {
    objectStore = db.createObjectStore('person', { keyPath: 'id' });
  }
}
```

主键（key）是默认建立索引的属性。比如，数据记录是`{ id: 1, name: '张三' }`，那么`id`属性可以作为主键。主键也可以指定为下一层对象的属性，比如`{ foo: { bar: 'baz' } }`的`foo.bar`也可以指定为主键。

如果数据记录里面没有合适作为主键的属性，那么可以让 IndexedDB 自动生成主键。

```javascript
var objectStore = db.createObjectStore(
  'person',
  { autoIncrement: true }
);
```

上面代码中，指定主键为一个递增的整数。

新建对象仓库以后，下一步可以新建索引。

```javascript
request.onupgradeneeded = function(event) {
  db = event.target.result;
  var objectStore = db.createObjectStore('person', { keyPath: 'id' });
  objectStore.createIndex('name', 'name', { unique: false });
  objectStore.createIndex('email', 'email', { unique: true });
}
```

上面代码中，`IDBObject.createIndex()`的三个参数分别为索引名称、索引所在的属性、配置对象（说明该属性是否包含重复的值）。

讲到这里，我们开看看什么是索引。索引，按照我的理解就是检索方式，如果我们给一张表设置了一个索引，比如上面的

```javascript
objectStore.createIndex('name', 'name', { unique: false });
```

那么我们就可以通过直接检索name这个键的方式得出我们想要的结果。这通常比直接在对象存储库中通过游标搜索要快得多。

我们看到createIndex前面两个参数分别是**索引名称**和**索引键路径**，

**索引名称**指的是你要检索的那个键的别名

**索引键路径**指的是你要检索的那个键的名字

那么我们创建完这个索引之后，要怎么获取IDBIndex对象呢？

`IDBObject.index()`

那么我们怎么通过索引去查表呢？下面会有专门的讲解

### 3、新增数据

新增数据指的是向对象仓库写入数据记录。这需要通过事务完成。

```javascript
function add() {
  var request = db.transaction(['person'], 'readwrite')
    .objectStore('person')
    .add({ id: 1, name: '张三', age: 24, email: 'zhangsan@example.com' });

  request.onsuccess = function (event) {
    console.log('数据写入成功');
  };

  request.onerror = function (event) {
    console.log('数据写入失败');
  }
}

add();
```

上面代码中，写入数据需要新建一个事务。新建时必须指定表格名称和操作模式（"只读"或"读写"）。新建事务以后，通过`IDBTransaction.objectStore(name)`方法，拿到 IDBObjectStore 对象，再通过表格对象的`add()`方法，向表格写入一条记录。

写入操作是一个异步操作，通过监听连接对象的`success`事件和`error`事件，了解是否写入成功。

### 4、读取数据

读取数据有好几种读法

#### （1）objectStore.get()

```javascript
function read() {
   var transaction = db.transaction(['person']);
   var objectStore = transaction.objectStore('person');
   var request = objectStore.get(1);
   request.onerror = function(event) {
     console.log('事务失败');
   };
   request.onsuccess = function( event) {
      if (request.result) {
        console.log('Name: ' + request.result.name);
        console.log('Age: ' + request.result.age);
        console.log('Email: ' + request.result.email);
      } else {
        console.log('未获得数据记录');
      }
   };
}
read();
```

上面代码中，`objectStore.get()`方法用于读取数据，参数是主键的值。

#### （2）游标IDBCursor遍历数据

```javascript
function readAll() {
  var objectStore = db.transaction('person').objectStore('person');
   objectStore.openCursor().onsuccess = function (event) {
     var cursor = event.target.result;
     if (cursor) {
       console.log('Id: ' + cursor.key);
       console.log('Name: ' + cursor.value.name);
       console.log('Age: ' + cursor.value.age);
       console.log('Email: ' + cursor.value.email);
       cursor.continue();
    } else {
      // 当没有更多记录时，cursor变为 null，遍历结束。
      console.log('没有更多数据了！');
    }
  };
}
readAll();
```

上面代码中，新建指针对象的`openCursor()`方法是一个异步操作，所以要监听`success`事件。

### 5、修改数据

```javascript
function update() {
  var request = db.transaction(['person'], 'readwrite')
    .objectStore('person')
    .put({ id: 1, name: '李四', age: 35, email: 'lisi@example.com' });
  request.onsuccess = function (event) {
    console.log('数据更新成功');
  };
  request.onerror = function (event) {
    console.log('数据更新失败');
  }
}
update();
```

需要注意的是在IndexedDB API 中，并没有直接名为`update`的方法。更新已经存在的记录通常使用 `put`方法来实现。如果你需要修改已经存在的记录，通常的步骤是先获取原有的记录，对其进行修改，然后再使用 `put` 方法写回数据库，也就是说，`put`方法将会直接替换数据库中已经存在的对象，而不是将新对象和现有对象进行合并。

### 6、删除数据

`IDBObjectStore.delete()`方法用于删除记录。

```javascript
function remove() {
  var request = db.transaction(['person'], 'readwrite')
    .objectStore('person')
    .delete(1);
  request.onsuccess = function (event) {
    console.log('数据删除成功');
  };
}
remove();
```

## 五、一些问题

### 1、IndexedDB中的数据可以设置过期时间吗？

，IndexedDB 本身并没有直接提供设置数据有效期（Expiration）的功能。您需要手动进行管理，或者使用提供这种功能的库。但如果我们要在 IndexedDB 中手动设置数据有效期，一种简单的实现方法如下：

1. 在存入数据时，一起存入一个过期时间戳。例如 `db.put('myKey', {myData: 'Hello, world', expiration: Date.now() + 1000*60*60*24})`，这会将 'myKey' 的值设为一个对象，其中包含您的数据和该数据的过期时间（当前时间的24小时之后）。
2. 在获取数据时，检查时间戳。因为 IndexedDB 是基于异步的，这通常会按以下方式进行：

```javascript
var request = db.get('myKey');
request.onsuccess = function(event) {
    var data = event.target.result;
    if (data && data.expiration && data.expiration > Date.now()) {
        console.log(data.myData);
    } else {
        console.log('Data expired or not found');
    }
};
```

3. 定期清理过期数据。您可以设置一个定时器，每隔一段时间就检查并清除过期的数据。

### 2、openCursor和openKeyCursor有哪些使用场景上的区别？

`openCursor`和`openKeyCursor`方法都是在IndexedDB中用于查询数据的方法，它们的主要区别在返回的数据类型上：

1. **openCursor**: 这个方法返回一个包括键及其所有相应值的游标。你可以使用它来遍历一个索引或对象存储库的所有记录。每个记录包括一个键和一个值，键代表了记录的键路径值，值则包含了整个对象的数据。
2. **openKeyCursor**：相比之下，openKeyCursor方法返回的游标只包含键，而不包含任何相应的数据。这个方法在只关心键而不关心记录的具体内容的情况下更加高效，因为它省略了一些可能大量的数据加载。

在大多数实际的应用场景中，你可能更多地会使用`openCursor`方法，因为通常你需要使用记录的全部数据。但是在一些特殊的场景下，例如你只需要检查某个特定的键是否存在，而不需要获取全部数据的时候，使用`openKeyCursor`会更加高效。

### 3、如果在IndexedDB数据库中，有两个事务在同一时间内对同一条数据进行操作，那么会出现什么问题？

在IndexedDB数据库中，对于多个事务并发访问同一条数据的情况，IndexedDB有一套事务模型来处理并发操作，确保数据库的数据一致性。

在一个给定的时间，同一条数据只能被一个事务所修改。如果有两个事务试图在同一时间修改同一条数据，那么会出现以下的情况：

1. 并发控制：第一个请求的事务会把该数据锁住，并进行修改，其他同时尝试修改同一条数据的事务则会被阻塞，直到第一个事务完成。
2. 阻塞与等待：被阻塞的事务会等待，直到第一个事务完成了所有操作并完成提交，才可以接着操作。

这种事务处理机制不仅确保了数据库操作的原子性，还防止了由于并发修改引起的数据不一致问题。这是因为在任何给定时间，只有一个事务可以处理并修改一条特定的数据。其他的事务都必须等待，直到这个事务完成。这就保证了数据的完整性和一致性。

### 4、indexdb里面如何对一个表实现翻页的功能？

可以结合使用`openCursor`和Cursor的`advance`方法。

假设我们有一个"books"的对象存储，我们可以用以下代码来做分页：

```javascript
function fetchPage(index, pageSize) {
    var transaction = db.transaction(["books"], "readonly");
    var store = transaction.objectStore("books");
  
    var cursorRequest = store.openCursor();
    var skip = (index - 1) * pageSize;
  
    cursorRequest.onsuccess = function(e) {
        var cursor = e.target.result;
        if (skip > 0 && cursor) {
            cursor.advance(skip);
            skip--;
        } else if (cursor) {
            console.log(cursor.value);
            pageSize--;
            if (pageSize > 0) cursor.continue();
        }
    };
}

// 然后你可以这样调用:
fetchPage(2, 10); // 获取第二页，每页有10条数据
```

以上代码首先根据页码和每页条数计算出要跳过的条数，然后用`advance`方法跳过这些条数。然后，获取需要的条数并输出。当页内条数用完或者没有更多数据时，遍历结束。

### 5、indexDB表里面默认的数据排序规则是怎么样的？

IndexedDB中的数据默认按照键值（key）的顺序进行排序。键值在IndexedDB中是重要的，因为他们不仅被用来检索数据，也决定了数据的存储顺序。以下是一些基本的排序规则：

1. 数字：数字键值按升序排序，也就是从小到大。例如，假设你有3条记录，键值分别为1，2和3，那么他们的排序就是1，2，3。
2. 字符串：字符串键值按照字母顺序（ASCII值）排序。例如，键值为"a", "b", "c"的三条记录，排序结果是"a", "b", "c"。
3. 日期：日期键值按照时间升序排序，也就是早的在前，晚的在后。
4. 数组：数组键可用于复合索引，数组中的每个元素都被用来排序。比如对于数组['A', 'B']和['A', 'C']，由于'B'在'C'前面，所以['A', 'B']在['A', 'C']前面。

这些默认规则能够保证在你从数据库中查询数据时，可以按照一定的顺序接收结果。当然，你也可以根据需要设计自己的索引，以便以自定义的方式排序和检索数据。

### 6、IndexedDB中的数据可以按照自定义规则排序吗？

在IndexedDB数据库中，虽然你不能直接指定自定义的排序规则，但你可以通过创建不同的索引来间接实现这个目的。

1. 创建自定义索引：在创建存储空间（Object Store）的时候，你可以为你想要排序的数据属性创建索引。这样，当你从这个存储空间查询数据的时候，就可以指定是按索引查询，数据就会按索引的顺序返回。

   ```javascript
   let objectStore = db.createObjectStore("books", { keyPath: "isbn" });
   objectStore.createIndex("name", "name", { unique: false });
   ```

2. 使用cursor游标查询：在查询数据时，你可以使用游标（Cursor）指定索引来查询数据，数据会按照索引的顺序返回。

   ```javascript
   let transaction = db.transaction(["books"]);
   let objectStore = transaction.objectStore("books");
   let index = objectStore.index("name");
   
   index.openCursor().onsuccess = function(event) {
     let cursor = event.target.result;
     if(cursor) {
       console.log(cursor.value);
       cursor.continue();
     }
   };
   ```

   需要注意的是，虽然你可以通过这种方式让数据按照某种顺序返回，但实际上在数据库中存储的数据并没有被重新排序，只是检索的顺序发生了改变。

### 7、有没有办法实现升序存储和降序存储？

IndexedDB对存储数据的顺序本身并没有直接的控制，数据在ObjectStore或Index中是按键（Key）或键路径（Key Path）的升序排列的。这是IndexedDB设计上的决定，以优化数据的存储和检索。

如果你需要降序访问数据，IndexedDB提供了Cursor这个功能。

对于Cursor来说，当你打开它时，可以通过一个参数（'next'或'prev'）来指定移动的方向：'next'意味着从小到大（升序），而'prev'意味着从大到小（降序）。例如：

```javascript
var transaction = db.transaction(['myObjectStore'], 'readwrite');
var objectStore = transaction.objectStore('myObjectStore');
// 使用'prev'让cursor以降序方式工作。
var request = objectStore.openCursor(null, 'prev');

request.onsuccess = function(event) {
  var cursor = event.target.result;
  if (cursor) {
    // 处理cursor当前指向的数据
    console.log(cursor.value);
    // 移动cursor到下一条数据
    cursor.continue();
  }
};
```

这种方式可以在读取数据时获得降序的结果，但实际上数据在存储中的顺序并未改变。这就是最接近"降序存储"的操作方式。