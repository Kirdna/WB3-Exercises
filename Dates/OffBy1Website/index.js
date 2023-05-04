"use strict";

console.log("index started")
let dateEnter = document.getElementById("dateEnter")
let answer = document.getElementById("answer");

const calculateBtn = document.getElementById("calculateBtn");

window.onload = init;

function init(){
    calculateBtn.onclick = onCalculateBtnClicked;
    console.log("init")
}

function onCalculateBtnClicked(){
    console.log("Btn Clicked")
    let userDate = new Date(dateEnter.value);
    answer.innerHTML = (userDate.toUTCString());
    console.log(userDate);
}
