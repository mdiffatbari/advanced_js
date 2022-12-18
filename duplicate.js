var speech = "My name is Iffat. I am a CSE student";
var count = 0;

for (var i = 0; i < speech.length; i++){
    var newNumber = speech[i];

    if (newNumber == " " && speech[i - 1] != " ") {
        count++;
    }
}
count++;
console.log(count);