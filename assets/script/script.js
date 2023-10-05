
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

// var scoreboard = 0
// var timerEl = document.getElementById('countdown')
// var timeDisplay = document.getElementById()

// var myQuestions = [
//   {
//     question = 'Which is not an animal?', 

//     question = 'Which animal has fur?', 'a) Snake', 'b) Alligator', 'c) Wolf)';


//   }
// ]
var questions = [
  {
    question: "Which is not an animal?",
    options: ["a) Monkey", "b) Elephant", "c) Robot"],
    answer: "c) Robot"
  },
  {
    question: "Which animal has fur",
    options: ["a) Snake", "b) Bear", "c) Alligator "],
    answer: "b) Bear"

  }

];
questions[0].question

console.log(questions[0].question);
questions[0].options[1]
console.log(questions[0].options[1])
console.log(questions[0].options[1] === questions[0].answer)
questions[0].answer
console.log(questions[0].answer)
// if question === answer

var timerEl = document.getElementById('countdown');

var startBtn = document.querySelector("#start-btn");

var submitBtn = document.querySelector("#submit");

var divEl = document.getElementById('startdiv');

var questionContainerEl = document.getElementById('question-container');





startBtn.addEventListener("click", beginQuiz);



function countdown() {
  var timeLeft = 30;

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
      // Calls function to create and append image
      displayMessage('');
    }
  }, 1000);
}

function beginQuiz() {
  console.log("Begin Quiz Entered");
  countdown();
  divEl.style.display = 'none';
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

//   function showQuestions(questions, quizContainer) {
//     // code will go here
//   }

//   function showResults(questions, quizContainer, resultsContainer) {
//     // code will go here}