// SECTION 1 – Date Object Tasks
// TASK 1 – Custom Digital Clock
// Create a live digital clock using:
// - new Date()
// - getHours()
// - getMinutes()
// - getSeconds()
// - setInterval()
// Format:
// Current Time: 14 : 05 : 09
// (Add leading zero if value < 10)

function showTime(){
    const date1 = new Date()
    
    let hours = date1 . getHours()
    //console.log(hours);
    
    let minutes = date1 . getMinutes()
    //console.log(minutes);
    
    let seconds = date1. getSeconds()
    //console.log(seconds);
    
    if(hours <10){
        hours = "0" + hours;
    }
    if(minutes <10){
    minutes ="0" + minutes;
    }
    if(seconds <10){
    seconds = "0" + seconds;
    }
    console.log("Current Time:" + hours+":"+ minutes +":" + seconds);
}
setInterval(showTime, 1000);


// TASK 2 – Find Current Day Name
// Use getDay()
// Array:
// ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
// Print:
// Today is Friday

let array = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
let today = new Date();
let dayIndex = today.getDay();

console.log("Today is " + array[dayIndex]);


// TASK 3 – Age Calculator (Basic)
// let birthYear = 2003
// Use getFullYear()
// Print:
// Your age is 23

let birthYear = 2003;

let currentYear = new Date(). getFullYear();

let age = currentYear - birthYear;

console.log("Your age is: " + age);

// TASK 4 – Create Specific Date
// Create:
// 15 August 2020
// 10:30:45 AM
// Using:
// - new Date()
// - setFullYear()
// - setMonth()
// - setDate()
// - setHours()
// - setMinutes()
// - setSeconds()
// Print using:
// toLocaleString()

let myDate = new Date()

myDate.setFullYear(2020)
myDate.setMonth(7);
myDate.setDate(15);

myDate.setHours(10);
myDate.setMinutes(30);
myDate.setSeconds(45);

console.log(myDate.toLocaleString());

// SECTION 2 – setTimeout & setInterval

// TASK 5 – Delayed Message
// Use setTimeout()
// After 3 seconds print:
// Welcome Naveen ■

setTimeout(()=>{
     console.log("Welcome Naveen");

},3000)

// TASK 6 – Stop Interval After 5 Seconds
// Output:
// 1
// 2
// 3
// 4
// 5
// Stopped
// Use:
// - setInterval()
// - clearInterval()

let count=1;

let interval = setInterval(()=>{
    console.log(count);
    count++;

    if(count > 5){
        clearInterval(interval);
        console.log("stopped");
        
    }
    
},1000);

// SECTION 3 – Promise Practice

// TASK 7 – Simple Promise
// If number > 10 → resolve("Valid number")
// Else → reject("Invalid number")
// Handle using:
// .then()
// .catch()
// .finally()

let number = 15;

let checkNumber = new Promise((resolve, reject)=>{
    if(number >10){
        resolve("Valid number");
    }else{
        reject("Invalid number");
    }
});

checkNumber 
    .then(result => console.log(result))
    .catch(error => console.log(error))
    .finally(()=> console.log("Promise Completed"));

// SECTION 4 – Fetch API Task

// TASK 8 – Fetch Product Prices
// API:
// https://fakestoreapi.com/products
// Print only:
// Product: <title>
// Price: <price>
// -----------------

fetch("https://fakestoreapi.com/products")
  .then(response => response.json())
  .then(data => {
    data.forEach(product => {
      console.log("Product: " + product.title);
      console.log("Price: $" + product.price);
      console.log("-----------------");
    });
  })
  .catch(error => console.log("Error:", error));

// SECTION 5 – Execution Order Task

// function one(){
// console.log("one");
// }
// function two(){
// console.log("two");
// }
// function three(){
// console.log("three");
// }
// one()
// setTimeout(two,0)
// three()
// Predict Output and Explain Why.

function one(){
  console.log("one");
}
function two(){
  console.log("two");
}
function three(){
  console.log("three");
}

one()
setTimeout(two,0)
three()

// Output
// one
// three
// two

// call stack , Web APIs, callback queue , Event loop

// one() → Executes immediately
// Output: one

// setTimeout(two, 0) → Asynchronous

// It does NOT run immediately.

// It sends two() to the callback queue.

// It waits until all synchronous code finishes.

// three() → Normal function → Executes immediately
// Output: three