# MySQL workbench安装和介绍

MySQL有各种各样的可视化操作平台，这里我们介绍MySQL workbench

## 一、安装MySQL

1. 安装MySQL workbench之前肯定要先安装MySQL

安装地址：https://dev.mysql.com/downloads/file/?id=476233

2. 然后将安装包解压到一个目录

3. 配置环境变量

   右键桌面的电脑图标–属性–高级系统设置–环境变量–新建-新建系统环境变量

   变量名为：MYSQL_HOME，变量值为刚刚解压的路径，我这里是C:\Program Files\MySQL\mysql-8.0.11-winx64

   在系统变量中找到path，点击【编辑】添加%MYSQL_HOME%\bin\

4. 在C:\Program Files\MySQL\mysql-8.0.11-winx64新建一个存放数据库的文件夹Data

5. 在C:\Program Files\MySQL\mysql-8.0.11-winx64生成一个 my.ini，内容如下

   ```
   [mysqld]
   # 设置3306端口
   port=3306
   # 设置mysql的安装目录
   basedir=C:\Program Files\MySQL\mysql-8.0.11-winx64
   # 设置mysql数据库的数据的存放目录
   datadir=C:\Program Files\MySQL\mysql-8.0.11-winx64\Data
   # 允许最大连接数
   max_connections=200
   # 允许连接失败的次数。这是为了防止有人从该主机试图攻击数据库系统
   max_connect_errors=10
   # 服务端使用的字符集默认为UTF8
   character-set-server=utf8
   # 创建新表时将使用的默认存储引擎
   default-storage-engine=INNODB
   # 默认使用“mysql_native_password”插件认证
   default_authentication_plugin=mysql_native_password
   [mysql]
   # 设置mysql客户端默认字符集
   default-character-set=utf8
   [client]
   # 设置mysql客户端连接服务端时默认使用的端口
   port=3306
   default-character-set=utf8
   ```

6. 搜索cmd 右键，以管理员身份运行

7. 输入：mysqld install命令当出现Service successfully installed时表示mysql服务安装完成。如果找不到mysqld命令，重启电脑即可

8. Mysql初始化

   ```
   // 在cmd执行命令：
   mysqld --initialize --console
   ```

9. 执行完成后，会打印 root 用户的初始默认密码

10. root@localhost: /XXXXXXXX其中root@localhost:后面的“/XXXXXXXX”就是初始密码（不含首位空格）。在没有更改密码前，需要记住这个密码，后续登录需要用到。

11. 安装完成之后，就可以通过命令net start mysql启动MySQL的服务了。

12. 执行mysql -u root -p命令，然后输入之前保存的密码，假设为/XXXXXXXX
    修改用户密码，在MySQL中执行命令：

    ```
     ALTER USER "root"@"localhost" IDENTIFIED WITH mysql_native_password BY "123456";
    ```

    我这里把密码改成123456，注意，前面的命令不用改，改最后的密码即可，而且命令行里面需要用双引号，而且命令行末尾需要有分号，否则会提示语法错误或者执行后没反应

     <Image :src="'/server-end/database/sql/install-mysql-workbench/1.png'" />

13. 输入exit; 退出mysql，运行时以管理员方式cmd输入 mysql -u root -p，到此MySQL安装好了。

## 二、安装MySQL workbench

安装地址：https://dev.mysql.com/downloads/workbench/

下载完安装包之后在安装的过程中，有可能会出现下面这种情况


 <Image :src="'/server-end/database/sql/install-mysql-workbench/2.png'" />

解决方案是去下面这个链接下载对应的安装包，然后重启电脑即可


 <Image :src="'/server-end/database/sql/install-mysql-workbench/3.png'" />

https://learn.microsoft.com/en-US/cpp/windows/latest-supported-vc-redist?view=msvc-170

## 三、MySQL workbench的使用

## 1.创建Connection

 <Image :src="'/server-end/database/sql/install-mysql-workbench/4.png'" />

创建完成之后这里会有记录

 <Image :src="'/server-end/database/sql/install-mysql-workbench/5.png'" />

但是我选择这个connections之后有个报错

 <Image :src="'/server-end/database/sql/install-mysql-workbench/6.png'" />

综合网上评论，大致认为这是Workbench在非英文版（尤其是简体中文版）Windows中的一个bug。

**解决办法：**

1. 控制面板 → 时钟和区域 → 区域

2. 管理标签 → 更改系统区域设置

3. 勾选 “Beta版：使用Unicode UTF-8提供全球语言支持(U)”

    <Image :src="'/server-end/database/sql/install-mysql-workbench/7.png'" />

由于一开始我没有安装MySQL就直接安装MySQL workbench了，然后导致我虽然可以正常打开了，但是界面上还是显示status为stopped，这一点还是要注意的

 <Image :src="'/server-end/database/sql/install-mysql-workbench/8.png'" />

## 2.创建数据库

进入界面之后，我们要选中Schemas，才会显示所有数据库的列表。

 <Image :src="'/server-end/database/sql/install-mysql-workbench/9.png'" />

点击此按钮我们可以进行数据库的创建，

 <Image :src="'/server-end/database/sql/install-mysql-workbench/10.png'" />

填写完名称之后点击Apply就创建完成了

PS：不要出现中文和空格

 <Image :src="'/server-end/database/sql/install-mysql-workbench/11.png'" />

这时候在Schemas工作栏会出现我们上一步创建的数据库，我们可以找到Tables，右键选择“Create table”，表示我们要在这个数据库创建新的表格

 <Image :src="'/server-end/database/sql/install-mysql-workbench/12.png'" />

然后填写下面的信息

 <Image :src="'/server-end/database/sql/install-mysql-workbench/13.png'" />

在这其中，DataType的数据类型有很多

* int整数
* varchar(len)字符串
* tingint(1)布尔值

在数据类型的后面包含了很多复选框，每一个复选框头部的标识都是字段的特殊标识

* PK（Primary Key）主键，唯一标识
* NN（Not Null）值不允许为空
* UQ（Unique）值唯一
* AI（Auto Increment）值自己增长

Default/Expression标识当前这个键的默认值

## 3.向表中写入数据

右键选择我们上一步创建的表，点击“Select Rows……”项

 <Image :src="'/server-end/database/sql/install-mysql-workbench/14.png'" />