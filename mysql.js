// nodejs 直连mysql

let mysql = require("mysql");


//连接数据库
var connection = mysql.createConnection({
    host: 'localhost',
    user: "root",
    password: "hqp19880123",
    database: "gpdb",
    port: "3306"
});

//创建一个连接
connection.connect((err) => {
    if (err) {
        console.log("connection  err");
        return;
    } else {
        console.log("connection  success")
    }
});

//执行mysql语句

// let userInsertSql = "insert into user(username,password) values('lulu','9999')";
// //let userInsertSql = "insert into user(username,password) values('lulu','9999')";

// connection.query(userInsertSql, (err, reslove) => {
//     if (err) {
//         console.log("insert err" + err)
//         return
//     }
//     console.log("insert success")
// })

//查询数据
let userSelect = "select * from user";
connection.query(userSelect, (err, rel) => {
    if (err) {
        console.log("insert err" + err)
        return
    }
    console.log("userSelect success");
    console.log(rel);
    for (var i = 0; i < rel.length - 1; i++) {
        console.log(rel[i].username);
    }
})









//关闭连接
connection.end((err) => {
    if (err) {
        console.log("connection end err");
        return;
    } else {
        console.log("connection end success")
    }
})