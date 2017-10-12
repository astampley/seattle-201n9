'use strict';
// my variables
var userPoints = 0;
var alertPrefixString = '';
var questionsArr = ['Do I enjoy watching sports? (Y/N)', 'Does I enjoy bacon? (Y/N)', 'Am I mixed? (Y/N)', 'Is my favorite color black? (Y/N)', 'Do I enjoy taking naps? (Y/N)', 'Which year was I born? Hint - it\'s between 1980-1990', 'Where I have been stationed while in the Navy?'];
var responsesArr = ['I love watching sports', 'Bacon will forever be bae. I cant help it.', 'I am black, the light skinned version', 'My favorite color is purple.', 'Naps are a gift from God.'];
var alertsArr = ['Hello! Welcome to my guessing game. Press \'ok\' to start.', 'To play the game please answer with Yes/No, and you\'ll receive points as you get them right.'];
// the intro alert asking the user to play my game
function showIntros() {
  var introAlert = alert(alertsArr[0]);
  var howToAlert = alert(alertsArr[1]);
  console.log('The user started to play the game.');
  askSports();
}
// the 1st prompt asks the user if they know where i was born
function askSports() {
  var sports = prompt(questionsArr[0]).toLowerCase();
//   if (born === 'y' || born === 'yes') {
//     userPoints += 1;
//     alertPrefixString = 'Correct! ';
//     console.log('The user answered question 1 correctly');
//   } else {
//     alertPrefixString = 'Bummer! ';
//     console.log('The user answered question 1 incorrectly');
//   }
//   var bornAlert = alert(alertPrefixString + responsesArr[0]);
//   askLikesCoffee();
// }
// // the 2nd question asks the user if i like coffee
// function askLikesCoffee() {
//   var coffee = prompt(questionsArr[1]).toLowerCase();
//   if (coffee === 'n' || coffee === 'no') {
//     userPoints += 1;
//     alertPrefixString = 'Correct! ';
//     console.log('The user answered question 2 correctly');
//   } else {
//     alertPrefixString = 'Bummer! ';
//     console.log('The user answered question 2 incorrectly');
//   }
//   var coffeeAlert = alert(alertPrefixString + responsesArr[1]);
//   askRedCar();
// }
// // the 3rd question asks the user if i drive a red car
// function askRedCar() {
//   var carColor = prompt(questionsArr[2]).toLowerCase();
//   if (carColor === 'yes' || carColor === 'y') {
//     userPoints += 1;
//     alertPrefixString = 'Correct! ';
//     console.log('The user answered question 3 correctly');
//   } else {
//     alertPrefixString = 'Bummer! ';
//     console.log('The user answered question 3 incorrectly');
//   }
//   var carColorAlert = alert(alertPrefixString + responsesArr[2]);
//   askSchool();
// }
// // the 4th question asks the user if i went to school in Pennsylvania
// function askSchool(){
//   var school = prompt(questionsArr[3]).toLowerCase();
//   if (school === 'yes' || school === 'y') {
//     userPoints += 1;
//     alertPrefixString = 'Correct! ';
//     console.log('The user answered question 4 correctly');
//   } else {
//     alertPrefixString = 'Bummer! ';
//     console.log('The user answered question 4 incorrectly');
//   }
//   var schoolAlert = alert(alertPrefixString + responsesArr[3]);
//   askIos();
// }
// // the 5th question asks the user if i'm an iOS developer
// function askIos(){
//   var isiOSDev = prompt(questionsArr[4]).toLowerCase();
//   if (isiOSDev === 'yes' || isiOSDev === 'y') {
//     userPoints += 1;
//     alertPrefixString = 'Correct! ';
//     console.log('The user answered question 5 correctly');
//   } else {
//     alertPrefixString = 'Bummer! ';
//     console.log('The user answered question 5 incorrectly');
//   }
//   var iOSDevAlert = alert(alertPrefixString + responsesArr[4]);
//   askNumber();
// }
// // 6th question is a number guessing question
// // The user cannot advance unless they answer my age correctly. Afterwhich they are awarded a point
// function askNumber (){
//   var myAge = prompt(questionsArr[5]);
//   var myAgeAttempts = 3;
//   while (myAgeAttempts > 0) {
//     if (myAge != 30) {
//       alert('Uh-Oh. That\'s not right, you have ' + myAgeAttempts + ' attempts left.');
//       myAge = prompt(questionsArr[5]);
//       myAgeAttempts--;
//     } else {
//       console.log('Yay, the user guessed my age. I feel old :(');
//       userPoints += 1;
//       myAgeAttempts = 0;
//       break;
//     }
//   }
//   askCities();
// }
// // 7th question accepts multiple answers
// // The user cannot advance unless they answer the cities i previously lived at correctly. Afterwhich they are awarded a point
// function askCities(){
//   var myCities = prompt(questionsArr[6]).toLowerCase();
//   var myCitiesAttempts = 5;
//   while (myCitiesAttempts > 0) {
//     if (myCities === 'norristown' || myCities === 'reading' || myCities === 'vancouver') {
//       console.log('Yay, they user guessed a city i used to live in.');
//       userPoints += 1;
//       myCitiesAttempts = 0;
//       break;
//     } else {
//       alert('Uh-Oh. That\'s not right, you have ' + myCitiesAttempts + ' attempts left.');
//       myCities = prompt(questionsArr[6]).toLowerCase();
//       myCitiesAttempts--;
//     }
//   }
//   showFinalAlert();
// }
// // final alert
// function showFinalAlert(){
//   if (userPoints == 7) {
//     var finalAlert = alert('Congratulations! You answered all 7 questions correctly.');
//   } else {
//     var finalAlert = alert('Great Job! You got: ' + userPoints + ' out of 7. Try again to get all the questions right next time ;)');
//   }
// }
