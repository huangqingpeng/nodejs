var fs = require("fs");

module.exports = {
    readFileSync: function(res) {
        //文件路径相对于引用的路径
        var data = fs.readFileSync('./templates/main.html', 'utf-8');
        res.write(data)
        console.log(data)
    },
    readFile: function(file, res) {
        var data = fs.readFile(file, 'utf-8', function(err, data) {
            res.write(data)
            res.end()
        })
    },
    writeFile: function(file, res) {
        fs.writeFile(file, 'kjfhkj', 'utf-8', function(err) {
            if (err) {
                throw err
            }
            res.write('success')
            res.end()
        })
    },
    readImageFile: function(file, res) {
        var data = fs.readFile(file, 'binary', function(err, data) {
            res.write(data, 'binary')
            res.end()
        })
    },
}