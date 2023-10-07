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

// var answer = '';
// var question = '';
// var userChoice = '';



var wins = document.querySelector(".win");
var losses = document.querySelector(".loss");

var myQuestions = [
  {
    question: "Which is not an animal? A. Monkey, B. Elephant, C. Robot",
    userChoice: ['A', 'B', 'C'],
    answer: 'C'
  },
  {
    question: "Which animal has fur? A. Snake B. Bear C. Alligator?",
    userChoice: ['A', 'B', 'C'],
    answer: 'B'

  }

];

// This function gets current question from the array and displays on the screen.
function renderQuestions() {
  // clear out anything already in the questionContainer
  var q = myQuestions[currQuestionIndex];
  var pTag = document.createElement("p");
  pTag.textContent = q.question;
  questionContainer.appendChild(pTag)

  for (var i = 0; i < q.userChoice.length; i++) {

    var btn = document.createElement("button")
    btn.textContent = q.userChoice[i]
    var answer = currQuestionIndex[i]

    questionContainer.appendChild(btn)
    // how can we put some kind of data on the button that
    // indicates if it's the correct answer

    btn.style.width = '50px';
    btn.style.height = '50px';

  }
}

questionContainerEl.addEventListener('click', function (event) {
  if (event.target.matches("button")) {
    var currQuestionIndex = [0];
    var q = myQuestions[currQuestionIndex];
    if (event.target.textContent === userChoice.answer) {
      answerIsCorrect()

    } else {
      answerIsWrong()
    }
    currQuestionIndex++
    renderQuestions()
  }
})


function answerIsCorrect() {
  if (answerIsCorrect === userChoice.answer) {
    console.log('Correct!');
  } else {
    console.log('not correct')
  }
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

startBtn.addEventListener("click", beginQuiz);



function countdown() {
  var timeLeft = 60;

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

      // for (var i = 0; i < myQuestions.length; i++) {
      //   var userChoice = '';
      //   console.log(userChoice);
      //   if (userChoice == myQuestions[i].answer) {
      //     score++;
      //     alert("Correct");
      //   } else {
      //     !userChoice == myQuestions[i].answer
      //     timeLeft - 5;
      //     alert("Incorrect!")
      //   }
    }
  }, 1000);
}

function beginQuiz() {
  console.log("Begin Quiz Entered");
  countdown();
  divEl.style.display = 'none';
  questionContainerEl.style.display = 'block';
  renderQuestions();
  console.log(divEl);
  console.log(questionContainerEl);
  questionContainerEl.style.display = 'block';




}

// for (var i = 0; i < myQuestions.length; i++) {
//   var response =
//   if (response == myQuestions[i].answer) {
//     score++;
//     alert("Correct");
//   } else {
//     alert("Incorrect!")

//   }
// }
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