

var questionContainer = document.querySelector('question-container');

var nextButton = document.querySelector('next-btn');

var timeLeft = document.querySelector('countdown');

var startButton = document.querySelector("#start-btn");

var submitBtn = document.querySelector("#submit");

var divEl = document.querySelector('startdiv');

var scoreboard = document.querySelector("scoreboard");

// var currQuestionIndex = 0;

// var answer = true;

// var totalWins = 0;
// var totalLosses = 0;
// // var userChoice = '';
// var timeLeft = 0;

let currentQuestion = {}
let acceptingAnswers = true
let score = 0
let questionCounter = 0;
let availableQuestions = []

var questions = [
  {
    question: "Which is not an animal? A. Dog B. Horse C. Robot",
   choices: ['A','B','C'],
    answer: 'C'
  },
  {
    question: 'What animal has fur? A. Bear B. Snake C. Alligator',
   choices: ['A','B','C'],
  answer: 1
  },
  {
    question: 'Which animal has stripes? A. Cheetah B. Zebra C. Emu',
   choices: ['A','B','C'],
 answer: 'B'
  },
  {
    question: "What animal sees best at night? A. Snail B. Squirrel C. Owl",
   choices: ['A','B','C'],
    answer: 'C'

  },
  {
    question: "Which animal lays eggs? A. Giraffe B. Robin C. Wildebeast",
   choices: ['A','B','C'],
    answer: 'B'

  }
]
var max_questions = 5;
// var wins = document.querySelector(".win");
// var losses = document.querySelector(".loss");

startButton.addEventListener('click', beginQuiz());


beginQuiz = () => {
  divEl.remove('startdiv');
  score = 0;
  questionContainer.style.display = 'block';
  availableQuestions = [...questions]
  var pTag = document.createElement("p");
  pTag.textContent = q.question;
  questionContainer.appendChild(pTag);

  nextButton.addEventListener('click', getNewQuestion());

  getNewQuestion();

}

function getNewQuestion() {

  
    var currentQuestion = questions[currentQuestion];
    var nextQuestion = currentQuestion + 1;
    // question = nextQuestion + '  ' + currentQuestion.myQuestions;
    for (var i = 0; i < currentQuestion.userChoices; i++) {
      var userChoice = currentQuestion.userChoices[i];

      var btnA = document.createElement("buttonA");
      var btnB = document.createElement("buttonB");
      var btnB = document.createElement("buttonC");
      questionContainer.appendChild(btnA);
      questionContainer.appendChild(btnB);
      questionContainer.appendChild(btnC);
      btnA.textContent = A;
      btnB.textContent = B;
      btnC.textContent = C;
      console.log(currentQuestion.userChoices);
    }
  }

  nextButton.addEventListener('click', getNewQuestion);
  if (questions.length === 0 || questionCounter > max_questions) {


  
  questionCounter++
  const questionIndex = Math.floor(Math.random() * questions.length);
  currentQuestion = availableQuestions[questionIndex]
  question.innerText = currentQuestion.question;
}
  choices.forEach(choice => {
    const number = choice.dataset['number'];
    choice.innerText = currentQuestion['choice' + number];
  })

choices.forEach(choice => {
  choice.addEventListener('click', e => {
    if (!choice === answer) 
      return score--;
    } else {
    if (choice === answer)
  return score++;
    
    })

incrementScore = num => {
  score += num;
  scoreText.innerText = score;
}
// This function gets current question from the array and displays on the screen.

// clear out anything already in the questionContainer


nextButton.addEventListener('click', nextQuestion);


// function renderQuestions() {
//   var currentQuestion = myQuestions[currQuestionIndex];

//   var nextQuestion = currQuestionIndex + 1;
//   // question = nextQuestion + '  ' + currentQuestion.myQuestions;
//   for (var i = 0; i < currentQuestion.userChoices; i++) {
//     var userChoice = currentQuestion.userChoices[i];

//     var btn = document.createElement("button");
//     questionContainer.appendChild(btn);
//     btn.textContent = currentQuestion.userChoices;
//     console.log(currentQuestion.userChoices);
//     btn.style.width = '50px';
//     btn.style.height = '50px';
//   };
// }

// function renderQuestions() {
//   var currentQuestion = myQuestions[currQuestionIndex];
//   // var nextQuestion = currQuestionIndex + 1;
//   // question = nextQuestion + '  ' + currentQuestion.myQuestions;
//   for (var i = 0; i < currentQuestion.userChoices; i++) {
//     var userChoice = currentQuestion.userChoices[i];

//     var btn = document.createElement("button");
//     questionContainer.appendChild(btn);
//     btn.textContent = userChoice;
//     console.log(currentQuestion.userChoices);
//     btn.style.width = '50px';
//     btn.style.height = '50px';
//   };
// }

// questionContainer.addEventListener('click', function (event) {
//   if (event.target.matches("button")) {
//     var currentQuestion = myQuestions[currQuestionIndex];
//     console.log(event.target.textContent + " 1 " + currentQuestion.answer);
//   }
//   if (event.target.textContent != currentQuestion.answer) {
//     console.log(currentQuestion.userChoices + " 2 " + answer);
//     answerIsWrong()
//   } else {
//     (event.target.textContent == currentQuestion.answer)
//     console.log(currentQuestion.userChoices + " + " + answer);
//     answerIsCorrect();

//   }
//   currQuestionIndex++
  // renderQuestions()

//});

// function answerIsCorrect() {

//   console.log('Correct!');
//   totalWins++;
// }
  // localStorage.setItem("wins", totalWins);
  // wins.textContent = localStorage.getItem('wins')

// function answerIsWrong() {
//   console.log('not correct')
//   timeLeft -= 5;
//   totalLosses++;
  // localStorage.setItem('loss', totalLosses);
  // losses.textContent = localStorage.getItem('losses');


// }

// function countdown() {
//   secondsLeft = 60;
//   var timeInterval = setInterval(function () {
//     timeLeft.textContent = secondsLeft;
//     secondsLeft--;

//     if (secondsLeft > 1) {

//       timeLeft.textContent = secondsLeft + ' seconds remaining';

//       secondsLeft--;

//     }
//     else if (secondsLeft === 0) {
      
      // timerEl.textContent = '';
      // totalLosses++;
      // Stops execution of action at set interval
      // clearInterval(timeInterval);
      // console.log("Timer 0");
      //determines if user won the game or not
      // Calls function to create and append image
      // renderQuestions()
//     }

//   }, 1000);
// }

// function beginQuiz() {

//   currQuestionIndex = 0;
//   totalWins = 0;
//   totalLosses = 0;
//   console.log("Begin Quiz Entered");

//   renderQuestions();

//   countdown();

//   questionContainer.style.display = 'block';
//   divEl.style.display = 'none';



//   currQuestionIndex = 0;
//   renderQuestions();
//   console.log(divEl);
//   console.log(questionContainer);

// }