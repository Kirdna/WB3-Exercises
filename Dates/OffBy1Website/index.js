"use strict";

console.log("index started");
let calandar = document.getElementById("calandar");
let anotherAnswer = document.getElementById("anotherAnswer");


const calculateBtn = document.getElementById("calculateBtn");

window.onload = init;

function init(){
    calculateBtn.onclick = onCalculateBtnClicked;
    console.log("init")
}

function onCalculateBtnClicked(){
    console.log("Btn Clicked")

    let userDate = new Date(calandar.value);
    anotherAnswer.innerHTML = (userDate.toString());

    console.log(userDate);
}
