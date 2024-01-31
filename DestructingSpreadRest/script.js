//Ques 1. You are building a word count generator that will take a large string of text as input and output the words and the number of times they are present in the string. Your task is to write a function that can count the occurences of each word in the string and return a Map containing each word's count. For simplicity, you can assume that the string only contains alphabetic characters and spaces.
let text = 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isnt anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.';

let wordCounter = (text) => {
    let words = text.split(' ');
    let occurenceCount = new Map();
    for(let i=0;i<words.length;i++){
        if(occurenceCount.has(words[i])){
            occurenceCount.set(words[i], occurenceCount.get(words[i]) + 1);
        }
        else {
            occurenceCount.set(words[i],1);
        }
    }
    console.log(occurenceCount);
}

wordCounter(text);

//Ques 2.You are building a program that takes an array of numbers as input and you need to remove all the duplicates from the array. You want to write a function that can accomplish this task eficiently and returns a new set that contains only unique elements.
let arr = [1,2,3,4,5,2,4,56,2,3,6,52,6,2,8,5,2,4,5];
function removeDuplicates(arr){
    let uniqueEle = new Set(arr);
    return uniqueEle;
};
console.log(removeDuplicates(arr));

//Ques 3. You are working on a project that required you to swap the values of two variables without using a temporary variable. You decide to write a function that takes two varibles as input and swaps their values using destructing assignment with an array. the function should take two variables as arguments, destructure them into an array, and then swap their positions within the arrayt. Fincally, the function should return an array with the swapped values. For example, if the function is called with arguments x = 5; y = 10; it should return an array [10,5] with now x = 10 and y = 5;

function swapValues(x,y){
    [x,y] = [y,x];
    return [y,x];
}
console.log(swapValues(5,10));
console.log(swapValues(4,7));

//Ques 4. You are building a program that takes an array of numbers as input and you need to extract the first,second, and last elements of the array. You decide to write a function that can accomplish this task using destructing assignment with an array. The function should take the array as an argument, destructure it into three variables representing first, second, last element, and then return an array with these three values. For example if [1,2,3,4,5] the function should return [1,2,5];

function destructureArr(arr){
    let firstEle = arr[0];
    let secondEle = arr[1];
    let lastEle = arr[arr.length-1];
    return [firstEle,secondEle,lastEle];
}
console.log(destructureArr([1,2,3,4,5]));

//Ques 5. You are building a program that needs to find the maximum and minimum values in an array of numbers. You decide to write a function that can accomplish this task by taking an array of numbers as input and using the spread operator with the Math methods max() and min(). The function should return anobject with two properties max and min. representing the maximumn and minimum values in input array,respectively. For example, if the input array is [5,2,1,7,9], the function should return an obj{max:9,min:1}.

function maxAndMinNumber(arr){
    let obj = {}
    obj.max = Math.max(...arr);
    obj.min = Math.min(...arr);
    return obj;
}
console.log(maxAndMinNumber([5,2,1,7,9]));

//Ques 6. Write a function that takes an object representing a person as input, extracts the name and street properties from a nested object using object destructing. The function should return an object these two properties.

const person = {
    name : 'Mithun',
    age : 21,
    address : {
        street : 'B8, Block B, Industrial Area',
        city : 'Sector 63, Noida',
        state : 'Uttar Pradesh',
    },
}
function extractNameAddress(obj){
    const {
        name,
        address : {street},
    } = obj;
    return {name,street};
}
console.log(extractNameAddress(person) );
