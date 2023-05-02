"use strict";


function convertCtoF(currentCelsius){
    
    let convertFarenheitTemp = (currentCelsius) * (9/5) + 32;
    console.log(convertFarenheitTemp.toFixed(2))

}

convertCtoF(100);
convertCtoF(45);
convertCtoF(19);
convertCtoF(0);
convertCtoF(-7);
convertCtoF(-40);
