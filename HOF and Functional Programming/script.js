// Ques 1. The problem is to create a program that uses the setTimeout() function to reverse a given string after a delay of 2 seconds. The program should use a varible 'input' storing as input and then implement a delay of 2 seconds before reversing the string. The reversed string should be printed as output.
let input = 'lovejot';

let reversedStr = (str) => {
    let output = ((Array.from(str)).reverse()).join('');    //converting the string to an array then reversing then joining all the elements
    setTimeout(() => {
        console.log(`Reverse of ${str} is ${output}`);
    },2000);
} 

reversedStr(input);

// Another way of reversing a string in JS
// let inputAfterReversing = '';
// for(let i = input.length - 1;i>=0;i--){
//     inputAfterReversing = inputAfterReversing + input[i]
// };
// console.log(inputAfterReversing);

// Ques 2. The goal of this program is to generate a random number after a delay of 3 seconds, and store the delay in a variable so can be modified. The program displays a message every second indicating the time remaining until the random number is generated and then outputs the generated number. 

let delay = 4   //in seconds
function timerToPrintNum(delay){
    for(let i = delay;i>=1 ;i--){
        setTimeout(()=>{
        console.log(`Time Remaining : ${i} sec`)
        },(delay-i)*1000);
    }
}

setTimeout(()=>{
    let randomNum = Math.floor(Math.random() *101);
    console.log(`The random number generated is ${randomNum}`);
},delay* 1000);


timerToPrintNum(delay);

//Suppose a store has a list of items and their prices in US Dollar stored as an object. Create a javaScript  program to convert the prices to Indian Rupees using an exchange rate of 1usd to 80inr. The program should use the map higher order function to create new object with the converted price in Rupees.

let priceInUSObj = {
    'Laptop': 899.99,
    'Headphones': 49.99,
    'Backpack': 29.99,
    'Smartphone': 599.99,
    'Camera': 379.99,
    'Tablet': 329.99,
    'Running Shoes': 79.99,
    'Gaming Console': 399.99,
}

let priceInUSArray = Object.entries(priceInUSObj);   //Creating an array from the object
//As the array is created like [['laptop',899.99],['Headphones',49.99],......]
let newArray = priceInUSArray.map(([item,price])=>[item, price * 80]);    //using [item,price] to access it

let priceInIndiaObj = Object.fromEntries(newArray);   //again converting the array into a new Object
console.log(priceInIndiaObj);

//Ques 4. Write a program that takes a list of books, including their authors and publications years as input. The program should then filter out all books that were published before 2010 and create a new array with the remaining books, but with their author names capitalized.

let books = [
    { title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960 },
    { title: '1984', author: 'George Orwell', year: 1949 },
    { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925 },
    { title: 'The Catcher in the Rye', author: 'J.D. Salinger', year: 1951 },
    { title: 'Pride and Prejudice', author: 'Jane Austen', year: 1813 },
    { title: 'The Hobbit', author: 'J.R.R. Tolkien', year: 1937 },
    { title: 'Harry Potter and the Sorcerer\'s Stone', author: 'J.K. Rowling', year: 1997 },
    { title: 'The Lord of the Rings', author: 'J.R.R. Tolkien', year: 2016 },
    { title: 'Jane Eyre', author: 'Charlotte Brontë', year: 1847 },
    { title: 'One Hundred Years of Solitude', author: 'Gabriel García Márquez', year: 1967 },
    { title: 'The Chronicles of Narnia', author: 'C.S. Lewis', year: 1950 },
    { title: 'Brave New World', author: 'Aldous Huxley', year: 1932 },
    { title: 'The Da Vinci Code', author: 'Dan Brown', year: 2012 },
    { title: 'The Shining', author: 'Stephen King', year: 1977 },
    { title: 'The Hitchhiker\'s Guide to the Galaxy', author: 'Douglas Adams', year: 1979 },
    { title: 'The Girl with the Dragon Tattoo', author: 'Stieg Larsson', year: 2011 },
    { title: 'Frankenstein', author: 'Mary Shelley', year: 1818 },
    { title: 'The Alchemist', author: 'Paulo Coelho', year: 2018 }
];

// we need remaining books after filtering out books published before 2010 so our answer array will have books published after 2010
let booksAfter2010 = books.filter((element) => {
    element['author'] = element['author'].toUpperCase();
    return element['year']>2010;
});
console.log(booksAfter2010)

// Ques 5. Write a program using regex that matches valid URLs. Valid URL should should start with either http:// or https://, followed by one or more letters, digits, special characters, followed by dot, followed by one or more letters. Print a message indicating if the input matches the condition or not.
function validateURL(url){
    let regExp = /^(https:\/\/|http:\/\/)[a-zA-Z]+\d*[$%^&*()_+=]*\.[a-zA-Z]+\.*(com)*/gim;
    if(regExp.test(url)){
        console.log(`url is valid`);
    }
    else{
        console.log('url is not valid');
    }
}
validateURL('https://www.google.com');  //valid
validateURL('https://www.youtube');     //valid
validateURL('https://www%youtube.com');   //invalid

//Ques 6. As a developer, you want to create a program that validates LinkedIn profile URLs to ensure that they are formatted correctly and contains only valid characters. Valid LinkedIn URLs should start with https://www.linkedin.com/in/ followed by a combination of one or more letters, digits, underscores, or hypens, and end with a letter or digit. The length of the profile ID should be between 5 and 30 characters. The program should use a regular expression to match valid LinkedIn profile URLs, and should not match URLs that do not follow this format or contains invalid characters. The program should provide clear output messages indicating whether each input is a valid LinkedIn profile or not.

let linkedInProfileValidator = (url) => {
    let regEx = /^(https:\/\/www.linkedin.com\/in\/)[a-zA-Z0-9-_]{5,30}[a-zA-Z0-9]$/gim;
    if(regEx.test(url)){
        console.log('url is valid');
    }
    else{
        console.log('url is invalid.')
    }
}

linkedInProfileValidator('https://www.linkedin.com/in/johndoe123');  //valid
linkedInProfileValidator('https://www.linkedin.com/in/mary_smith');   //valid
linkedInProfileValidator('https://www.linkedin.com/in/user123');   //valid
linkedInProfileValidator('https://www.linkedin.com/in/12345');   //invalid
linkedInProfileValidator('https://www.linkedin.com/in/user-name');  //valid
linkedInProfileValidator('https://www.linkedin.com/in/user@domain');  //invalid
