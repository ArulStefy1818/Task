// SECTION 1 – Real-Time Function Logic

// 1. Payroll System:
// Create calculateSalary(basicSalary, bonusPercentage)
// - Calculate bonus
// - Deduct 5% tax
// - Return final salary
// - Print full salary breakdown

function calculateSalary(basicSalary,bonusPercentage){
    let bonus=(basicSalary * bonusPercentage) / 100;
    
    let grossSalary = basicSalary + bonus;
    
    let tax = grossSalary * 0.05;

    let finalSalary = grossSalary - tax;

    console.log("------- Salary Breakdown -------");
    console.log("Basic Salary:" + basicSalary);
    console.log("Bonus("+ bonusPercentage + "%):",bonus);
    console.log("Gross Salary:" + grossSalary);
    console.log("Tax Deduction (5%):" + tax);
    console.log("Final Salary:" + finalSalary);
    console.log("--------------------------------");

    return finalSalary;    

}
calculateSalary(5000, 10)

//Output:

// ------- Salary Breakdown -------
// Basic Salary:5000
// Bonus(10%): 500
// Gross Salary:5500
// Tas Deduction (5%):275
// Final Salary:5225
// --------------------------------


// 2. Student Result System:
// Create generateResult(name, marksArray)
// - Calculate total
// - Calculate average
// - Decide Grade (A/B/C/Fail)
// - Return result object

function generateResult(name, markArray){

    let total= markArray. reduce((sum,mark)=> sum + mark, 0);
    let average = total / markArray.length;

    let grade;
    if(average >= 80){
        grade="A";

    }else if( average >=60){
        grade="B";

    }else if(average >=40){
        grade="c";

    }else{
        grade="Fail";
    }

    let result={
        name: name,
        total: total,
        average: average.toFixed(2),
        grade: grade
    }

    console.log("Name:", result.name);
    console.log("Mark:", markArray.join(", "));
    console.log("Total:", result.total);
    console.log("Average:", result.average);
    console.log("Grade:", result.grade);

    return result;
    
}

generateResult("Kalai",[80,90,95,85,70])

//Output:
// Name: Kalai
// Mark: 80, 90, 95, 85, 70
// Total: 420
// Average: 84.00
// Grade: A


// SECTION 2 – Scope & Hoisting (Debugging)
// 3. Debug This Code:
// function demo(){
// if(true){
// var a = 10;
// let b = 20;
// }
// console.log(a);
// console.log(b);
// }
// Questions:
// - What will happen?

function demo(){
    if(true){
        var a = 10;
        let b = 20;
}
console.log(a);
console.log(b);
}
demo();

//Output:
// 10
// ReferenceError: b is not defined
// - Why?
// let b=20
// let is block-scoped

// Fix it properly.

function demo(){
    if(true){
        var a = 10;
        let b = 20;
        console.log(a);
        console.log(b);
}

}
demo();



// 4. Hoisting Analysis:
// console.log(x);
// var x = 100;
// console.log(y);
// let y = 200;
// Predict output and explain.

// console.log(x);
// var x = 100;
// console.log(y);
// let y = 200;


//ReferenceError: Cannot access 'y' before initialization
// y is hosting but not initialized

// SECTION 3 – Callback & Higher Order (Industry Simulation)

// 5. Order Processing System:
// Create processOrder(orderId, callback)
// - Print "Order Processed"
// - Call generateInvoice(orderId)

function generateInvoice(orderId){
    console.log(`Invoice generated for Order ID: ${orderId}`);
    
}
function processOrder(orderId, callback){
    console.log("Order Processed");
    callback(orderId)
    
}
processOrder(101, generateInvoice)

//Output:
// Order Processed
// Invoice generated for Order ID: 101

// 6. Bank Transaction System:
// Create transaction(amount, type, callback)
// - If deposit → add
// - If withdraw → subtract
// - Call sendSMS()

let balance = 1000;
function sendSMS(message){
    console.log(message);
    
}

function transaction(amount, type, callback){
    if (type === "deposit"){
        balance += amount;
        callback(`Deposit Successful. Amount: ${amount}. Balance: ${balance}`)
    }else if (type === "withdraw"){
        balance -= amount;
        callback(`Withdraw Successful. Amount:${amount}. Banlace: ${balance} `)
    }else{
        callback("Invalid transaction type")
    }

}

transaction(500,"deposit", sendSMS);
transaction(200,"withdraw", sendSMS);

// SECTION 4 – Currying (E-Commerce)

// 7. Dynamic Price Builder:
// Create priceBuilder(basePrice)(discount)(tax)
// Return final price
// Example: priceBuilder(2000)(15)(18)

function priceBuilder(basePrice){
    return function(discount){
        return function(tax){
            let priceDiscount = basePrice - (basePrice * discount / 100);
            let finalPrice = priceDiscount + (priceDiscount * tax /100);
            return finalPrice;
            

        }
    }
}

console.log(priceBuilder(2000)(15)(18))

// SECTION 5 – IIFE (Security + Encapsulation)

// 8. Secure Company Module:
// - Store private variable companyCode
// - Expose getCompanyStatus()
// - companyCode should not be directly accessible

const companyModule= (function (){
    let companyCode= "0818";
    function getCompanyStatus(){
        return `company is Active.`;
    }
    return{
        getCompanyStatus
    }
})();
console.log(companyModule.getCompanyStatus());

// SECTION 6 – Generator (Advanced Logic)

// 9. Unique Order ID Generator:
// Generate ORD1001, ORD1002, ORD1003, etc. 

function * IdGenerator(){
    let id=101;
    while(true){
        yield `ORDER ${id}`;
        id++;
    }
}

const gen = IdGenerator();

console.log(gen.next().value);
console.log(gen.next().value);

// 10. Coupon Spin System:
// Yield:
// - 10% OFF
// - 20% OFF
// - 50% OFF
// - No Luck
// - Jackpot
// Simulate multiple spins.

function * CouponGenerator(){
    yield " you get 10% OFF",
    yield " you get 20% OFF",
    yield " you get 50% OFF",
    yield " No Luck",
    yield " Jackpot"
}

let spin= CouponGenerator()

// console.log(spin.next().value);
// console.log(spin.next().value);
// console.log(spin.next().value);
// console.log(spin.next().value);
// console.log(spin.next().value);

for (let a of spin){
    console.log(a);
    
}

// SECTION 7 – Mini Project (Integrated)

// Mini E-Commerce Flow:
// - addToCart(product, price)
// - calculateTotal()
// - applyDiscount() using currying
// - generateCoupon() using generator
// - processPayment() using callback
// - Hide config using IIFE

const ECommerce = (function(){
    let cart = [];
    let total = 0;

    function addToCart(product, price){
        cart.push({product,price});
        console.log(product, "added to cart");
        
    }

    function calclateTotal(){
        return cart.reduce((sum, item) => sum + item.price,0);
        
        
    }

    function applyDiscount(discount){
        return function(total){
            return total - (total * discount /100);
        };
    }

    function * generateCoupan(){
        yield "10% OFF",
        yield "20% OFF",
        yield "30% OFF",
        yield "40% OFF"
    }

    function processPayment(callback){
        console.log("Processing Payment--");
        callback("payment Successful");
        
    }

    return {
        addToCart,
        calclateTotal,
        applyDiscount,
        generateCoupan,
        processPayment
    };
})();

ECommerce.addToCart("Laptop", 50000);
ECommerce.addToCart("Speaker", 5000);

console.log("Total:", ECommerce.calclateTotal());

let finalPrice = ECommerce.applyDiscount(10)(20);
console.log("Final Price:", finalPrice);

let Coupon= ECommerce.generateCoupan();
console.log("Coupon:", Coupon.next().value);

ECommerce.processPayment(console.log);

// Concept Questions:

// 1. Difference between function declaration & expression?

// Answer:
// Declaration: Use when you want to call the function anywhere in the scope.
// you can call before it defined
// Expression: Use When you want a function as a value
// you cannot call before it defined

// 2. What is higher order function?

// Answer:
// Higher order function takes one or more functions as arguments, or returns a function as its result, or both

// 3. Real-time example of generator?

// Answer:
// Infinite Sequence
// Coupon
// Sensor reading


// 4. Why do we use IIFE?

// Answer:
// Avoid global variable
// Run code immediately
// Avoid conflicts
// Privacy

// 5. Difference between var, let, const?

// Answer;
// Feature            Var                 Let              Const
// Scope              Function Scope      Block-Scope      Block-Scope
// Re-declaration     Allowed             Not Allowed      Not Allowed
// Re-assignment      Allowed             Allowed          Not Allowed
// Hosting            Hoisted(undefined)  Hoisted(TDZ)     Hoisted(TDZ)
//                                        not initialized  not initialized