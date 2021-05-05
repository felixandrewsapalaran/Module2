console.log('Hello');

//alert('Hello Andrew!');

// Variable
var b = 'smoothie';
 console.log(b);

var someNumber = 45;
console.log(someNumber);


//Manipulate DOM with JavaScript
/*
... It's just a fancy way of saying change
HTML with JavaScript
*/

// var age = prompt('What is your age?');
// document.getElementById('someText').innerHTML = age;

// Numbers in JavaScript
var num1 = 10;

// Increment num1 by 1
num1++
console.log(num1);

// Decrement num by 1
num1--
console.log(num1);

// Divide, multiply *, remainder %
console.log(num1 % 2);

/*
Functions
1. Create a funtion
2. Call the function
*/

// Create
function fun() {
    console.log('this is a function');
}

// Call
fun()

/*
Let's create a function that take in a name
anmd says hello followed by your name

For example

Name: "Andrew"
Return: "Hello Andrew"
*/

function greetings(username) {
    var greet = "Hello " + username + "!";
    console.log(greet);
}


// var personname = prompt("What is your name?");
// greetings(personname);  



// How do arguments work in functions?
// How do we add 2 numbers together in a function?
function sumNumbers(num1, num2){
    var result = num1 + num2;
    return result
}

console.log(sumNumbers(2, 4));


/* 
// While loops
var num = 1;

while (num < 11) {
    console.log(num)
    num++;
}
*/


/* 
// For loops
for (let num = 1; num < 11; num++){
    console.log(num)
}
*/

// Data types
let yourAge = 18;   // int
let yourName = 'Andrew'; // string
let name = {               // object
    first: 'Andrew',
    last: 'Sapalaran'
}; 

let truth = false;  // boolean
let groceries = ['apple', 'banana', 'oranges'];  // array
let random;     // undefined
let nothing = null;     //value null



// Strings in JavaScript (common methods)
let fruit = 'banana, apple, orange, blackberry';
let moreFruits = 'banana\napple'; // apple should appear new line

console.log(fruit.length) // tells the lenght of the string
console.log(fruit.indexOf('nan')); // tells the index number of `n`
console.log(fruit.slice(2,6)) // show the letter at index 2 to 6 only
console.log(fruit.replace('ban', '123')); // replacing character
console.log(fruit.toUpperCase()); // turn all to uppercase
console.log(fruit.toLowerCase()) // turn all to lowecase 
console.log(fruit.charAt(2)) // get the character with index 2 which is n
console.log(fruit[2]) // another way to get character index 2
console.log(fruit.split(',')); // split string by a comma good for (CSV) file
console.log(fruit.split('')) // split string by character

// Array
let fruits = ['banana', 'apple', 'orange', 'pineapples'];
// Another way to create an array
fruits = new Array('banana', 'apple', 'orange', 'pineapples', "New added");

console.log(fruits[2]); //access value at index 2nd
console.log(fruits)

fruits[0] = 'pear'; // replace index 0 value to 'pear'
console.log(fruits)

// loop through an array and print each index value
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}


// array common methods
console.log('to string', fruit.toString()); // converting array into string
console.log(fruits.join(' * '));

console.log(fruits.pop(), fruits); // removes last item "New added"
console.log(fruits.push('rasberries'), fruits); //append at the end of the element

console.log(fruits[4]); // accessing value of index 4
fruits[fruits.length] = 'new fruit'; // same as push
console.log(fruits);

fruits.shift(); // remove first element from an array
console.log(fruits);
fruits.unshift('kiwi'); // add first element to an array
console.log(fruits);


let vegetables = ['asparagus', 'tomato', 'broccoli'];
let allGroceries = fruits.concat(vegetables); // combine veggie and fruit array
console.log(allGroceries);

console.log(allGroceries.slice(1,4));
console.log(allGroceries.reverse()); // reverse the order
console.log(allGroceries.sort()); // sort the order alphabetically


let someNumbers = [5, 10, 2, 25, 3, 255, 1, 2, 5, 334, 321, 2];
// To sort numbers in javaScript you have to pass it with filter
console.log(someNumbers.sort(function (a, b) { return a - b})); // sorted in ascending order
console.log(someNumbers.sort(function (a, b) { return b - a})); // sorted in descending order


let emptyArray = new Array(); // new empty array
for (let num = 0; num <= 10; num++){
    emptyArray.push(num) // keep pushing number through our array
}
console.log(emptyArray)


// Objects in JavaScript
// Dictionaries in Python

let student = {
    first: "Andrew",
    last: "Sapalaran",
    age: 27,
    height: 165,
    studentInfo: function () {
        return this.first + '\n' + this.last + '\n' + this.age; 
    }
};

console.log(student.first);
console.log(student.last);
student.first = 'notRafeh'; // change value
console.log(student.first);

student.age++; // incrementing the age by 1
console.log(student.age);

console.log(student.studentInfo());



// Conditionals, Control flows (if else)
// 28-45 is my Grind moment
// || OR
var age = 27;

if ( (age >= 27) && (age <= 45) ) {
    status = 'Start Grinding, Saving and Investing';
    console.log(status);
}else {
    status = 'Get ready to retire and enjoy life';
    console.log('status');
}


// switch  statments
// differentiate between weekday vs weekend
// day 0 --> Sunday --> weekend
// day 1 --> Monday --> weekday
// day 2 --> Tuesday --> weekday
// day 3 --> Wednesday --> weekday
// day 4 --> Thursday --> weekday
// day 5 --> Friday --> weekend
// day 6 --> Saturday --> weekend
switch (4) {
    case 0:
        text = 'weekend';
        break;
    case 5:
        text = 'weekend';
        break;
    case 6:
        text = 'weekend';
        break;
    default:
        text = 'weekday';
}

console.log(text);
