//文件操作 文件读取

//官方开发的可以直接用
//var mysql = require('mysql')
//console.log(mysql)

//c创建服务
var http = require("http");
let files = require("./view/files.js");
http.createServer(function(request, response) {
    response.writeHead(200, {
        'Content-type': 'text/html;charset=utf-8'
    })
    if (request.url !== "/favicon.ico") {
        console.log(request.url)
            //读取文件
            // files.readFile('./templates/main.html', response)


        //写入内容
        files.writeFile('./files/test.txt', response)

        //结束，把数据送给前端
        //response.end()

    }

}).listen(8000)
console.log("444")