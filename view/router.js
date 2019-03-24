let files = require("./files.js");

//处理路由
module.exports = {
    home: function(res) {
        //res.write("home")
        response.writeHead(200, {
            'Content-type': 'text/html;charset=utf-8'
        })
        files.writeFile('./templates/main.html', res)
            //res.end()
    },
    login: function(res) {
        //res.write("login")
        response.writeHead(200, {
            'Content-type': 'text/html;charset=utf-8'
        })
        files.readFile('./templates/login.html', res)
            //res.end()
    },
    register: function(res) {
        //res.write("register")
        response.writeHead(200, {
            'Content-type': 'text/html;charset=utf-8'
        })
        files.readFile('./templates/register.html', res)
            //res.end()
    },
    img: function(res) {
        res.writeHead(200, {
            'Content-type': 'image/jpeg;'
        })
        files.readImageFile('./img/bg.jpg', res)
    }
}

// exports = function home(res) {
//     res.write("home")
//     res.end()
// }