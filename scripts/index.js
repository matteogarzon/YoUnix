// Matteo Garzon

const toggleButton = document.getElementById('toggleButton');
const navbar = document.getElementById('navbar');

toggleButton.addEventListener('click', () => {
    navbar.classList.toggle('open'); 
    toggleButton.classList.toggle('shift-right');});

const menuToggles = document.querySelectorAll('.menu-toggle');
menuToggles.forEach(toggle => {
    toggle.addEventListener('click', function(event) {
        const dropdownContent = this.nextElementSibling;
        dropdownContent.classList.toggle('open');
        
        const arrow = this.querySelector('.arrow');
        if (dropdownContent.classList.contains('open')) {
            arrow.textContent = '▲'; 
        } else {
            arrow.textContent = '▼';
        }
        event.preventDefault();
    });
});

// TITLE LOADING
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

let interval = null;
let h1text = document.querySelector("h1");

let iteration = 0;

clearInterval(interval);

interval = setInterval(() => {
  h1text.innerText = h1text.innerText
    .split("")
    .map((letter, index) => {
      if (index < iteration) {
        return h1text.dataset.value[index];
      }

      return letters[Math.floor(Math.random() * 26)]
    })
    .join("");

  if (iteration >= h1text.dataset.value.length) {
    clearInterval(interval);
  }

  iteration += 1 / 3;
}, 100);


// REVEAL ELEMENTS ON SCROLL
let rowItems = [...document.querySelectorAll('.appear')];

let options = {
  rootMargin: '20%',
  threshold: 0.0
}

// triggered when item comes to the viewport
let observer = new IntersectionObserver(showItem, options);

function showItem(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
    }
  })
}

rowItems.forEach(item => {
  observer.observe(item); 
})


// QUIZ
const questionNumber = document.querySelector('#question-number');
const questionTitle = document.querySelector('#question-title');
const answerOptions = document.querySelector('#answer-options');
const nextButton = document.querySelector('#button-next');
const progressBarQuiz = document.querySelector('#progress-bar-quiz');
const quizProgress = document.querySelector('#quiz-progress');

let currentQuestionIndex, score, totalQuestions, countOptions, isSolutionShown, correctAnswerIndex;
score = 0;
isSolutionShown = false;

function startQuiz(questions) {

  totalQuestions = questions.length
  currentQuestionIndex = 0;

  setNextQuestion(questions[currentQuestionIndex]);
}

function setNextQuestion(question) {
  countOptions = question.options.length; // number of options for each question
  questionTitle.innerText = question.question;
  questionNumber.innerHTML = "Question " + (currentQuestionIndex + 1) + " out of " + totalQuestions;
  progressBarQuiz.style.width = String(((currentQuestionIndex + 1) / totalQuestions) * 100) + "%";

  if (currentQuestionIndex + 1 == totalQuestions) {
    nextButton.innerHTML = "End";
  }

  question.options.forEach((option, index) => {
    answerOptions.children[index].children[0].children[1].innerHTML = option;
  });


  for (let i = 0; i < 5; i++) {
    if (i < countOptions) {
      answerOptions.children[i].classList.remove('d-none');
    }
    else {
      answerOptions.children[i].classList.add('d-none');
    }
  }
}

nextButton.addEventListener("click", () => {
  const answerOptionsArray = Array.from(answerOptions.querySelectorAll("input"));
  const answerIndex = Array.from(answerOptionsArray).findIndex((radio) => radio.checked);

  if (currentQuestionIndex !== totalQuestions) {
    correctAnswerIndex = questions[currentQuestionIndex].correct;
  }
  else {
    isSolutionShown = true;
  }
  
  if (isSolutionShown == false) {
    answerOptions.children[correctAnswerIndex].classList.remove("bg-dark");
    answerOptions.children[correctAnswerIndex].classList.add("bg-success");

    // user cannot change answer after submitting answer
    answerOptionsArray.forEach((option) => {
      option.disabled = true;
    })

    isSolutionShown = true;
  }
  else {
    isSolutionShown = false;
    answerOptions.children[correctAnswerIndex].classList.add("bg-dark");
    answerOptions.children[correctAnswerIndex].classList.remove("bg-success");

    answerOptionsArray.forEach((option) => {
      option.disabled = false;
    })

    if (currentQuestionIndex == totalQuestions) {
      answerOptionsArray[answerIndex].checked = false;
      resetQuiz();
    }
    else {
      if (answerIndex !== -1) { // !== -1: option has been selected
        if (answerIndex == correctAnswerIndex) {
          score++;
        }
        currentQuestionIndex++;
        
        if (questions.length > currentQuestionIndex) {
          setNextQuestion(questions[currentQuestionIndex]);
          answerOptionsArray[answerIndex].checked = false;
        } else {
          endQuiz();
        }
      } else {
        alert("Please select an answer.");
      }
    }

  }
});

function endQuiz() {
  quizProgress.classList.add("d-none");
  answerOptions.classList.add("d-none");
  questionNumber.classList.add("d-none");
  progressBarQuiz.style.width = String(((score) / totalQuestions) * 100) + "%";
  questionTitle.innerHTML = "Final score: " + String(score) + " / " + String(totalQuestions);
  nextButton.innerHTML = "Restart";
}

function resetQuiz() {
  score = 0;
  quizProgress.classList.remove("d-none");
  answerOptions.classList.remove("d-none");
  questionNumber.classList.remove("d-none");
  nextButton.innerHTML = "Next";
  startQuiz(questions);
}