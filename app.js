//Excersie 1//

var myNumber = 7;

var userGuess = window.prompt("guess my number?");
if (userGuess < myNumber) {
  console.log("Too low");
} else if (userGuess > myNumber) {
  console.log("Too Low");
} else {
  console.log("You got it!");
}

//Excerise 2 Use Swuitch

var birthMonth = window.prompt("what is your birthmonth?");

//creating the switch
switch (birthMonth) {
  case "January":
  case "Feruary":
  case "March":
    console.log("you were born in Q1");
    break;
  case "April":
  case "May":
  case "June":
    console.log("You were born in Q2");
    break;
  case "July":
  case "August":
  case "September":
    console.log("You were born in Q3");
    break;
  case "October":
  case "November":
  case "December":
    console.log("You were born in Q4");
}

//Excersise 3
let typeId = "01";
let colorId = "PU";
let sizeId = "L";

let type = "";
let color = "";
let size = "";

switch (typeId) {
  case "01":
    type = "Tank top";
    break;
  case "02":
    type = "T-Shirt";
    break;
  case "03":
    type = "Long Sleeve";
    break;
  case "04":
    type == "Sweat Shirt";
    break;
  case "05":
   default:
    type = "Other";
}

//Colors
switch (colorId) {
  case "BL":
    color = "Black";
    break;
  case "BU":
    color = "Blue";
    break;
  case "RD":
    color = "Red";
    break;
  case "PU":
    color = "Purple";
    break;
  default:
    color = "White";
  
}

switch (sizeId) {
  case "S":
    size = "Small";
    break;
  case "M":
    size = "Medium";
    break;
  case "L":
    size = "Large";
    break;
  case "XL":
    break;
  case "XL":
    size = "Extra Large";
    break;
  default: 
    size = "One Size Fits All";
}

console.log(`Product: ${size} ${color} ${type}`);
