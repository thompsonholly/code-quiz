var questionContainerEl = document.querySelector('.question-container');
var startButton = document.querySelector("#start-btn");
// var currentQuestion = document.querySelector(".startQuestion");
var divEl = document.querySelector('.startdiv');
var secondsLeft = 60;
var timeLeft = document.querySelector("#card-timer");
var seconds
let score = 0;
var totalLosses = '';
let currQuestionIndex = 0;
var choiceList = document.querySelector(".choice-list")
var nextButton = document.querySelector(".next-btn");

nextButton.addEventListener('click', function () {
  currQuestionIndex = currQuestionIndex + 1;

  if (currQuestionIndex < questions.length) {
    renderQuestion(currQuestionIndex);
  }
});
startButton.addEventListener('click', function () {
  startQuiz();
  setTimer();
  console.log(startButton);
})

function setTimer() {
  secondsLeft = 60;
  var timerInterval = setInterval(timer, 1000);
  function timer() {
    timerInterval.textcontent = secondsLeft;
    secondsLeft--;
    if (secondsLeft > 0) {
      timerInterval.textContent = secondsLeft + 'seconds remaining';
      secondsLeft--;
    }
    else (secondsLeft === 0); {
      timerInterval.textContent = '';
      totalLosses++;
      //Stops execution of action at set interval
      clearInterval("Time's Up!");
      console.log("timerup!");
    }
  } 1000;
}
var questions = [
  {
    question: "Which is not an animal? A. Dog B. Horse C. Robot",
    choices: ['A', 'B', 'C'],
    answer: 'C'
  },
  {
    question: 'What animal has fur? A. Bear B. Snake C. Alligator',
    choices: ['A', 'B', 'C'],
    answer: 1
  },
  {
    question: 'Which animal has stripes? A. Cheetah B. Zebra C. Emu',
    choices: ['A', 'B', 'C'],
    answer: 'B'
  },
  {
    question: "What animal sees best at night? A. Snail B. Squirrel C. Owl",
    choices: ['A', 'B', 'C'],
    answer: 'C'

  },
  {
    question: "Which animal lays eggs? A. Giraffe B. Robin C. Wildebeast",
    choices: ['A', 'B', 'C'],
    answer: 'B'

  }
]

function renderQuestion(questionIndex) {
  var startQuest = document.getElementById("startQuestion");
  startQuest.textContent = questions[questionIndex].question;

  // var userChoice = 
  for (var choiceIndex = 0; choiceIndex < questions[questionIndex].choices.length; choiceIndex++) {
    var btn = document.createElement("button");
    choiceList.appendChild(btn);
    btn.textContent = questions[questionIndex].choices[choiceIndex];
    btn.style.width = '50px';
    btn.style.height = '50px';
    console.log("yep");
  }
  nextButton.style.display = 'block';
};



function startQuiz() {
  console.log('Quiz has started')
  renderQuestion(currQuestionIndex);


}