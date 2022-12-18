function evanify(num) {
    if (num % 2 == 0) {
        console.log( num, ': is even number' );
    } else {
        console.log(num, ': number is odd number');
    }
}

var age = [44, 21, 25, 24, 33];
for (let i = 0; i < age.length; i++){
    var number = age[i];
    evanify(number);
}