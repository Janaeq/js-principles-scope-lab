// Write your solution in this file!
var customerName = 'bob';

function upperCaseCustomerName() {
    customerName = customerName.toUpperCase();
}

function setBestCustomer() {
    bestCustomer = 'not bob';    
}

function overwriteBestCustomer() {
    bestCustomer = 'maybe bob'
}

const leastFavoriteCustomer = 'currently assigned';
function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = 'something else';
}
// leastFavoriteCustomer and changeLeastFavoriteCustomer(): Now declare a constant (using the const 
    // keyword) in global scope called leastFavoriteCustomer; be sure to assign it some initial value. 
    // Finally, write a function called changeLeastFavoriteCustomer() that attempts to change that 
    // constant - notice what JavaScript does when you try to change the constant.