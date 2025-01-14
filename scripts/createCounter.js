const createCounter = () =>{
    var count = 0;

    return function () {
        count++;
        console.log(count);
        return count;
    };
}
console.log("Второе задание");
const counter1 = createCounter();
counter1(); // 1
counter1(); // 2

const counter2 = createCounter();
counter2(); // 1
counter2(); // 2
counter2(); // 3
counter2(); // 4
console.log("--------");