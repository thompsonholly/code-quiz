// 1. Listen for the click start button 
// 2. Start timer --- (function) and show first question ---(separate function or include in startQuiz?)
// Get rid of title and paragraph for starting quiz done
// How do I do that?
// How to hide, delete, erase html element? done
// How to select a tag? done
// How do I show an element? done
//  If the correct answer is chosen- reveal next question, log score
//  How will computer know when correct answer is chosen? 
//  If the wrong answer is chosen- take time off timer
//  If the timer runs out
//    a. open enter intials and submit button to log score
//    b. if all questions are answered open enter initals and submit button to enter score.
// 5. Once the quiz is over 
//    a. log wins and losses
//    b. update scoreboard
var questionContainerEl = document.getElementById('question-container');

var questionContainer = document.getElementById("question-goes-here");

var nextButton = document.getElementById('next-btn');

var timeLeft = document.getElementById('countdown');

var startButton = document.querySelector("#start-btn");

var submitBtn = document.querySelector("#submit");

var divEl = document.getElementById('startdiv');

var scoreboard = document.getElementById("scoreboard");

var currentQuestion = '';

var currQuestionIndex = 0;

var correctAnswer = '';

var totalWins = 0;
var totalLosses = 0;
var userChoice = '';
var timeLeft = 0;

var myQuestions = [
  {
    question: "Which is not an animal? A. Dog B. Horse C. Robot",
    userChoices: ["A", "B", "C"],
    correctAnswer: "C"
  },
  {
    question: 'What animal has fur? A. Bear B. Snake C. Alligator',
    userChoices: ["A", "B", "C"],
    correctAnswer: "A"
  },
  {
    question: 'Which animal has stripes? A. Cheetah B. Zebra C. Emu',
    userChoices: ["A", "B", "C"],
    correctAnswer: "B"
  },
  {
    question: "What animal sees best at night? A. Snail B. Squirrel C. Owl",
    userChoices: ["A", "B", "C"],
    correctAnswer: 'C'

  },
  {
    question: "Which animal lays eggs? A. Giraffe B. Robin C. Wildebeast",
    userChoices: ["A", "B", "C"],
    CorrectAnswer: 'B'

  }
]
// var wins = document.querySelector(".win");
// var losses = document.querySelector(".loss");

startButton.addEventListener("click", beginQuiz);

function beginQuiz() {

  currQuestionIndex = 0;
  totalWins = 0;
  totalLosses = 0;
  startButton;
  console.log("Begin Quiz Entered");

  renderQuestions();

  countdown();
  divEl.style.display = 'none';
  questionContainerEl.style.display = 'block';
  currQuestionIndex = 0;
  renderQuestions();
  console.log(divEl);
  console.log(questionContainerEl);
  questionContainerEl.style.display = 'block';
}

// This function gets current question from the array and displays on the screen.

// clear out anything already in the questionContainer

// var pTag = document.createElement("p");
// pTag.textContent = q.question;
// questionContainer.appendChild(pTag);
startButton.addEventListener('click', renderQuestions);


function renderQuestions() {
  var currentQuestion = myQuestions[currQuestionIndex];
  // var nextQuestion = currQuestionIndex + 1;
  // question = nextQuestion + '  ' + currentQuestion.myQuestions;
  for (var i = 0; i < currentQuestion.userChoices; i++) {
    var userChoice = currentQuestion.userChoices[i];

    var btn = document.createElement("button");
    questionContainerEl.appendChild(btn);
    btn.textContent = currentQuestion.userChoice;
    console.log(currentQuestion.userChoice);
    btn.style.width = '50px';
    btn.style.height = '50px';
  };
}

questionContainerEl.addEventListener('click', function (event) {
  if (event.target.matches("button")) {
    var currentQuestion = myQuestions[currQuestionIndex];
    console.log(event.target.textContent + " 1 " + currentQuestion.correctAnswer);
  }
  if (event.target.textContent != currentQuestion.correctAnswer) {
    console.log(currentQuestion.userChoices + " 2 " + correctAnswer);
    answerIsWrong()
  } else {
    (event.target.textContent == currentQuestion.correctAnswer)
    console.log(currentQuestion.userChoices + " + " + correctAnswer);
    answerIsCorrect();

  }
  currQuestionIndex++
  // renderQuestions()

});

// function renderQuestions() {
//   var currentQuestion = myQuestions[currQuestionIndex];
//   // var nextQuestion = currQuestionIndex + 1;
//   // question = nextQuestion + '  ' + currentQuestion.myQuestions;
//   for (var i = 0; i < currentQuestion.userChoices; i++) {
//     var userChoice = currentQuestion.userChoices[i];

//     var btn = document.createElement("button");
//     questionContainerEl.appendChild(btn);
//     btn.textContent = currentQuestion.userChoice;
//     console.log(currentQuestion.userChoice);
//     btn.style.width = '50px';
//     btn.style.height = '50px';
//   };
// }
// currentQuestion.userChoice.forEach(answer => {





// for (var i = 0; i < q.userChoice.length; i++) {


//   if (currQuestionIndex > 0) {

//     for (var i = 0; i < q.userChoice.length; i++) {
//     }
//   }
// } 
// };
// btn.remove();
//  pTag.remove();  


function answerIsCorrect() {

  console.log('Correct!');
  totalWins++;
  // localStorage.setItem("wins", totalWins);
  // wins.textContent = localStorage.getItem('wins');



}

function answerIsWrong() {
  console.log('not correct')
  timeLeft -= 5;
  totalLosses++;
  // localStorage.setItem('loss', totalLosses);
  // losses.textContent = localStorage.getItem('losses');


}

function countdown() {
  secondsLeft = 60;
  var timeInterval = setInterval(function () {
    timeLeft.textContent = secondsLeft;
    secondsLeft--;

    if (secondsLeft > 1) {

      timeLeft.textContent = secondsLeft + ' seconds remaining';

      secondsLeft--;

    }
    else if (secondsLeft === 0) {
      f
      // timerEl.textContent = '';
      totalLosses++;
      // Stops execution of action at set interval
      clearInterval(timeInterval);
      console.log("Timer 0");
      //determines if user won the game or not
      // Calls function to create and append image
      // renderQuestions()
    }

  }, 1000);
}