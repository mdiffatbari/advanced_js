function add(num1, num2) {
    var sum = 0;
    for (let i = 0; i < arguments.length; i++){
        var num = arguments[i];
        sum = sum + num
        var double = sum * 2;
    }
    return double;
}

var result = add(2, 4, 5, 3);
console.log(result);