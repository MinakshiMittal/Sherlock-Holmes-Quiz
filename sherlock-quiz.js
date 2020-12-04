const chalk = require('chalk');
var readlineSync = require('readline-sync');

// sherlock quote
console.log(chalk.yellowBright.bold("'To a great mind, nothing is little'"));
console.log(chalk.yellowBright.bold("."));
console.log(chalk.yellowBright.bold("."));
console.log(chalk.yellowBright.bold("."));
console.log(chalk.yellowBright.bold("SHERLOCK HOLMES :):)"));
console.log("");

// heading
console.log(chalk.cyanBright.bold("LET'S SEE HOW MANY SHERLOCKIANS ARE OUT THERE ^_^\n"));

// instructions
console.log(chalk.redBright.bold("INSTRUCTIONS:\n") + chalk.yellowBright.bold("1.") + 
chalk.blueBright.bold("There will be three rounds(Round1: 3 ques, Round2: 5 ques, Round3: 7 ques). \n") + chalk.yellowBright.bold("2.") + chalk.blueBright.bold("If all the answers of a particular round are correct then only you'll move to the next round.\n") + chalk.yellowBright.bold("3.") + chalk.blueBright.bold(" Each question will have three options and you'll have to write your correct option(either a,b or c) and hit enter.\n"));

// start
console.log(chalk.yellowBright.bold("LET'S GET STARTED! EXCITED?"));
var userName = readlineSync.question(chalk.cyanBright.bold("ENTER YOUR NAME: "));
console.log("");

// arrays
var highscore = [{
  name: "Minakshi",
  score: 15,
}];

var round1 = [{
  question: "What street do Holmes and Watson live on?\na.Regency Street\nb.Baker Street\nc.High Street ",
  answer: "b",
},{
  question: "What is the name of Holmes' landlord? \na.Mrs. Hudley \nb.Mrs. Swanson \nc.Mrs. Hudson",
  answer: "c",
},{
  question: "What is the name of Holmes' older brother? \na.Mron \nb.Mylon \nc.Mycroft",
  answer: "c",
}];

var round2 = [{
  question: "Where does Holmes store his tobacco. \na.In his socks \nb.In his hat \nc.In cigar box ",
  answer: "a",
},{
  question: "Who plays Holmes in the BBC TV series, which premiered in 2010? \na. Mark Gattis \nb. Andrew Scott \nc. Benedict Cumberbatch",
  answer: "c",
},{
  question: "In what story is Holmes seemingly killed of? \na. The Final Problem \nb. The Sign of the Four \nc. The Empty House",
  answer: "a",
},{
  question: "In what story does a very much alive Holmes reappear? \na. The Empty House \nb. The Valley of Fear \nc. A Case of Identity",
  answer: "a",
},{
  question: "When was the very first Sherlock Holmes movie made? \na. 1920 \nb. 1900 \nc. 1940",
  answer: "b",
}];

var round3 = [{
  question: "What is the period between 'The Final Problem' and 'The Empty House' known as? \na. The Missing Years \nb. The Lost Weekend \nc. The Great Hiatus ",
  answer: "c",
},{
  question: "What is Silver Blaze? \na. metallic poison \nb. horse \nc. regal manor",
  answer: "b",
},{
  question: "What makes the dog glow in 'The Hound of the Baskervilles?'\na. trick lighting \nb. phosphorous \nc. evil spirits",
  answer: "b",
},{
  question: "When it comes to defending himself against the criminal element, in which of these skills is Holmes NOT an expert? \na. Boxing \nb. Sword fighting \nc. Cross bow shooting",
  answer: "c",
},{
  question: "How many years older is Mycroft than Sherlock? \na. Only 9 months \nb. 3 years \nc. 7 years",
  answer: "c",
},{
  question: "Where did Sherlock and Watson first meet? \na. Big Ben \nb. St Bartholomew's Hospital \nc. Bath,Somerset",
  answer: "b",
},{
  question: "Which kind of animal swallowed the 'blue carbuncle'? \na. A goose \nb. A turkey \nc. A chicken",
  answer: "a",
}];

var round = [round1, round2,round3];

// qna function
var score = 0;
function start(question, answer)
{
  console.log(chalk.yellow.bold(question));
  var userAns = readlineSync.question("Ans: ");

  if(userAns.toLowerCase() === answer)
  {
    console.log(chalk.green.dim("You are right"));
    score++;
    console.log(chalk.cyan.bold("Current score: ") + chalk.whiteBright.bold(score));
    console.log("");
  }
  else{
    console.log(chalk.red.dim("OOOOOOPPS! You are wrong."));
    console.log(chalk.cyan.bold("Current score: ") + chalk.whiteBright.bold(score));
    console.log("");
  }
}

//play
var count = 0, k = 0;
for(var j=0; j<round.length; j++)
{
  k=j+1;
  console.log(chalk.green.bold.underline("ROUND-" + k + "\n"));
  for(var i=0; i<round[j].length;i++)
  {
    start(round[j][i].question, round[j][i].answer);
    count++;
  }

  if(score == count)
  {
    console.log(chalk.green.bold("YAYYYY!! TIME FOR THE NEXT ROUND"));
  }
  else
  {
    console.log(chalk.red.bold("SORRY! YOU COULD NOT MAKE IT TO THE NEXT ROUND"));
    break;
  }
}

// final score
console.log(chalk.green.bold(userName + " your final score is: ") + chalk.yellow.bold(score));
console.log("");

// highest score
if(score === highscore[0].score)
{
  console.log(chalk.blueBright.bold("YAYAYYAYA!!! You scored the highest! Send a screenshot of your score and we'll update it with your deetails!! Congratulations!"));
}