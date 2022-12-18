function getName(nameFirs, nameSecond) {
    let nemName = " ";
    for (let i = 0; i < arguments.length; i++){
        var fullName = arguments[i];
        nemName = nemName + fullName;
    }
    return nemName;
}

var name = getName('md', 'iffat');
console.log(name);