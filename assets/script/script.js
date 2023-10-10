

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
    choice1: 'A',
    choice2: 'B',
    choice3: 'C',
    answer: 3
  },
  {
    question: 'What animal has fur? A. Bear B. Snake C. Alligator',
    choice1: 'A',
    choice2: 'B',
    choice3: 'C',
    answer: 1
  },
  {
    question: 'Which animal has stripes? A. Cheetah B. Zebra C. Emu',
    choice1: 'A',
    choice2: 'B',
    choice3: 'C',
    answer: 2
  },
  {
    question: "What animal sees best at night? A. Snail B. Squirrel C. Owl",
    choice1: 'A',
    choice2: 'B',
    choice3: 'C',
    answer: 3

  },
  {
    question: "Which animal lays eggs? A. Giraffe B. Robin C. Wildebeast",
    choice1: 'A',
    choice2: 'B',
    choice3: 'C',
    answer: 2

  }
]
var max_questions = 5;
// var wins = document.querySelector(".win");
// var losses = document.querySelector(".loss");

// startButton.addEventListener('click', beginQuiz);
// startButton.onclick = () => {

beginQuiz = () => {
  divEl.remove('startdiv');
  score = 0;
  questionContainer.style.display = 'block';
  availableQuestions = [...questions]

  getNewQuestion()

}

function getNewQuestion() {
  if (availableQuestions.length === 0 || questionCounter > max_questions) {
    localStorage.setItem('mostRecentScore', score)
    return window.location.assign('/end.html')

  }
  questionCounte++
  preogressText.innerText = `Question ${questionCounter} of ${max_questions}`;
  progressBarFull.style.width = `${(questionContainer / max_questions) * 100} %` //percent progress- may not need.

  const questionIndex = Math.floor(Math.random() * availableQuestions.length);
  currentQuestion = availableQuestions[questionsIndex]
  question.innerText = currentQuestion.question;

  choices.forEach(choice => {
    const number = choice.dataset['number'];
    choice.innerText = currentQuestion['choice' + number];
  })
  availableQuestions.splice(questionIndex, 1);

  acceptingAnswers = true;

}

choices.forEach(choice => {
  choice.addEventListener('click', e => {
    if (!acceptingAnswers) return
    acceptingAnswers = false;
    const selectedChoice = e.target;
    const selectedAnswer = selectedChoice.dataset['number'];

    var classToApply = selectedAnswer == currentQuestion.answer ? 'correct' :
      'incorrect'

    if (classToApply === 'correct') {
      score++;
    }
    selectedChoice.parentElement.classList.add(classToApply);

    setTimeout(() => {
      selectedChoice.parentElement.classList.remove(classToApply);
      getNewQuestion()

    }, 1000)

  })
})
// function renderQuestions() {
//   var currentQuestion = myQuestions[currQuestionIndex]; {
//     for (var i = 0; i < currentQuestion.userChoices; i++);

//   }

// }

incrementScore = num => {
  score += num;
  scoreText.innerText = score;
}
// This function gets current question from the array and displays on the screen.

// clear out anything already in the questionContainer

// var pTag = document.createElement("p");
// pTag.textContent = q.question;
// questionContainer.appendChild(pTag);

// nextButton.addEventListener('click', renderQuestions);


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

function renderQuestions() {
  var currentQuestion = myQuestions[currQuestionIndex];
  // var nextQuestion = currQuestionIndex + 1;
  // question = nextQuestion + '  ' + currentQuestion.myQuestions;
  for (var i = 0; i < currentQuestion.userChoices; i++) {
    var userChoice = currentQuestion.userChoices[i];

    var btn = document.createElement("button");
    questionContainer.appendChild(btn);
    btn.textContent = userChoice;
    console.log(currentQuestion.userChoices);
    btn.style.width = '50px';
    btn.style.height = '50px';
  };
}

questionContainer.addEventListener('click', function (event) {
  if (event.target.matches("button")) {
    var currentQuestion = myQuestions[currQuestionIndex];
    console.log(event.target.textContent + " 1 " + currentQuestion.answer);
  }
  if (event.target.textContent != currentQuestion.answer) {
    console.log(currentQuestion.userChoices + " 2 " + answer);
    answerIsWrong()
  } else {
    (event.target.textContent == currentQuestion.answer)
    console.log(currentQuestion.userChoices + " + " + answer);
    answerIsCorrect();

  }
  currQuestionIndex++
  // renderQuestions()

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

function beginQuiz() {

  currQuestionIndex = 0;
  totalWins = 0;
  totalLosses = 0;
  console.log("Begin Quiz Entered");

  renderQuestions();

  countdown();

  questionContainer.style.display = 'block';
  divEl.style.display = 'none';



  currQuestionIndex = 0;
  renderQuestions();
  console.log(divEl);
  console.log(questionContainer);

}