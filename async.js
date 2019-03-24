//串行无关联
//(1)
var async = require("async");
//依次执行任务
// async.series([
//     function(callback) {
//         //自己写的结果逻辑
//         callback(null, 'one')
//     },
//     function(callback) {
//         //自己写的结果逻辑
//         callback(null, 'two')
//     },
// ], function(err, result) {
//     console.log(result)
// });


//(2)
// console.time("test")
// async.series({
//     one: function(callback) {
//         setTimeout(function() {
//             callback(null, '1')
//         }, 1000)

//     },
//     two: function(callback) {
//         setTimeout(function() {
//             callback(null, '2')
//         }, 5000)
//     }
// }, function(err, result) {
//     console.log(result)
//     console.timeEnd("test")
// })


//并行无关联
// console.time("test")
// async.parallel([
//     function(callback) {
//         setTimeout(function() {
//             callback(null, "one")
//         }, 1000)

//     },
//     function(callback) {
//         setTimeout(function() {
//             callback(null, "one")
//         }, 5000)
//     },
// ], function(err, result) {
//     console.log(result)
//     console.timeEnd("test")
// })

//串行有关联  瀑布流
console.time("test")
async.waterfall([
    function(callback) {
        setTimeout(function() {
            callback(null, "one", "two")
        }, 1000)

    },
    function(arg1, arg2, callback) {
        setTimeout(function() {
            callback(null, arg1, arg2, "three")
        }, 5000)
    },
    function(arg1, arg2, arg3, callback) {
        setTimeout(function() {
            callback(null, [arg1, arg2, arg3, "done"])
        }, 5000)
    },
], function(err, result) {
    console.log(result)
    console.timeEnd("test")
})