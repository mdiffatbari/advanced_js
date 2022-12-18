function forAlien(str) {
    var revarce = "";
    for (var i = 0; i < str.length; i++){
        var char = str[i];
        revarce = char + revarce;
    }
    return revarce;
}

var statement = "Hello align bro";
var decode = forAlien(statement);
console.log(decode);