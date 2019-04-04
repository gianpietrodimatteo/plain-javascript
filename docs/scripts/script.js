// Its javascript tiem!

var someVar, someOtherVar;
var numeroTres=3;

var betchengues;

var fontSize = 100;

//alert('I myself find alerts very annoying!')

// Example function
function myFunction(p1, p2) {
  return p1 * p2;   // The function returns the product of p1 and p2
}

function changeDisplay(id, value) {
	document.getElementById(id).style.display=value;
}

function changeInnerHtmlOfBetchengue() {
  document.getElementById("BETCHENGUE").innerHTML=betchengues;
}

function changeFontSize() {
  document.getElementById("antman").style.fontSize=value;
}

function increaseFontSize() {
  //var str = document.getElementById("antman").style.fontSize;
  //var number = document.getElementById("antman").style.fontSize.substring(0, str.length - 1).valueOf();
  fontSize+=10;
  document.getElementById("antman").style.fontSize = fontSize.toString() + "%";
}

function decreaseFontSize() {
    fontSize-=10;
  document.getElementById("antman").style.fontSize = fontSize.toString() + "%";
}

function formChanged() {
    betchengues = document.getElementsByName("firstname")[0].value;
}