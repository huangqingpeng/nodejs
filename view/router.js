let files = require("./files.js");


let url = require("url")


let queryString = require("querystring")

//处理路由
module.exports = {
    home: function(res) {
        //res.write("home")
        res.writeHead(200, {
            'Content-type': 'text/html;charset=utf-8'
        })
        files.writeFile('./templates/main.html', res)
            //res.end()
    },
    login: function(res, req) {
        //res.write("login")
        res.writeHead(200, {
            'Content-type': 'text/html;charset=utf-8'
        })

        //处理get请求
        //console.log(url)
        // let urlObiect = url.parse(req.url, true).query
        // console.log(urlObiect)
        // if (urlObiect.email && urlObiect.password) {
        //     console.log(urlObiect.email)
        //     console.log(urlObiect.password)
        // }


        //处理post请求
        let post = ""

        //前端触发事件，就会执行 接收前端传来数据
        req.on("data", chunk => {
            post += chunk
        })

        //接受完数据
        req.on('end', () => {
            //console.log(post)

            let urlObiect = queryString.parse(post)
            console.log(urlObiect)
        })




        files.readFile('./templates/login.html', res)
            //res.end()
    },
    register: function(res) {
        //res.write("register")
        res.writeHead(200, {
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