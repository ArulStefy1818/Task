// Part 1 – Logical & Ternary Operator
// Q1: Check whether a number is between 10 and 50 using logical AND.
// Input: let num = 25
// Output: "Valid Number" or "Invalid Number"

let num=25
if(num >=10 && num <=50){
    console.log("valid Number");
}else{
    console.log("Invalid Number");
        
}
    
// Q2: Check if a user is eligible to log in.
// Condition:
// username must be "admin"
// password must be "1234"
// Use logical AND.

let UserName="admin"
let Password="1234"
if(UserName==="admin" && Password==="1234"){
    console.log("You are eligible to login");
    
}else{
    console.log("You are not eligible to login");
    
}

// Q3: Using ternary operator:
// Check if a number is even or odd.

let number=prompt("Enter the number")
let result=(number%2 ===0) ? ("Even number") : ("Odd number")
console.log(result);

// Q4: What is the output?
// console.log((10 === "10") || (5 > 2) && !(3 < 1));
// Explain step by step.

console.log((10==="10") || (5>2) && !(3<1)); // false

//false || true = true
//(3<1)= false
//!(false)= true
//true && true = true

// Part 2 – Type Conversion

// Q5: Find the output and explain:
// console.log("5" + 2);
// console.log("5" - 2);
// console.log("5" * 2);
// console.log("5" / 2);

console.log("5" + 2); // 52 string (string anything string)
console.log("5" - 2); // 3 number (- converts string to number)
console.log("5" * 2); // 10 number (* converts string to number)
console.log("5" / 2); // 2.5 number (/ converts string to number)


// Q6: Convert the following using explicit conversion:
// let value = "100";
// - Convert to Number
// - Convert to Boolean

let value= "100";
let numvalue= Number(value);   
console.log(numvalue);

let boolvalue= Boolean(value);
console.log(boolvalue);

// Q7: What will be the output?
// console.log(Boolean(""));
// console.log(Boolean(" "));
// console.log(Boolean(0));
// console.log(Boolean([]));
// Explain why.

console.log(Boolean(""));  // false (empty string is treated as false)
console.log(Boolean(" ")); // true  (Non-empty string it has space)
console.log(Boolean(0));   // false (false value 0)
console.log(Boolean([]));  // true  (Arrays are objects and all objects are true)

//Part 3 – Conditional Statements

// Q8: Write a program:
// If marks >= 90 → Grade A
// If marks >= 75 → Grade B
// If marks >= 50 → Grade C
// Else → Fail
// Use if else if.

let marks=prompt("Enter the student marks")
if(marks >= 90 && marks <=100){
    console.log("Grade A");

}else if(marks >= 75){
    console.log("Grade B");
    
}else if(marks >= 50){
    console.log("Grade c");
    
}else{
    console.log("Fail");
    
}

// Q9: Traffic Signal Program using switch case:
// "red" → Stop
// "yellow" → Ready
// "green" → Go
// Default → Invalid Signal

let signal=prompt("Enter the signal color")
switch(signal){
    case"red":
    console.log("Stop");
    break;

    case"yellow":
    console.log("Ready");
    break;

    case"green":
    console.log("Go");
    break;

    default:
        console.log("Invalid Signal");
        
}

// Q10 (Nested If): Check eligibility:
// Age >= 18
// Height >= 160
// Weight >= 50
// If all true → "Selected"
// Else → show which condition failed.

let Age=prompt("Enter your Age");
let Height=prompt("Enter your Height");
let Weight=prompt("Enter your Weight");

if(Age>=18){
    if(Height>=160){
        if(Weight>=50){
            alert("You are Selected");
            
        }else{
            alert("your are under weight ,not selected");
            
        }
    }else{
        alert("your height very low, not selected");
        
    }
}else{
    alert("your age is below 18, not selected");
    
}

// Part 4 – Loops

// Q11: Print numbers from 1 to 20 using for loop.

for (let i=1; i<=20; i++){
console.log(i);
}

// Q12: Print only odd numbers from 1 to 20.

for (let i=1; i<=20; i++){
    if(i%2==1){
        console.log("Odd:", i);
        
    }
}

// Q13: Using while loop:
// Print numbers from 10 to 1.
let i=10;
while(i>=1){
    console.log(i);
    i--;
    
}

// Q14: Using do-while loop:
// Print numbers from 1 to 5.

let val=1;
do{
    console.log(val);
    val++;
    
}
while (val<=5);
// Q15: Using for-of loop:
// Print each character from:
// let word = "STACKLY"

let word="STACKLY";
for (let a of word){
    console.log(a);
}

// Q16: Using for-in loop:
// Print both key and value from:
// let student = {
// name: "Arun",
// course: "MERN",
// duration: "6 months"
// }

let student = {
    name: "Arun",
    course: "MERN",
    duration: "6 months"
}
for(let b in student){
    console.log(b +":"+student[b]);
    
}

// Real-Time Questions

// RT-1: Login System
// If username = "admin" AND password = "1234" → "Login Success"
// Else → "Invalid Credentials"
// Use logical operator + ternary.

let username="admin"
let password="123"

let user=(username ==="admin" && password === "1234")
user ? console.log("Login Success"):
console.log("Invalid Credentials");

//output:
//Invalid Credentials because password is incorrect

// RT-2: Salary Bonus System
// If employee salary > 50000 AND experience > 3 years
// → Eligible for bonus
// Else → Not eligible
let salary= 60000;
let experience= 4;

if(salary > 50000 && experience > 3){
    console.log("Eligible for bonus");
    
}else{
    console.log("Not eligible");
    
}

// RT-3: Shopping Discount
// If cart amount:
// >= 5000 → 20% discount
// >= 2000 → 10% discount
// < 2000 → No discount
// Use if-else if.

let amount = prompt("Enter your amount")
if(amount >= 5000){
    console.log("20% discount");
    
}else if (amount >= 2000){
    console.log("10% discount");
    
}else if(amount <2000){
    console.log("No discount");
    
}

// RT-4: Even/Odd Counter
// Count how many even numbers between 1 to 50.
let count= 0;
for (let i=1; i <=50;i++){
    if(i%2===0){
        count ++;
    }
}
console.log("Number of even numbers between 1 to 50:", count);


// RT-5: Dynamic Greeting System
// If hour between:
// 1–6 → Good Morning
// 7–12 → Morning
// 13–16 → Good Afternoon
// 17–19 → Good Evening
// Else → Good Night

let hour=prompt("Enter time 1 t0 24")
if(hour >=1 && hour <=6){
    console.log("Good Morning");
    
}else if(hour >=7 && hour <=12){
    console.log("Morning");
    
}else if(hour >=13 && hour <=16){
    console.log("Good Afternoon");
    
}else if(hour >=17 && hour <=19){
    console.log("Good Evening");
    
}else{
    console.log("Good Night");
    
}