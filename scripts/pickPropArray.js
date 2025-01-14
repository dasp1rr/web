const pickPropArray = (array, property) =>{
    return array
        .filter(item => item.hasOwnProperty(property))
        .map(item => item[property]);
}

const students = [
    { name: 'Павел', age: 20 },
    { name: 'Иван', age: 20 },
    { name: 'Эдем', age: 20 },
    { name: 'Денис', age: 20 },
    { name: 'Виктория', age: 20 },
    { age: 40 },
];

const result = pickPropArray(students, 'name');

console.log("Первое задание");
console.log(result);
console.log("----------");