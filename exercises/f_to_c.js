"use strict";


function convertFtoC(currentFahrenheit){
    
    let convertCelsiusTemp = (currentFahrenheit-32) * (5/9);
    console.log(convertCelsiusTemp.toFixed(2))

}

convertFtoC(92);
convertFtoC(212);
convertFtoC(90);
convertFtoC(72);
convertFtoC(32);
convertFtoC(0);
convertFtoC(-40);