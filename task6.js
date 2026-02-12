// SECTION 1 – Array Higher Order Methods Tasks

// Task 1 – forEach() Practice
// let subjects = ["Maths", "Science", "English", "History"]
// Requirements:
// • Use forEach()
// • Print Subject 1: Maths ... Subject 4: History
// • Store result in a variable
// • Question: Why does forEach() return undefined?

let subjects = ["Maths" , "Science" , "English" , "History"]
let result ="";
subjects.forEach(function(subject, index) {
    result += `subject ${index +1}:${subject}\n`;
     
});

console.log(result);

let test= subjects.forEach(subject => subject.toUpperCase());
console.log(test); // undefined

// forEach( ) does not return anything- it just runs the function.
// it does not create or return a new array.

// Task 2 – map() Practice

// let prices = [100, 200, 300, 400]
// Requirements:
// • Use map()
// • Add 10% GST
// • Return new array
// • Expected Output: [110, 220, 330, 440]

let prices = [100,200,300,400]
let newPrices = prices.map(price => price * 1.10);

console.log(newPrices);

// Task 3 – filter() Practice
// let students = [
// { name: "A", marks: 45 },
// { name: "B", marks: 75 },
// { name: "C", marks: 35 },
// { name: "D", marks: 85 }
// ]
// Requirements:
// • Use filter()
// • Get students scoring above 50
// • Print filtered array

let students = [
{ name: "A", marks: 45 },
{ name: "B", marks: 75 },
{ name: "C", marks: 35 },
{ name: "D", marks: 85 }
]

let studentScore =  students.filter((c,i,t)=>{
    return c.marks> 50 
});
console.log(studentScore);

// Task 4 – find() Practice
// Use same students array
// Requirements:
// • Use find()
// • Find first student scoring above 50
// • Print that object

let firstStudent = students.find((c,i,t)=>{
    return c.marks > 50
});
console.log(firstStudent);

// • Question: Difference between filter() and find()?

// filter()                              find()
// Returns all matching elements         Returns only the first matching element
// Continues checkign the entire array   Stops once it finds the first match
// use fileter() when we want multiple   use find() when you want just the first match
// result

// Task 5 – reduce() Practice
// let cart = [
// { item: "Shirt", price: 1000 },
// { item: "Shoes", price: 2000 },
// { item: "Watch", price: 3000 }
// ]
// Requirements:
// • Use reduce()
// • Calculate total price
// • Bonus: Add 5% tax inside reduce()

let cart = [
{ item: "Shirt", price: 1000 },
{ item: "Shoes", price: 2000 },
{ item: "Watch", price: 3000 }
]

let totalPrice = cart.reduce((sum, product)=>{
    return sum + product. price
},0)

console.log(totalPrice);

let Tax = cart.reduce((sum, product)=>{
    return sum + product.price * 1.05;
},0)

console.log("Total price with 5% Tax:",Tax);



// Task 6 – some() Practice

// let numbers = [1, 3, 5, 7, 8]
// Requirement:
// • Check if at least one number is even
// • Output: true

let numbers = [1,3,5,7,8]
let even = numbers. some((num)=>{
    return num % 2==0;
})
console.log(even); // true

// Task 7 – every() Practice
// let ages = [22, 25, 19, 30]
// Requirement:
// • Check if all ages are above 18

let ages = [22, 25, 19, 30]
let check = ages. every((age)=>{
    return age > 18;
})
console.log(check); //true

// Task 8 – sort() Practice
// let salaries = [50000, 10000, 70000, 30000]
// Requirements:
// • Sort ascending
// • Sort descending

let salaries = [50000, 10000, 70000, 30000]
let ascending = salaries.sort((a,b)=>{
    return a-b;
})
console.log("Ascending Order:",ascending);

let descending = salaries.sort((a,b)=>{
    return b-a;
})
console.log("Descending Order:",descending);

// • Explain why normal sort() fails for numbers
// It converts elements to strings
// compares them dictionary order
// Always use compare function for numbers


// Task 9 – Array Conversion Methods

// let arr = [10, 20, 30, 40]
// Requirements:
// • Convert using toString()
// • Convert using join("-")
// • Expected Output: 10-20-30-40

let arr = [10, 20, 30, 40]
let string = arr. toString()

console.log("Convert using toString:",string);

let joinArr= arr.join("-")
console.log("Convert using join:",joinArr);

// SECTION 2 – String Methods Tasks
// Task 10 – charAt() & charCodeAt()
// let word = "Developer"
// Requirements:
// • Get character at index 4
// • Get ASCII value of character at index 4

let word = "Developer"
let index = word.charAt(4)
console.log("Character at index 4:",index);

let value = word.charCodeAt(4)
console.log("ASCII value of character at index 4:",value);


// Task 11 – slice()

// let company = "StacklyCompany"
// Extract: Company

let company = "StacklyCompany"
let sliceVal = company.slice(7,14)
console.log(sliceVal);

// Task 12 – Case Conversion

// let userInput = "javaScript"
// • Convert to uppercase
// • Convert to lowercase

let userInput = "javaScript"
let Upper = userInput. toUpperCase()
console.log("UpperCase:",Upper);

let Lower = userInput. toLowerCase()
console.log("LowerCase:",Lower);

// Task 13 – trim()
// let email = " naveen@gmail.com "
// Remove unwanted spaces

let email = " naveen@gmail.com "
let trimVal= email.trim()
console.log(trimVal);

let trimFirst = email. trimStart()
console.log(trimFirst);

let trimEnd = email. trimEnd()
console.log(trimEnd);

// Task 14 – includes()
// let message = "Welcome to JavaScript Training"
// Check if "JavaScript" exists

let message = "Welcome to JavaScript Training"
let str1 = message.includes("JavaScript")
console.log(str1); //true


// Task 15 – split()
// let movie = "spider-man-no-way-home"
// Convert into array

let movie = "spider-man-no-way-home";
let str2 = movie.split("-");
console.log(str2);


// Task 16 – indexOf() & lastIndexOf()
// let text = "programming"
// • Find first index of 'm'
// • Find last index of 'm'

let text = "programming";
let str3 = text.indexOf("m")
console.log("First index of 'm':",str3);

let str4 = text.lastIndexOf("m")
console.log("Last indes of 'm':",str4);


// Task 17 – replace()
// let tech = "I love python"
// Replace python with javascript

let tech = "I love python";
let str5 = tech. replace("python","javascript")
console.log(str5);

// Task 18 – startsWith() & endsWith()
// let filename = "report.pdf"
// • Check if starts with "report"
// • Check if ends with ".pdf"

let filename = "report.pdf"
let startVal = filename. startsWith("report")
let endval = filename. endsWith(".pdf")
console.log(startVal);
console.log(endval);


// Task 19 – repeat()
// let star = "*"
// Print 10 stars using repeat()

let star = "*";
let repeatVal = star.repeat(10);
console.log(repeatVal);

// FINAL TEAM CHALLENGE – Employee Report System
// let employees = [
// { name: "Naveen", salary: 50000 },
// { name: "Arun", salary: 30000 },
// { name: "Kiran", salary: 70000 }
// ]
// Requirements:
// • Convert names to uppercase using map()
// • Filter salary > 40000
// • Find first salary > 60000
// • Calculate total salary using reduce()
// • Sort salaries descending

let employees = [
{ name: "Naveen", salary: 50000 },
{ name: "Arun", salary: 30000 },
{ name: "Kiran", salary: 70000 }
]

let upper = employees . map(emp =>({...emp, name:emp.name.toUpperCase()}));
console.log(upper);


let filterVal = employees . filter((num)=>{
    return num. salary > 40000 
});
console.log(filterVal);

let findVal = employees . find ((num)=>{
    return num . salary > 60000
})
console.log(findVal);

let totaSalary = employees. reduce((num,c)=>{
    return num + c.salary;
},0)

console.log("Total Salary:",totaSalary);

let Des = employees . sort((a,b)=>{
    return b.salary - a.salary;
})

console.log("Salary Descending:",Des);


