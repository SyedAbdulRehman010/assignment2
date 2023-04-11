//question no 1

function outerFunction(num1) {
  function innerFunction(num2) {
    console.log(num1 + num2);
  }
  return innerFunction;
}

var innerFunctValue = outerFunction(2);
innerFunctValue(5);

//QUESTION 2
const arr = ["cat", "dog", "loin", "hen", "fox", "tiger"];
let val = "loin";
function repeatfunc(n) {
  if (n === 0) {
    console.log("loop is completed");
  } else {
    let valmatch = arr[n];

    if (valmatch === val) {
      console.log(true);
    } else {
      console.log(false);
    }
    repeatfunc(n - 1);
  }
}

repeatfunc(arr.length + 1);

//question 3
var userInput = prompt("enter your text");
const para = document.createElement("p");
para.innerText = userInput;
document.body.appendChild(para);

//question 4
var userInput = prompt("enter your text");
var ul = document.getElementById("ul");
var lival = document.createElement("li");
lival.innerText = userInput;
ul.appendChild(lival);

// question 5

function chngBkCol(itm, col) {
  var itm2 = document.querySelector(itm);
  itm2.style.backgroundColor = col;
}
chngBkCol("p", "blue");

// question 6
var obj = { name: "ali", age: "23", education: "Graduate" };
var strKey = "objName";
var objVal = obj;
function saveLocalStorage(a, b) {
  localStorage.setItem(a, JSON.stringify(b));
}
saveLocalStorage(strKey, objVal);

// question 7

function getObjval(a) {
  var getObj = localStorage.getItem(a);
  var obj2 = JSON.parse(getObj);
  console.log(obj2);
}
getObjval("objName");

// question 8

function createObj(objName, name, age, education) {
  var obj = objName;
  obj = { name: name, age: age, education: education };
  console.log(obj);
  localStorage.setItem(objName, JSON.stringify(obj));
  var objRetrieve = localStorage.getItem(objName);
  var objRetrieve2 = JSON.parse(objRetrieve);
  console.log(objRetrieve2);
}
createObj("objName", "abc", 45, "bcom");
