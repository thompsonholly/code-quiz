
// GIVEN I am taking a code quiz
// WHEN I click the start button
// THEN a timer starts and I am presented with a question
// WHEN I answer a question
// THEN I am presented with another question
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and my score

// 1. Listen for the click start button 
// 2. Start timer --- (function) and show first question ---(separate function or include in startQuiz?)
// 2. If the correct answer is chosen- reveal next question, log score
// 3. If the wrong answer is chosen- take time off timer
// 4. If the timer runs out
//    a. open enter intials and submit button to log score
//    b. if all questions are answered open enter initals and submit button to enter score.
// 5. Once the quiz is over 
//    a. log wins and losses
//    b. update scoreboard
// var questions =
// var scoreboard = 0
// var timerEl = document.getElementById('countdown')
// var timeDisplay = document.getElementById()

var myQuestions = [
  {
    "Which is not an animal?" 
    a: "Elephant"
    b: "Robot"
    c: "Monkey"
    answer: "b"
  }
]



var timeLeft = document.querySelector(".cd-timer")

var startBtnEL = document.getElementById("start-btn")

startBtnEL.addEventListener("click", beginQuiz);

function setTimer() {
  var countdown = setInterval(function () {
    timeLeft.textContent = ("Remaining Time:" + secondsLeft);
    secondsLeft--;

    if (secondsLeft < 0) {
      // Stops execution of action at set interval
      clearInterval(timerInterval);
      // Calls function to create and append image
      displayMessage("Time's Up!");
    }
  }, 10000);
}

function beginQuiz() {
  console.log("Begin Quiz Entered");
  setTimer;
}

for (var i = 0; i < myQuestions.length; i++) {
  var response =
  if (response == myQuestions[i].answer) {
    score++;
    alert("Correct");
  } else {
    alert("Incorrect!")

  }
}
// generateSubmitBtn.addEventListener("click", showScoreboard);

function showScoreboard() {
  scoreboard = generateQuiz();

  var scoreboardResult = document.querySelector("#results");

  scoreboard.valueOf(number + initials)
}
submitButton.addEventListener('click', showScoreboard)
// function generateQuiz(questions, quizContainer, resultsContainer, submitButton) {

//   function showQuestions(questions, quizContainer) {
//     // code will go here
//   }

//   function showResults(questions, quizContainer, resultsContainer) {
//     // code will go here}