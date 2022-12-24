const nums = [2, 8, 9, 7];
const numsDouble = [];

for (let i = 0; i < nums.length; i++){
    const element = nums[i];
    const result = element * element;
    numsDouble.push(result);
}

console.log(numsDouble);



const nums = [2, 8, 9, 7];

nums.map(function (element, index, array) {
    console.log(element, index, array)
})


const nums = [2, 8, 9, 7];

const result = nums.map(function (element) {
    return element * element;
})

console.log(result);




const nums = [2, 8, 9, 7];

const bigger = nums.filter(x => x > 8);
console.log(bigger);
