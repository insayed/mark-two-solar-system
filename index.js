var readlineSync = require("readline-sync");
var score = 0;

var qname = readlineSync.question("What is your name? ");
console.log("Welcome! " + qname + ". Let's play HOW WELL DO YOU KNOW SOLAR SYSTEM!.")


var array = [{
  question: "How many plantes do we have in solar system ? ",
  answer: "8",
}, {
  question: "Which palnet has the maximum moons ? ",
  answer: "jupiter",
}, {
  question: "What planet is also known as red planet ? ",
  answer: "mars",
}, {
  question: "What is the name of our galaxy ? ",
  answer: "milky way",
}, {
  question: "Which is the next most habitable planet ? ",
  answer: "mars",
}]

function play(question, answer) {
  var userAnswer = readlineSync.question(question);
  if (userAnswer === answer) {
    console.log("You are right!")
    score = score + 1;
  } else {
    console.log("You are Wrong!")
  }
  console.log("Your current score is : ", score);
  console.log("----------");
}

for (var i = 0; i < array.length; i++) {
  play(array[i].question, array[i].answer);
}

console.log("CONGRATULATIONS! Your total score is : ", score);
