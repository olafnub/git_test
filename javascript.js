let message="Hello!"; //store the string "Hello!" in the variable named message

// alert(message);

let user='John';
let age=25;
let messages='hello';

// let user='john', age=25, messages='hello';

let hello="Hello World!";
let replacement = hello;
// alert(replacement);

let $ = 3;
let _ = 1;

// alert($ + _);

const myBirthday = '12.05.2002';

const COLOR_RED = "#F00";
const COLOR_GREEN = "0F0";
const COLOR_BLUE = "00F";
const COLOR_ORANGE = "#FF7F00";

let color = COLOR_ORANGE;
// alert(color);

var admin;
var name = "john";
admin = name;
// alert(admin);

let planetEarth = "earth";
let currentUser = "user";

const myInt = 5;
const myFloat = 6.77721312;
// myInt;
// myFloat;

typeof myInt;
typeof myFloat;

// console.log(myFloat.toFixed(0));

let myNumber = 74;
while (myNumber < 100) {
myNumber += 3;
}
// console.log(
//     myNumber
// );

let myString = "74";
myString= Number(myString);
// console.log(myString + 2);

let NUMBER_FOUR = 4;
let NUMBER_FIFTY = 50;
// console.log(11%5);
// console.log(NUMBER_FIFTY!==50*3);
let NUMBER_FIVE = 5;

// let answerKey = NUMBER_FIFTY = NUMBER_FIVE * 4;
// console.log(answerKey);

let numberOne, numberTwo, numberThree;
numberTwo = 5;


numberOne = numberTwo = numberThree = 2+2;
// console.log(numberOne + " " + numberTwo);

let q = 2;
q = q + 5;
q = q + 5;

// console.log(q);

let multiplyEqualsTwo = 2;
// multiplyEqualsTwo *= 2+5;

// console.log(multiplyEqualsTwo);
// ++multiplyEqualsTwo;

// console.log(multiplyEqualsTwo);

let counter = ++multiplyEqualsTwo;

// console.log(counter);

counter = 3 * ++multiplyEqualsTwo;
// alert(counter);
counter++;

for (a=1, b=3, c=a+b; a<10; a++) {
    // console.log(a);
}

let alphabet = 1;

let denominator = ++alphabet;

// console.log(alphabet + " " + denominator);


// 1. "10"
// 2.  1
// 3.  false , NaN (true + false = 1)
// 4.  2
// 5.  6
// 6.  9px
// 7.  $45
// 8.  2
// 9.  NaN
// 10. -9 5
// 11. NaN -14
// 12. null
// 13. undefined
// 14. NaN

// alert(\t);

// let zimbwawe = prompt("First Number", 1);
// let charqiti = prompt("Second Number", 2);

// alert(+zimbwawe + +charqiti);

let andrew = 10;
// console.log(andrew);

let beReal = 7 * andrew;
// console.log(beReal);

// console.log(19) / 77);

let max = 57;
let actual = max - 17;
let percentage = actual / max;

var newMessage = "42";
// console.log(newMessage-2);

if (true) {
    var testVariable = true;

}
// alert(testVariable);

for (var iAn = 0; iAn <= 10;) {
    var one = 1;
    iAn++;
}
// console.log(one);
// console.log(iAn + " ");

for (let iBn = 0; iBn <= 10; iBn++) {
    // console.log(iBn);
}

function sayHi() {
    if(true) {
        var phrase = "Hello";
    }
    alert(phrase);
}

// sayHi();
// alert(phrase); doesn't work because function (sayHi() wasn't called for)

var characterName = "Peter";
var characterName = "John";

// alert(characterName);

// let playName = "Peter";
// let playName = "john";

// alert(playName);


function sayHi() {
   var phrase;
   alert(phrase);
   phrase = "Hello";
}
// sayHi();

// (function() {
    
//     var importantMessage = "Hello World";

//     alert(importantMessage);
// })();

// (function() {
// alert("Parathesis around the function");
// })();

// (function() {
//     alert("Paranthesis around the whole thing");
// }());

// !function() {
//     alert("Bitwise NOT operator, starts the function");
// }();

// +function() {
//     alert("Unary plus starts the expression")
// }();

// (function sayHello() {
//     alert("Say Hello");
// })();

// alert(+true);

let noError = 12;
noError = 12.25;

// alert(NaN ** 0);
let tumBug = "Jumbug";

// alert(`Name is, ${tumBug}`);

let nameAge = true;
let ageName = false;

nameAge = "anthony";
ageName = "Joe";

let isGreater = 4>1;

let valueNull = null;
let unAssigned;

// document.add("bob").innerHTML=valueNull;

// let alope = ;

// alert(typeof alope);

const bigMouth = 'I\'ve got no right to take my place...';
// console.log(bigMouth);

// Concatentation, back ticks `${const}`
const birthName = "Chris";
const greeting = `Hello, ${birthName}`;
const greetingTwo = "Hello! " + birthName;
const greetingTogether = `${greeting} ${greetingTwo}`;
const numberTesting = NUMBER_FIFTY;
const numberTestingT = NUMBER_FOUR;

const songName = "Coast";
const myRating = 9;
const maxRating = 10;
const output = `The song ${songName} is amazing and I give it a rating of
${myRating}/${maxRating}, a score of ${myRating/maxRating * 100}%`;

// console.log(output);

// window.onload = function() {
// let nas = "lilnasX";
// document.getElementById("textCount").innerHTML = nas.length;
// }

window.onload = function() {
   let doorDash = "Papa John's, JJ's Poke, Frank & Andreas";
   let doorDashSplit = doorDash.substr(13, 9);
   document.getElementById("foodWord").innerHTML = doorDashSplit;

   let companyIntroduction = "Hey, welcome to Microsoft!";
   let companyIntroductionReplace = companyIntroduction.replace("Microsoft", "Google");
   document.getElementById("companyName").innerHTML = companyIntroductionReplace;

   let catVsDog = "Cats are amazing, Everyone love Cats";
   catVsDog = catVsDog.replaceAll(/CATS/ig, "Dogs");
   document.getElementById("catAndDog").innerHTML = catVsDog;

   let introButton = document.getElementById("intro");
   let introPara = document.getElementById("intro-p");
   
   introButton.addEventListener("click", myIntro);
   function myIntro() {
   introPara.textContent = introPara.textContent.toUpperCase();
   }
}
