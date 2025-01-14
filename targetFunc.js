const targetFunc = (nums, target) =>{
    var map = new Map();

    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (map.has(complement)) {
            return [map.get(complement), i];
        }
        map.set(nums[i], i);
    }

    return [];
}

console.log("Четвертое задание");
const numbers = [2, 7, 11, 15];
let target = 9;
console.log(targetFunc(numbers, target)); // [0, 1]
target = 11;
console.log(targetFunc(numbers, target)); // []
console.log("-------");