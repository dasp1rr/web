const spinWords = (str) =>{
    return str
        .split(' ')
        .map(word => word.length >= 5 ? word.split('').reverse().join('') : word)
        .join(' ');
}

console.log("Третье задание");
const result1 = spinWords("Привет от Legacy");
console.log(result1); // тевирП от ycageL

const result2 = spinWords("This is a test");
console.log(result2); // This is a test
console.log("-------");