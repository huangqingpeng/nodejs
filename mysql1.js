//通过连接池连接
let DataPool = require("./view/datapool.js");
console.log(DataPool)

let dataPool = new DataPool();

let pool = dataPool.getPool();



//执行sql语句
pool.getConnection((err, conn) => {
    //insert
    // let userInsertSql = "insert into user(username,password) values('lzlzlzl','9999')";
    // conn.query(userInsertSql, (err, rel) => {
    //     if (err) {
    //         console.log("err")
    //         return
    //     }
    //     console.log("insert success")
    // })


    let userSelect = "select * from user";
    conn.query(userSelect, (err, rel) => {
        if (err) {
            console.log("insert err" + err)
            return
        }
        console.log("userSelect success");
        console.log(rel);
        for (var i = 0; i < rel.length - 1; i++) {
            console.log(rel[i].username);
        }

        //释放连接  关闭连接
        conn.release()

    })
})