
// Define 3 operations, add, multiply, subtract
const arrayOriginal = [1,2,3];
const add = (a, b) => a + b;
const multiply =(a,b) => a*b;
const subtract = (a) => a - 3 >= 0;



function calculator(){
    let arrayReduce = arrayOriginal.reduce(add);
    let arrayMap = arrayOriginal.map(multiply => multiply * 5);
    let arrayFilter = arrayOriginal.filter(subtract);

    console.log("Trying Reduce(): ", arrayReduce); 
    console.log("Trying Map(): ",arrayMap); 
    console.log("Trying Filter(): ",arrayFilter);

    // console.log("Soma: " + add(3,4));
    // console.log("Multiplicação: " + multiply(3,4));
    // console.log("Subtração: " + subtract(3,4));
}

calculator();

//***The reduce() method executes a reducer function (that you provide) on each element of the array, resulting in single output value.***//
//***The map() constructor creates Map objects. It apllyes the function over each element inside the original array and creates a new one ***//
//***The filter() method filter an information on the array acording to a function that we give to it ***//