//Question 1 
function convertToNumber(string){
    try {
        let answer = Number(string);
        if (isNaN(answer)){
            throw new Error;
        }
        else {
            return answer;
        }
    } catch{
        return "Invalid Number";
    }
}


console.log(convertToNumber("1234"));
console.log(convertToNumber("abc"));
console.log(convertToNumber("12dff"));
console.log(convertToNumber("788920"));
console.log(convertToNumber("2345a"));

//Question 2
function getPerson(person){
    try{
        if (typeof(person)!= "object" || !person.hasOwnProperty("name") || !person.hasOwnProperty("age")){
            throw new Error;
        }
        else {
            return `Name : ${person.name}, Age : ${person.age}`;
        }
    }
    catch {
        return "Invalid Parameter Type"
    }
}

console.log(getPerson({name:"Mithun",age:21}));
console.log(getPerson({age:21}));
console.log(getPerson({name:"Mithun"}));
console.log(getPerson(["name","Mithun"]));
console.log(getPerson({name:"Lovejot",age:19}));


//Question 3
class Car{
    constructor(company,model,year){
        this.company = company;
        this.model = model;
        this.year = year;
    }

    getDescription(){
        return `This is a ${this.year} ${this.company} ${this.model}.`;
    }
}

let myCar = new Car("Skoda","Rapid","2022");
console.log(myCar.getDescription());


//Question 4
class Employee{
    constructor(name,position,salary){
        this.name = name;
        this.position = position;
        this.salary = salary;
    }

    getSalary(){
        return this.salary;
    }
}

let employee1 = new Employee("Lovejot","FrontEnd Developer", 100000);

console.log(employee1.getSalary());


//Question 5
class Person{
    constructor(name="Unknown",age=0){
        this.name = name;
        this.age = age;
    }

    getDetails(){
        return `Name : ${this.name} , Age : ${this.age}`;
    }
}

let person1 = new Person("Lovejot",19);
let person2 = new Person();
let person3 = new Person("Lovejot")

console.log(person1.getDetails());
console.log(person2.getDetails());
console.log(person3.getDetails());


//Question 6
class Calculator{
    static add(num1,num2){
        let result = (num1+num2);
        return result;
    }
}

console.log(Calculator.add(4,5));
console.log(Calculator.add(14,34));
console.log(Calculator.add(4,1));


//Question 7
class User{
    #password;
    constructor(u,p){
        this.username = u;
        this.#password = p;
    }

    get getPassword(){
        let asterisksPrinter = "";                                  
        for (let i = 0; i < this.#password.length; i++) {
            asterisksPrinter = asterisksPrinter + "*";
        }
        return asterisksPrinter;
    }

    set setPassword(password){
        let hasNumber = false;
        let hasCapital = false;

        // loop to check if it has number in it or not
        for(let i = 0;i<password.length;i++){
            if(!isNaN(password[i])){
                hasNumber = true;
                break;
            }
        }

        // loop to check if it has capital letter in it
        for(let i = 0;i<password.length;i++){
            if(password[i]==password[i].toUpperCase()){
                hasCapital = true;
                break;
            }
        }

        if(password.length>=8 && hasNumber && hasCapital){
            this.#password = password;
        }
        else {
            throw new Error("The Password must contain atleast 8 characters and contain atleast one digit and one uppercase letter")
        }
    }
    
}
let user = new User("Lovejot","Password12");
// console.log(user.getPassword);

// user.setPassword = "myPassword";  //throws error

// user.setPassword = "MyPassword";    //throws error

user.setPassword = "Mypassword123";    //succesfully updates the password
console.log(user.getPassword);         //print the asterisks same as the length of updated password


//Question 8
function Student(name){
    this.name = name;
}

let student = new Student("Mithun");

Object.prototype.printDetails = function(){
    return `Hello, my name is ${this.name}`;
}

console.log(student.printDetails());


//Question 9
function numberChecker(arr) {
    return function (number) {
        if(arr.includes(number)){
            return true;
        }
        else {
            return false;
        }
    };
  }
  

let array1 = [1,2,3,4,5];

let checkNum = numberChecker(array1);

console.log(checkNum(3));
console.log(checkNum(4));
console.log(checkNum(6));

//Question 10
let products = [
    {name:"Shirts",category:"Clothing"},
    {name:"Pants",category:"Clothing"},
    {name:"Hat",category:"Accessories"},
    {name:"Sunglasses",category:"Acessories"},
]

function filterByCategory(arr){
    return function (category){
        let shortListedItems = arr.filter((item)=>{
            return item.category===category;
        })
        return shortListedItems;
    }
}

let clothingProducts = filterByCategory(products);

console.log(clothingProducts("Clothing"));
