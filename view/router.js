let files = require("./files.js");

//处理路由
module.exports = {
    home: function(res) {
        //res.write("home")
        files.writeFile('./templates/main.html', res)
            //res.end()
    },
    login: function(res) {
        //res.write("login")
        files.readFile('./templates/login.html', res)
            //res.end()
    },
    register: function(res) {
        //res.write("register")
        files.readFile('./templates/register.html', res)
            //res.end()
    },
}

// exports = function home(res) {
//     res.write("home")
//     res.end()
// }