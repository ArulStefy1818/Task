//1. Welcome Program
// Ask user name using Prompt().
let UserName= prompt("Enter the User Name")
console.log(UserName);


//Show alert: Hi, Welcome to JavaScript Training.
let message= alert("Hi, Wlecome to JavaScript Training")
console.log(message);


//Print the same message in console
console.log("Hi, Welcome to JavaScript Training");

// 2. Console Methods Practice
// Print 500 using console.log(), console.warn(), console.error().
console.log(500);
console.warn(500);
console.error(500);

// Use console.clear().
console.clear();
// 3. Data Type Identification
// Create string, number, boolean, undefined, and null variables.
// - Print value and type using typeof.
// String
let Name="Kalai";
console.log(Name);
console.log(typeof(Name)); 

// Number
let number=818; 
console.log(typeof(number),number);

// Boolean
let boolean=false;
console.log(typeof(boolean),boolean); 

// Undefined
let c;
console.log(c);
console.log(typeof(c));

// Null variables
let dd= prompt();
console.log(dd);
console.log(typeof(dd));

// 4. Arithmetic Operations
// Use let a = 20 and let b = 5.
// Perform +, -, *, /, %, ** and print results.
let a=20;
let b=5;
console.log("Add:",a+b); // 25
console.log("Sub:",a-b); // 15
console.log("Mul:",a*b); // 100
console.log("Div:",a/b); // 4
console.log("Mod:",a%b); // 0
console.log("Exp:",a**b); // 3200000

// 5. Increment & Decrement
// Demonstrate pre-increment, post-increment, pre-decrement, post-decrement.
// Print variables clearly.
// Post-increment
let num1= 2;
let num7= num1++;
console.log("Num1:",num1);
console.log("Num7:",num7)

// Pre-increment
let num2= 2;
num2= ++num2;
console.log("Num2:",num2);

// Post-decrement
let num3= 4;
let num4= num3--;
console.log("Num3:",num3);
console.log("Num4:",num4);


// Pre-decrement
let num5= 6;
let num6= --num5;
console.log("Num5:",num5);
console.log("Num6:",num6);

// 6. Assignment Operators
// Use let num = 10.
// Perform +=, -=, *=, /=, %= and print results.
let num= 10;
num +=1;
num -=2;
num *=3;
num /=4;
num %=5;
console.log("+= value:",num);
console.log("-= value:",num);
console.log("*= value:",num);
console.log("/= value:",num);
console.log("%=value:",num);

// 7. Array Access
// Create array ['HTML','CSS','JavaScript','React'].
// Print first element, second element, last element (using length), and total elements.
let Frontend=['HTML','CSS','JavaScript','React']
console.log("first element:",Frontend[0]);
console.log("Second element:", Frontend[1]);
console.log("Last element:",Frontend[Frontend.length-1]);
console.log("Total element:",Frontend.length);

// 8. Modify Array
// - Add one element at end.
// - Remove last element.
// - Print updated array.
Frontend.push("Angular");
console.log("Add Element:",Frontend);

Frontend.pop();
console.log("Remove Last Element:",Frontend);
console.log("Updated Array:",Frontend);

// 9. Student Object
// - Create object with name, age, course, city.
// - Print values using dot notation.
let Student={
    Name:"kalai",
    age:25,
    course: "Frontend Developer",
    city:"Chennai"
}

console.log("Student Name:",(Student.Name));
console.log("Student Age:",(Student.age));
console.log("Student Course:",(Student.course));
console.log("Student City:",(Student.city));

// 10. Nested Object Practice
// - Create company object with nested trainer object.
// - Print company name, trainer name, trainer subject.
let company={
    company_name:"Stackly",
    trainer:{
        name:"Naveen",
        subject:"JavaScript"
    }
};
console.log("Company Name:",company.company_name);
console.log("Trainer Name:",company.trainer.name);
console.log("Trainer Subject:",company.trainer.subject);





