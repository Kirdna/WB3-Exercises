"use strict";
console.log("This is the Social Security Tax:");
//Get social security tax
function getSocSecTax(grossPay) {
    const taxRate = 0.062;
    let getSocSecTax = grossPay * taxRate;

    return getSocSecTax.toFixed(2);
}
console.log("$" + getSocSecTax(50000));
console.log("$" + getSocSecTax(500));
console.log("$" + getSocSecTax(100));
getSocSecTax()

//get Medicare Tax

console.log("This is Medicare Tax:");
getMedicareTax()


function getMedicareTax(grossPay) {
    const medicareTaxRate = 0.0145;
    const medicareTax = grossPay * medicareTaxRate;
    
    return medicareTax.toFixed(2);
}

console.log("$" + getMedicareTax(50000));
console.log("$" + getMedicareTax(30000));
console.log("$" + getMedicareTax(10000));
console.log("$" + getMedicareTax(5000));

console.log("This is Federal Tax:")

// get federal tax

getFederalTax()
function getFederalTax(grossPay, code) {
    let taxRate;
    if (code == 0) {     
        taxRate = 0.23;
    }
    else if (code == 1) { 
        taxRate = 0.21;
    }
    else if (code == 2) {
        taxRate = 0.195;
    }
    else if (code == 3) {           
        taxRate = 0.185;
    }

    else if (code >= 4) {         //Greater or equal to 4
        taxRate = 0.18 - ((code - 4) * 0.005)
    }
    let result = taxRate * grossPay;
    return result.toFixed(2);
}
console.log("$ " + getFederalTax(1000, 0));
console.log("$ " + getFederalTax(1000, 1));
console.log("$ " + getFederalTax(1000, 2));
console.log("$ " + getFederalTax(1000, 3));
console.log("$ " + getFederalTax(1000, 4));
console.log("$ " + getFederalTax(1000, 5));
console.log("$ " + getFederalTax(1000, 6));
console.log("$ " + getFederalTax(1000, 7));
console.log("$ " + getFederalTax(1000, 8));