var customerName = 'bob';
const leastFavoritCustomer = 'jerry'
function upperCaseCustomerName(){
    customerName = customerName.toUpperCase();
}
function setBestCustomer(){
    window.bestCustomer = 'not bob';
}

function overwriteBestCustomer(){
    window.bestCustomer = 'maybe bob';
}
function changeLeastFavoriteCustomer(){
    leastFavoritCustomer = 'bob';
}