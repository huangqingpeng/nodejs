var UesrClass = require("./UesrClass.js");

function Uesr(name, age, friends) {
    UesrClass.call(this, name, age, friends)
        //this.name = "huang"

    //this.position = "left"
};

Uesr.prototype = new UesrClass();

module.exports = Uesr;