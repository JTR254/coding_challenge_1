//Task 1

let employeeName = "Michael Wu"; //employee's name
const employeeID = 1453; //employee's ID number
var isActive = true; //employee's current status
console.log(typeof employeeName); 
console.log(typeof employeeID); 
console.log(typeof isActive); 

//Task 2

let productName = "Salt Shaker"; //name of the product
const productPrice = 9.00; //price of the product
var isAvailable = true; //product availability status
console.log(typeof productName);
console.log(typeof productPrice);
console.log(typeof isAvailable);

//Task 3

let accountBalance = 2500;
console.log ("Beginning Account Balance", accountBalance);
accountBalance -= 500; // decreases account balance by 500
console.log ("Ending Account Balance", accountBalance);

let discountRate = .15; // 15% discount
let discountAmount = productPrice * discountRate; // 9.00 x .15 = 1.35
let finalValue = productPrice - discountAmount; // 9.00 - 1.35

console.log ("Discount Rate", discountRate);
console.log ("Discount Amount", discountAmount);
console.log ("Final Price After Discount", finalValue);

//Task 4

let customerName = "James Young"; //name of the customer
let greeting = `Welcome ${customerName}!`; //welcome's customer
console.log (greeting)


