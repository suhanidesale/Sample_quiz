var readlineSync = require('readline-sync');

var score = 0;


function checkAns(userans, rightans) {
  if (userans == rightans) {
    console.log("Correct answer! 💯")
    score++;
  }
  else
    console.log("Wrong answer 😓");

  console.log("Your current score is " + score);
  
};
var name = readlineSync.question('Enter your name?\n');
console.log("Welcome to the Quiz, " + name + ".");
console.log("Note: Enter the correct option number ");
console.log("Q.1 What is Suhani's last name?");
console.log("\nOption 1.Suhani\nOption 2.Suhani Desale \nOption 3.desale");
var userans = readlineSync.question("Answer:");
checkAns(userans, "2")

console.log("Q.1 What is Suhani's fav color?");
console.log("\nOption 1.Pink\nOption 2.Black \nOption 3.Sea green");
var userans = readlineSync.question("Answer:");
checkAns(userans, "3")

console.log("Q.1 What is Suhani's fav language?");
console.log("\nOption 1.Python\nOption 2. Java  \nOption 3.C++");
var userans = readlineSync.question("Answer:");
checkAns(userans, "1")

console.log("\nYour final score is " + score + "/3");

if(score == 4 || score == 3)
{
  console.log("Well Played 🤩")
}
else
{
  console.log("Better luck next time 😊")
}

