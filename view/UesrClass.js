var UesrClass = function(name, age, friends) {
    this.name = name;
    this.age = age;
    this.friends = friends;

}

UesrClass.prototype.sayname = function() {
    return this.name
}
UesrClass.prototype.sayfriends = function() {
    return this.friends
}
module.exports = UesrClass;