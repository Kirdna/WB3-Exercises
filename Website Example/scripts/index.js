"use strict";
console.log("index.js loading")

const myButton = document.getElementById("myButton");
const output = document.getElementById("output");

window.onload = function () {
    // do the work you want done when the form is complete here...
    console.log("inside init");

    myButton.onclick = doSomething;
}

function doSomething() {

    let selectedOption = document.querySelector("input[name='policy']:checked");
    
    let basePremium = 0;
    if (selectedOption.value == "auto") {
        basePremium = 175.00;
    }
    else if (selectedOption.value == "home") {
        basePremium = 395.00;
    }
    else {
        basePremium = 225.00;
    }

    output.value = `You have selected ${selectedOption.value} insurance, the cost will be ${basePremium}.  Thank you for your business!`;
}
