// Task 1: Button Click Event
let ClickBtn = document.getElementById("ClickBtn");

ClickBtn.addEventListener("click", ()=>{
    alert("Button Clicked Successfully");
});


// Task 2: Change Text on Click
let ChangeTextBtn = document.getElementById("ChangeTextBtn");
let textPara = document.getElementById("textPara");

ChangeTextBtn.addEventListener("click", function () {
textPara.innerHTML = "Text Updated Successfully"
    
});


// Task 3: Background Color Change
let bgBtn = document.getElementById("bgBtn")

bgBtn.addEventListener("click", function (){
    document.body.style.backgroundColor = "lightgray";
});


// Task 4: Input Event (Live Typing)
let inputField = document.getElementById("inputField");
let displayText = document.getElementById("displayText");

inputField.addEventListener("input", function() {
    displayText.textContent = inputField.value;
})


// Task 5: Mouse Events
let box = document.getElementById("box")

box.addEventListener("mouseenter", ()=>{
    box.style.backgroundColor = "red";
})


// Task 6: Double Click Event
let doubleClickBtn = document.getElementById("doubleClickBtn");

doubleClickBtn.addEventListener("dblclick", ()=>{
    alert("Double Click Detected")
})