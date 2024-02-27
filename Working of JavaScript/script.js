//Ques1. Write a function called addNumbers that takes two numbers as arguments and returns their sum. Call the function before it is declared to demonstrate hoisting.
var a = 10;
var b = 20;

let result = add(a,b);  //calling the function before declaring it  
console.log(result)

function add(a,b){
    return (a+b)
}

// Ques2. Write a function called multiplyNumbers that takes two numbers as arguments and return its product. Use function expression to define the function and call the function before it is declared to demonstrate hoisting.

var x = 2;
var y = 4;

let result2 = multiplyNumbers(); //calling an arrow function before declaring it
// ReferenceError: Cannot access 'multiplyNumbers' before initialization. Hoisting doesn't work with arrow functions. 
console.log(result3)

let multiplyNumbers = (x,y) => {
    return x*y
}

// Ques3. Write a function that takes two numbers as arguments and returns their sum. Declare a variable inside the function using var keyword and log its value to the console before it is assigned a value to demonstrate variable hoisting. 

function anotherSum(a,b){
    console.log(c)  //undefined
    var c=a+b;
    return c;
}
let result3 = anotherSum(4,5)
console.log(result3)

// Ques4. Declare three varibles using let, var, const inside a block scope. Assign them values and log their values to the console before and after they are declared to demonstrate varible hoisting. 
console.log(p)   //undefined
console.log(q)   //Reference Error
console.log(r)   //Reference Error
{
    var p = 10;
    let q = 20;
    const r = 30;
}

console.log(p)  //10
console.log(q)  //20
console.log(r)  //30

// Ques5. Declare a variable using let inside a block scope and attempt to logs its value to the console before it is assigned a value to demonstrate temporal dead zone

{
    console.log(z);  //ReferenceError: z is not defined
    let z = "lovejot";
}
