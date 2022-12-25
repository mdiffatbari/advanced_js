const nums = [20, 55, 41, 30, 44, 48];

// for (let i = 0; i < nums.length; i++){
//     if (nums[i] > 50) {
//         break;
//     }
//     console.log(nums[i]);
// }

for (let i = 0; i < nums.length; i++){
    if (nums[i] > 50) {
        continue;
    }
    console.log(nums[i]);
}