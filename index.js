// Write your solution in this file!
// Declare a global variable customerName and assign it the value 'bob'
var customerName = 'bob';

// Function to uppercase the global customerName variable
function upperCaseCustomerName() {
    customerName = customerName.toUpperCase();
}

// Function that declares a global variable bestCustomer and assigns it 'not bob'
function setBestCustomer() {
    bestCustomer = 'not bob'; // Declaring without `var`, `let`, or `const` makes it global
}

// Function that overwrites the global bestCustomer variable
function overwriteBestCustomer() {
    bestCustomer = 'maybe bob';
}

// Declare a constant in global scope
const leastFavoriteCustomer = 'someone';

// Function that attempts to change the constant leastFavoriteCustomer
function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = 'someone else'; // This will cause an error because constants cannot be reassigned
}
