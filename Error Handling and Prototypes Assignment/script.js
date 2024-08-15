
// Ques1. Write a function called convertToNumber that takes a string as an argument and returns the equivalent number. If the string cannot be converted into a number, the function should return the string 'invalid number'. Use error handling in js to achieve this output.
function convertToNumber(str){
    try{
        let answer = Number(str)
        if(isNaN(answer)){
            throw new Error;
        }
        else {
            console.log(answer)
        }
    }
    catch{
        console.log("Invalid Number");
    }
}

convertToNumber("123");  //123
convertToNumber("342346");  //342346
convertToNumber("123df57g");  //Invalid Number
convertToNumber("abc");  //Invalid Number


// Ques2. Create a function called getPerson that takes an object as a parameter representing a person's name and age. The function should return the person's name and age as a string in the format "Name:<name>, Age:<age>". However, if the parameter is not valid object with the properties name and age. The function should throw an error with the message 'invalid parameters type'. Use try-catch block to handle this error and retur the error message if it occurs. 
function getPerson(obj){
    try{
        if((obj.hasOwnProperty("name")) && obj.hasOwnProperty("age")){
            return `Name: ${obj.name}, Age: ${obj.age}`;
        }
        else{
            throw new Error("Invalid parameterts type");
        }

    }
    catch(error){
        return error;
    }
}
console.log(getPerson({name:"Mithun", age: 20}));  //Name: Mithun, Age: 20
console.log(getPerson({name:"Mithun"}));  //Error: Invalid parameterts type
console.log(getPerson(["name", "age"]));  //Error: Invalid parameterts type

// Ques3. Create a class called Car wtih three properties: company, model, year. The class should have a method called getDescription that returns a string in the format "This is a <year> <company> <model>". Instantiate an instance of the Car class and call the getDescription method.
class Car{
    constructor(m, c, y){
        this.model = m;
        this.company = c;
        this.year = y;
    }
    getDescription(){
        console.log(`This is a ${this.year} ${this.company} ${this.model}.`)
    }
}

let car1 = new Car("Model S","Tesla",2012);  
let car2 = new Car("Model X","Tesla",2015);

car1.getDescription();  //This is a 2012 Tesla Model S.
car2.getDescription();  //This is a 2015 Tesla Model X.

//Ques4. Create a class called Employee with three properties:name, position, salary. The class should have a method called getSalary that returns the employee's salary. Instantiate an instance of the employee class and call the getSalary method
class Employee{
    constructor(n,p,s){
        this.name = n;
        this.position = p;
        this.salary = s;
    }
    getSalary(){
        console.log(this.salary)
    }
}

let emp1 = new Employee("Lovejot", "SDE", 2000000);
let emp2 = new Employee("Jack", "UX Designer", 150000);

emp1.getSalary();  //2000000
emp2.getSalary();  //150000

// Ques. 5 Create a class called Person with two properties name and age. The class should have method called getDetails that returns a string in the format "Name: <name>, Age: <age>"". Use default parameters in the constructor to set the values of name and age to unknown and 0 if they are not provided. 
class Person{
    constructor(n = "unknown",a = "0"){  //setting the default values.
        this.name = n;
        this.age = a;
    }

    getDetails(){
        console.log(`Name: ${this.name}, Age: ${this.age}`);
    }
}

let perosn1 = new Person("Lovejot", 19);
let person2 = new Person();
let person3 = new Person("Edward");

perosn1.getDetails();  //Name: Lovejot, Age: 19
person2.getDetails();  //Name: unknown, Age: 0
person3.getDetails();  //Name: Edward, Age: 0

// Ques 6. Create a class called Calculator with a static method called add. The add method should take two numbers as arguments and return their sum. Instantiate the class and call the add method. 
class Calculator{
    static add(num1, num2){
        return num1+num2;
    }
}
console.log(Calculator.add(4,5));
console.log(Calculator.add(7,3));
console.log(Calculator.add(2,5));

// Ques7. Create a class called user with the properties username and password. Implement a getter method for password that returns the password with all the characters replaced by asterisks. Implement a setter method for password that checks if the new password is atleast 8 characters long and contains at least one number and one uppercase letter. If the password is valid, set the new password. If not, log an error message. 
class User{
    constructor(userName, password){
        this.userName = userName;
        this.password = password;
    }

    get getPassword(){
        let hiddenPassword = "";
        for(let i=0;i<(this.password).length;i++){
            hiddenPassword+="*"
        }
        return hiddenPassword;
    }

    set setPassword(newPassword){
        // Checking if there is any uppercase letter
        let isAnyUppercase = false;
        for(let i=0;i<newPassword.length;i++){
            if(newPassword[i]==(newPassword[i]).toUpperCase()){
                isAnyUppercase = true;
                break;
            }
        }

        // Checking if there is any number
       let isAnyNumber = false;
       for(let i=0;i<newPassword.length;i++){
            if(!isNaN(newPassword[i])){
                isAnyNumber = true;
                break;
            }
       }

       if((newPassword.length>8) && isAnyUppercase && isAnyNumber){
        this.password = newPassword;
       }
       else{
        throw new Error("The password must contain atleast 8 characters and contain at least one number and one uppercase letter.")
       }
      
    }

}

let user1 = new User("Lovejot", "Lovejot98");
console.log(user1.getPassword);  //*********

// user1.setPassword = "MyPassword"; //Error: The password must contain atleast 8 characters and contain at least one number and one uppercase letter.
user1.setPassword = "MyPassword123";
console.log(user1.getPassword)  //*************


//Ques 8. Create a prototype object called Student with a property name. Add a method called printDetails to the protoype that logs the string "Hello, my name is {name}" to the console. Instantiate the student object with the name "Lovejot" and call the printDetails method.

let student = {
    name : "Lovejot",
    age : 19,
}
Object.prototype.printDetails = function(){
    console.log(`Hello, my name is ${this.name}.`);
}

student.printDetails();  //Hello, my name is Lovejot.

// Ques 9. Create a numberChecker function that takes an array of numbers as an argument and returns a function. The returned function should take another number as an argument and return true if the number is in the array, and false otherwise. 

function numberChecker(arr){
     return function (num){
        if(arr.includes(num)){
            return true;
        }
        else{
            return false;
        }
    }
    
}

let arr = [1,2,3,4,5,6,7]

let result = numberChecker(arr);

console.log(result(3));  //true
console.log(result(4));  //true
console.log(result(9));  //false

// Ques 10. Write a function that takes an array of products and returns a function that filters the array by a given product category. The function should filter an eCommerce products array by a specific category. The closure filters products using the filter method. Finally, return a new array containing only the products with the same category as input. 
function filterByCategory(arr){
    return function (category){
        let shortlistedItems = arr.filter((item) =>{
            return item.category === category;
        } )
        return shortlistedItems;
    }
    
}

let products = [{name:"shirts", category:"clothing"},
                {name:"pants", category:"clothing"},
                {name:"hat", category:"accessories"},
                {name:"sunglasses", category:"accessories"}
]

let clothingProducts = filterByCategory(products);
console.log(clothingProducts("clothing"));  //[{ name: 'shirts', category: 'clothing' },{ name: 'pants', category: 'clothing' }]
