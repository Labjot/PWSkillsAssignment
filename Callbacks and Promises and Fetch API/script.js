//Ques1. Write a function that takes in a an array of integers and a callback function, and returns a new array where each element is doubled using the callback. 
function doubleArray(arr,callback){
    let doubledArr = arr.map((val)=>{
        return callback(val);
    })
    return doubledArr;
}

let arr = [1,2,3,4,5,6];

function callback(val){
    return val*2;
}

let result = doubleArray(arr, callback);
console.log(result);

//Ques2. Write a function "manipulateString" that takes in a string and converts the characters to uppercase letters. The function should return a callback function "logString" that logs the sentence "The manipulated string is : " along with the manipulated string or the new string to the console.
function manipulateString(str,callback){
    var newStr = str.toUpperCase()
    callback(newStr);
}

function logString(str){
    console.log("The manipulated string is: ", str)
}
manipulateString("hello, world", logString)

//Ques3. Write a JS function called ageInDays that accepts an object containing a person's firstname, lastname and age in years as input. The function should concatenate the first and last name into a string string and store it in a variable called fullName. It should then calculate the person's age in days and store it in a variable called ageInDays. The ageInDays function should then return a callback function that logs a message to the console. The message should include the person's full name and age in days and should format: "The person's full name is [fullname] and their age in days [age in days]." Note that the ageInDays function should not log the message directly, but should instead return a callback function that can be used to log the message at a later time. 
let personObj = {
    firstname : "Mithun",
    lastname : "Sharma",
    age : 22,
}

function ageInDaysFunc(obj,callback){
    let lastN = obj.lastname;
    let fullName = obj.firstname + lastN[0];
    let ageInDays = obj.age * 365;
    callback(fullName,ageInDays);
}
function logDetails(fullName,ageInDays){
    console.log(`The person's fullName is ${fullName} and their age in days is ${ageInDays}`);
}

ageInDaysFunc(personObj,logDetails);

//Ques4.  Write a program that accepts a list of objects representing books [title, author, year] and a callback function. The program should use the map function to create a new list containing only the titles of the books, and then pass this new list to the callback function. The callback function should then log the titles to the console in alphabetical order. 

const bookCollection = [
    {
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        year: 1925
    },
    {
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        year: 1960
    },
    {
        title: "1984",
        author: "George Orwell",
        year: 1949
    },
    {
        title: "Pride and Prejudice",
        author: "Jane Austen",
        year: 1813
    }
];
function extractTitles(arr,callback){
    let titlesArr = arr.map((val)=>{
        return val.title;
    })
    callback(titlesArr)
}

function logBooksDetails(titlesArr){
    titlesArr.sort()
    console.log(titlesArr.join(", "))
}

extractTitles(bookCollection,logBooksDetails);

//Ques5. You need to write a function that takesa name as input and returns a promise that resolves with a greeting messgae. The function should greet the user with their name, with a message in the format "Hello, {name}!". For example if the name is Mithun the promise should resolve with Hello, Mithun
function greetUser(name){
    return new Promise(function exec(resolve, reject){
        resolve(`Hello, ${name}`);
    });
}

let promiseConsuming = greetUser("Lovejot");

promiseConsuming.then(function exec(val){
    console.log(val);
})

// Ques6. Write a function that asynchronously fetches data from  the API and logs the results to the console. 
console.log("Start")
async function fetchingData(){
    let response = await fetch("https://jsonplaceholder.typicode.com/todos/1")
    let data = await response.json()
    console.log(data)
}
console.log("processing request")
fetchingData()


/* Ques 7.Create an asynchronous function that retrieves data from two different API endpoints: "https://
jsonplaceholder.typicode.com/todos/1" and "https://jsonplaceholder.typicode.com/posts/1". The first API returns
a to-do task, while the second API provides post details. The function should combine the results from both APIs
and log them as an object, where the keys are "todo" and "post", and the corresponding values are the
responses from the respective APIs. */

async function retriveData(){
    let response1 = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    let response2 = await fetch("https://jsonplaceholder.typicode.com/posts/1");

    let data1 = await response1.json();
    let data2 = await response2.json();

    let dataObj = {
        todo : data1,
        post : data2,
    }
    return dataObj;
}

retriveData().then((data) => console.log(data));

// Ques 8. Write a js program that uses the fetch method to retrive data from an api, and then logs the data to the console.For example, you could use the API at https://jsonplaceholder.typicode.com/posts to retrive a list of posts then display them to the browser console.
async function anotherFetchRequest(){
    let response = await fetch("https://jsonplaceholder.typicode.com/posts").then((value) => value.json());
    console.log(response);
}
anotherFetchRequest();

// Ques 9. Write a js program that uses the Fetch method to retrive data from an api and then handles errors that may occur. For example. you could use the API at https://jsonplaceholder.typicode.com/posts/123456789to simulate an error, and then display an error message on the webpage.

fetch("https://jsonplaceholder.typicode.com/posts/123456789").then((response) => {
    if(!response.ok){
        throw new Error("There was an error while fetching the data.");
    }
    else {
        response.json();
    }
})



