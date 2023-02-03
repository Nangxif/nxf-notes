# 基础语法

## 1.SELECT

查某个库下面的某个表所有列

```sql
SELECT * FROM 库名.表名;
SELECT * FROM my_db_01.users;
```

查某个库下面某个表的某一列或几列

```
SELECT 列名1,列名2 FROM 库名.表名;
SELECT username FROM my_db_01.users;
```

## 2.SELECT DISTINCT