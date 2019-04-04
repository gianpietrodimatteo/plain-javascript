// Its javascript tiem!

var someVar, someOtherVar;
var numeroTres = 3;

var betchengues;

var fontSize = 100;
var fontSizeText = 100;
var lastValLength = 0;

//alert('I myself find alerts very annoying!')

// Example function
function myFunction(p1, p2) {
  return p1 * p2;   // The function returns the product of p1 and p2
}

function changeDisplay(id, value) {
  document.getElementById(id).style.display = value;
}

function changeInnerHtmlOfBetchengue() {
  document.getElementById("BETCHENGUE").innerHTML = betchengues;
}

function changeFontSize() {
  document.getElementById("antman").style.fontSize = value;
}

function increaseFontSize() {
  //var str = document.getElementById("antman").style.fontSize;
  //var number = document.getElementById("antman").style.fontSize.substring(0, str.length - 1).valueOf();
  fontSize += 10;
  document.getElementById("antman").style.fontSize = fontSize.toString() + "%";
}

function decreaseFontSize() {
  fontSize -= 10;
  document.getElementById("antman").style.fontSize = fontSize.toString() + "%";
}

function formChanged() {
  betchengues = document.getElementsByName("firstname")[0].value;
}

function formChangedLIKELEBLEU() {
  var val = document.getElementsByName("biroio")[0].value;
  var length = val.length;
  var fontSize = this.fontSizeText;
  fontSize = 100*(1 - length) / length;
  // if (this.lastValLength < length)
  //   thisfontSizeText += 10;
  // else
  //   fontSizeText -= 10;
  document.getElementById("LISPECTOR").style.fontSize = fontSize.toString() + "%";
  document.getElementById("count").innerHTML = "You have typed: " + val.length;
  document.getElementById("LISPECTOR").innerHTML = val;
  // this.lastValLength = length;
}

// function textLength(value){gdsdgsadgasdgasdgadsgasdg
//   var maxLength = 144;
//   if(value.length > maxLength) return false;
//   return true;
// }

// document.getElementById("count").onkeyup = function(){
  //     if(!textLength(this.value)) alert('text is too long!');
  // }