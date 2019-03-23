//官方开发的可以直接用
//var mysql = require('mysql')
//console.log(mysql)
let Uesr = require("./view/Uesr.js")
    //c创建服务
var http = require("http");
http.createServer(function(request, response) {
    response.writeHead(200, {
        'Content-type': 'text/html;charset=utf-8'
    })
    if (request.url !== "/favicon.ico") {
        console.log(request.url)
        var user1 = new Uesr("huang", 28, ["a", "b"]);
        var user2 = new Uesr("liu", 29, ["c", "d"]);
        user2.friends.push("mazis")

        response.write(user1.name)
        response.write("<hr />");
        response.write(user1.sayfriends().toString());
        response.write("<hr />");
        response.write(user2.sayfriends().toString());
        //console.log("service")


        //结束，把数据送给前端
        response.end()

    }

}).listen(8000)
console.log("444")