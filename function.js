function getArrayTotal(numbers) {
    var sum = 0;
    for (var i = 0; i < numbers.lenght; i++){
        var element = numbers[i];
        sum = sum + element;
    }
    return sum;
}

var result = getArrayTotal([20, 55, 44, 55, 88]);
console.log(result);