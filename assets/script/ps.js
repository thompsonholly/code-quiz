

var questionContainer = document.querySelector('question-container');

var nextButton = document.querySelector('next-btn');

var timeLeft = document.querySelector('countdown');

var startButton = document.querySelector("#start-btn");

var submitBtn = document.querySelector("#submit");

var divEl = document.querySelector('startdiv');

var scoreboard = document.querySelector("scoreboard");

let score = 0

let currQuestionIndex = []

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
// nextButton.addEventListener('click', nextQuestion);

function renderQuestions() {
  var currentQuestion = questions.question;


  // var h1Tag = document.createElement('h1');
  // h1Tag.textContent = currentQuestion.question
  // questionContainer.appendChild('h1');

  // var nextQuestion = currQuestionIndex + 1;
  // question = nextQuestion + '  ' + currentQuestion.myQuestions;
  for (var i = 0; i < currentQuestion + (questions.choices); i++) {
    var userChoice = currentQuestion.choices[i];

    var btn = document.createElement("button");
    questionContainer.appendChild(btn);
    btn.textContent = questions.choices;
    console.log(currentQuestion.userChoice);
    btn.style.width = '50px';
    btn.style.height = '50px';
  };
}



startButton.addEventListener("click", beginQuiz);
  console.log(startButton)
  function beginQuiz() {
  // divEl.display.remove('startdiv'); 
  score = 0;
  // questionContainer.display = 'block';
  renderQuestions();
  // availableQuestions = [...questions]
  // var pTag = document.createElement("p");
  // pTag.textContent = questions.question;
  // questionContainer.appendChild(pTag);

  // nextButton.addEventListener('click', renderQuestions());
}



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