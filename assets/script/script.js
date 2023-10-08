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

var questionContainer = document.getElementById("question-goes-here")

var timerEl = document.getElementById('countdown');

var startBtn = document.querySelector("#start-btn");

var submitBtn = document.querySelector("#submit");

var divEl = document.getElementById('startdiv');

var scoreboard = document.getElementById("scoreboard");

var questionContainerEl = document.getElementById('question-container');

var currQuestionIndex = 0;

var correctAnswer = '';

var totalWins = 0;
var totalLosses = 0;
var userChoice = '';
var timeLeft = 0;

var wins = document.querySelector(".win");
var losses = document.querySelector(".loss");

startBtn.addEventListener("click", beginQuiz);

var myQuestions = [
  {
    question: "Which is not an animal? A. Monkey, B. Elephant, C. Robot",
    userChoice: ['A', 'B', 'C'],
    correctAnswer: 'C'
  },
  {
    question: "Which animal has fur? A. Snake B. Bear C. Alligator",
    userChoice: ['A', 'B', 'C'],
    correctAnswer: 'B'

  },
  {
    question: "Which animal has stripes? A. Cheetah B. Lion C. Zebra",
    userChoice: ['A', 'B', 'C'],
    correctAnswer: 'C'
  },
  {
    question: "Which animal has the best eyesight at night? A. Owl B. Snail C. Horse",
    userChoice: ['A', 'B', 'C'],
    correctAnswer: 'A'
  }

];

// This function gets current question from the array and displays on the screen.
function renderQuestions() {
  // clear out anything already in the questionContainer
  var q = myQuestions[currQuestionIndex];
  var pTag = document.createElement("p");
  pTag.textContent = q.question;
  questionContainer.appendChild(pTag)
  if (currQuestionIndex > 0) {
    for (var i = 0; i < q.userChoice.length; i++) {
      btn.remove();
    }
    pTag.remove();
  }
  for (var i = 0; i < q.userChoice.length; i++) {



    var btn = document.createElement("button")
    btn.textContent = q.userChoice[i]
    // var correctAnswer = currQuestionIndex[i]

    questionContainer.appendChild(btn)
    // how can we put some kind of data on the button that
    // indicates if it's the correct answer

    btn.style.width = '50px';
    btn.style.height = '50px';

  }
}

questionContainerEl.addEventListener('click', function (event) {
  if (event.target.matches("button")) {
    var q = myQuestions[currQuestionIndex];
    console.log(event.target.textContent + " 1 " + q.correctAnswer);
  }
  if (event.target.textContent != q.correctAnswer) {
    console.log(q.userChoice + " 2 " + correctAnswer);
    answerIsWrong()
  } else {
    (event.target.textContent == q.correctAnswer)
    console.log(q.userChoice + " + " + correctAnswer);
    answerIsCorrect();
  }
  currQuestionIndex++
  renderQuestions()

});


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

// function scoreboard() {

// }
// for (var i = 0; i < myQuestions.length; i++) {
//   var userChoice = '';
//   console.log(userChoice);
// } if (userChoice == myQuestions[i].answer) {
//   score++;
//   alert("Correct");
// } else {
//   !userChoice == myQuestions[i].answer
//   timeLeft - 5;
//   alert("Incorrect!")
// }





function countdown() {
  timeLeft = 60;

  var timeInterval = setInterval(function () {
    if (timeLeft > 1) {

      timerEl.textContent = timeLeft + ' seconds remaining';

      timeLeft--;

    } else if (timeLeft === 1) {
      timerEl.textContent = timeLeft + ' second remaining';
      timeLeft--;

    } else {
      timerEl.textContent = '';
      // Stops execution of action at set interval
      clearInterval(timeInterval);
      console.log("Timer 0");
      //determines if user won the game or not
      // Calls function to create and append image
      renderQuestions()


    }
  }, 1000);
}

function beginQuiz() {
  console.log("Begin Quiz Entered");
  countdown();
  divEl.style.display = 'none';
  questionContainerEl.style.display = 'block';
  currQuestionIndex = 0;
  renderQuestions();
  console.log(divEl);
  console.log(questionContainerEl);
  questionContainerEl.style.display = 'block';




}


// generateSubmitBtn.addEventListener("click", showScoreboard);

// function showScoreboard() {
//   scoreboard = generateQuiz();

//   var scoreboardResult = document.querySelector("#results");

//   scoreboard.valueOf(number + initials)
// }
// submitBtn.addEventListener('click', showScoreboard);
// function generateQuiz(questions, quizContainer, resultsContainer, submitButton) {


//   function showResults(questions, quizContainer, resultsContainer) {
//     // code will go here}