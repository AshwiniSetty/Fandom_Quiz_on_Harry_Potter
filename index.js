const chalk = require('chalk');
var center = require('center-align');
var justify = require('justify');
console.log(center(chalk.white.bgMagenta.bold.underline('----Harry Potter - Fandom Quiz-----'),100));


var readlineSync = require('readline-sync');
var score=0;
var userName = readlineSync.question('Let me know your name-');

console.log(center(chalk.white.bgCyan('Hello! ' +userName),80));
function user(){
  userReply=readlineSync.question('Are you a Harry Potter Fan?\nA.Yes B.No-');
  if(userReply.toUpperCase()==="A"||userReply.toUpperCase()==="B"){
    console.log("Let's check your remembrance on Harry Potter Series ");
    console.log(chalk.black.bgWhite("If you get all the questions on Level 1 correct, you'll progress to Level 2."));
  }
  else{
    console.log("Please choose between A or B");
    user();
  }
}
user();

function play(question,answer){
  var userAnswer=readlineSync.question(question);
  if(userAnswer.toUpperCase() === answer.toUpperCase()){
    console.log(chalk.rgb(60,179,113).bold("Yay! You are Right!"));
    score = score+1;
  }
  else{
    console.log(chalk.keyword('orange').bold("Oh no! You are Wrong!"));
  }
  /*console.log(chalk.rgb(218,112,214).bold("Your current score is "+score));
  console.log("_____________________________");*/
}

var questions=[{
question: "\nHarry has a scar on his forehead. What shape is it?\nA.Like a pigs tail\nB. Like a lightning bolt\nC.Like an egg\n ",
answer: "B"
}, {
question: "\nHarrys uncle and aunt, the Dursleys, live at Number 4, Privet Drive?\nA.True\nB.False\n ",
answer: "A"
}, {
question: "\nFrom which platform at Kings Cross does the Hogwarts Express train depart?\nA.Gringotts\nB.Nine and three-quarters\n ",
answer: "B"
}, {
question: "\nWhat house is Harry Potter sorted into?\n ",
answer: "Gryffindor"
}, {
question: "\nWhat spell would you use to open a door?\n ",
answer: "Alohomora"
}, {
  question: "\nHarry Potter’s birthday is on _____?\nA.July 31 B.June 31\nYour option is:  ",
  answer: "A"
}, {
  question: "\nHarry Potters’s eyes have a particular color. Which is that color?\nA.Green B.Brown\nYour option is:  ",
  answer: "A"
}, {
  question: "\nRonald Weasley had a phobia on Spider?\nA.Yes B.No\nYour option is ",
  answer: "A"
}, {
  question: "\nWho brought Harry to Hogwarts when he was matured to go there?\nA.Dumbledore B.Hagrid C.Snape\nYour option is:  ",
  answer: "B"
}, {
  question: "\nAt what age one can join in Hogwarts School of Witchcraft?\nA.12 B.11\nYour option is ",
  answer: "B"
}];

 for(var i=0; i<questions.length/2 ;i++){
  var currentQuestion=questions[i];
  play(currentQuestion.question,currentQuestion.answer);
  console.log("Your current score is:"+score);
}
console.log(center(chalk.white.bgCyan("Your Level 1 score is "+score),80));
//console.log("_____________________________");

if(score==5){
  console.log(center(chalk.black.bgWhite("Yay!You got it all right! Now, Let's move to level 2\n"),40));
  for(var i=questions.length/2; i<questions.length ;i++){
  var currentQuestion=questions[i];
  play(currentQuestion.question,currentQuestion.answer);
  console.log("Your current score is:"+score);
}
console.log(center(chalk.white.bgCyan("Your final score is "+score),82));
console.log(center(chalk.white.bgMagenta.bold.underline('----Thank You!-----'),100));
}
else{
  console.log("Oops! You did make it to Level 2, try playing Level 1 Again.\n");
  
}