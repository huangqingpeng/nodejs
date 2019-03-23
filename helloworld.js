//官方开发的可以直接用
//var mysql = require('mysql')
//console.log(mysql)
let name = require("./view/name.js")
    //c创建服务
var http = require("http");
http.createServer(function(request, response) {
    response.writeHead(200, {
        'Content-type': 'text/html;charset=utf-8'
    })
    if (request.url !== "/favicon.ico") {
        console.log(request.url)

        response.write(name.sayname())

        //console.log("service")


        //结束，把数据送给前端
        response.end()

    }

}).listen(8000)
console.log("444")