let readlineSync = require('readline-sync');
const chalk = require('chalk');

let score = 0;



const quizQuestions = [{
  question: 'What is my favorite sport? ',
  answer: 'football'
}, {
  question: 'What is my football team? ',
  answer: 'manchester united'
}, {
  question: 'where do i live? ',
  answer: 'mumbai'
},
{
  question: 'what is my favorite food? ',
  answer: 'pizza'
}, {
  question: "Okay this one's difficult, can you name my favorite book ? ",
  answer: 'harry potter'
}];

const welcome = () => {
  const yourName = readlineSync.question('Enter your username! ');
  console.log(`Welcome ${chalk.bold(yourName)}, Let's see how well do you know joyan `);
  const letsBegin = readlineSync.question(`Type ${chalk.bold('start')} to begin the quiz `);
  console.log(`      `)
  if (letsBegin.toLowerCase() === 'start') {
    for (let i = 0; i < quizQuestions.length; i++) {
      start(quizQuestions[i].question, quizQuestions[i].answer);
    }

  }
}


const start = (questions, answers) => {
  let userInput = readlineSync.question(questions);
  if (userInput.toLowerCase() === answers) {
    score++;
    console.log('Correct');
  } else {
    console.log('Wrong');
  }
  console.log(`Current Score : ${score}`);
  console.log(`      `)
}

const highScoreforQuiz = (score) => {
  console.log(chalk.underline(`Your Score is ${chalk.bold(score)}`));
  console.log('Correct Answers:')
  for (let i = 0; i < quizQuestions.length; i++) {
    console.log(quizQuestions[i].answer);
  }
}

welcome();
highScoreforQuiz(score, quizQuestions);

