const quizData = {
  Science: [
    {
      question: "What is the chemical symbol for water?",
      answers: ["CO2", "H2O", "O2", "NaCl"],
      correct: 1,
    },

    {
      question: "Which planet is known as the Red Planet?",
      answers: ["Earth", "Venus", "Mars", "Jupiter"],
      correct: 2,
    },

    {
      question: "How many bones are in the adult human body?",
      answers: ["106", "206", "306", "406"],
      correct: 1,
    },

    {
      question: "What gas do humans need to breathe?",
      answers: ["Carbon dioxide", "Oxygen", "Hydrogen", "Nitrogen"],
      correct: 1,
    },

    {
      question: "What is the center of an atom called?",
      answers: ["Electron", "Nucleus", "Proton", "Neutron"],
      correct: 1,
    },

    {
      question: "Which organ pumps blood around the body?",
      answers: ["Lungs", "Brain", "Heart", "Liver"],
      correct: 2,
    },

    {
      question: "What force pulls objects toward Earth?",
      answers: ["Magnetism", "Gravity", "Friction", "Electricity"],
      correct: 1,
    },

    {
      question: "What is the boiling point of water at sea level?",
      answers: ["50°C", "75°C", "100°C", "150°C"],
      correct: 2,
    },

    {
      question: "Which part of a plant absorbs water from the soil?",
      answers: ["Flower", "Leaf", "Stem", "Roots"],
      correct: 3,
    },

    {
      question: "What is the largest planet in our solar system?",
      answers: ["Earth", "Saturn", "Jupiter", "Neptune"],
      correct: 2,
    },
  ],

  History: [
    {
      question: "Who was the first President of the United States?",
      answers: [
        "Abraham Lincoln",
        "George Washington",
        "Thomas Jefferson",
        "John Adams",
      ],
      correct: 1,
    },

    {
      question: "In which year did World War II end?",
      answers: ["1943", "1944", "1945", "1946"],
      correct: 2,
    },

    {
      question: "Who built the pyramids of Giza?",
      answers: ["Romans", "Greeks", "Ancient Egyptians", "Vikings"],
      correct: 2,
    },

    {
      question: "The Great Wall is located in which country?",
      answers: ["Japan", "China", "India", "Korea"],
      correct: 1,
    },

    {
      question: "Who was known as the Maid of Orléans?",
      answers: ["Joan of Arc", "Cleopatra", "Marie Curie", "Queen Victoria"],
      correct: 0,
    },

    {
      question: "Which ancient civilization used hieroglyphics?",
      answers: ["Egyptians", "Romans", "Aztecs", "Persians"],
      correct: 0,
    },

    {
      question: "Who was the first man to walk on the Moon?",
      answers: ["Buzz Aldrin", "Neil Armstrong", "Yuri Gagarin", "John Glenn"],
      correct: 1,
    },

    {
      question: "Which ship famously sank in 1912?",
      answers: ["Titanic", "Mayflower", "Santa Maria", "Endeavour"],
      correct: 0,
    },

    {
      question: "Nelson Mandela became South Africa's president in which year?",
      answers: ["1990", "1992", "1994", "1996"],
      correct: 2,
    },

    {
      question: "Which empire was ruled by Julius Caesar?",
      answers: [
        "Roman Empire",
        "British Empire",
        "Ottoman Empire",
        "Mongol Empire",
      ],
      correct: 0,
    },
  ],

  Sports: [
    {
      question: "How many players are on a football team on the field?",
      answers: ["9", "10", "11", "12"],
      correct: 2,
    },

    {
      question: "Which country won the 2010 FIFA World Cup?",
      answers: ["Brazil", "Germany", "Spain", "Argentina"],
      correct: 2,
    },

    {
      question: "How many rings are on the Olympic flag?",
      answers: ["4", "5", "6", "7"],
      correct: 1,
    },

    {
      question: "Which sport uses a racket and shuttlecock?",
      answers: ["Tennis", "Badminton", "Cricket", "Golf"],
      correct: 1,
    },

    {
      question: "How many points is a touchdown worth in American football?",
      answers: ["3", "5", "6", "7"],
      correct: 2,
    },

    {
      question: "Which sport is played at Wimbledon?",
      answers: ["Football", "Tennis", "Golf", "Rugby"],
      correct: 1,
    },

    {
      question: "How many players are on a basketball team on the court?",
      answers: ["4", "5", "6", "7"],
      correct: 1,
    },

    {
      question: "Which country is famous for the All Blacks rugby team?",
      answers: ["Australia", "New Zealand", "England", "South Africa"],
      correct: 1,
    },

    {
      question: "What sport does Cristiano Ronaldo play?",
      answers: ["Tennis", "Basketball", "Football", "Cricket"],
      correct: 2,
    },

    {
      question: "How many holes are played in a standard round of golf?",
      answers: ["9", "12", "18", "20"],
      correct: 2,
    },
  ],

  Movies: [
    {
      question: "Who played Jack in Titanic?",
      answers: ["Brad Pitt", "Leonardo DiCaprio", "Tom Cruise", "Johnny Depp"],
      correct: 1,
    },

    {
      question: "Which movie features the character Simba?",
      answers: ["Frozen", "The Lion King", "Toy Story", "Aladdin"],
      correct: 1,
    },

    {
      question: "Who directed Jurassic Park?",
      answers: [
        "James Cameron",
        "Steven Spielberg",
        "Christopher Nolan",
        "George Lucas",
      ],
      correct: 1,
    },

    {
      question: "Which movie features the character Harry Potter?",
      answers: [
        "The Lord of the Rings",
        "Harry Potter",
        "The Hobbit",
        "Twilight",
      ],
      correct: 1,
    },

    {
      question: "Which superhero is also known as Bruce Wayne?",
      answers: ["Superman", "Iron Man", "Batman", "Spider-Man"],
      correct: 2,
    },

    {
      question: "Which movie won the Best Picture Oscar in 1998?",
      answers: ["Titanic", "The Matrix", "Gladiator", "Saving Private Ryan"],
      correct: 0,
    },

    {
      question: "Which fictional city is Batman associated with?",
      answers: ["Metropolis", "Gotham City", "Star City", "Central City"],
      correct: 1,
    },

    {
      question: "Who played Iron Man in the Marvel movies?",
      answers: [
        "Chris Evans",
        "Chris Hemsworth",
        "Robert Downey Jr.",
        "Mark Ruffalo",
      ],
      correct: 2,
    },

    {
      question: "Which movie features the character Elsa?",
      answers: ["Frozen", "Moana", "Tangled", "Cinderella"],
      correct: 0,
    },

    {
      question: "What is the name of the cowboy in Toy Story?",
      answers: ["Buzz", "Woody", "Andy", "Rex"],
      correct: 1,
    },
  ],
};

class Quiz {
  constructor(topic, questions) {
    this.topic = topic;

    this.questions = questions;

    this.currentQuestion = 0;

    this.score = 0;

    this.userAnswers = [];

    this.finished = false;

    this.timeLimit = 20;

    this.timeRemaining = this.timeLimit;

    this.timer = null;
  }

  start() {
    this.currentQuestion = 0;

    this.score = 0;

    this.userAnswers = [];

    this.finished = false;

    this.startTimer();

    showScreen("quiz");

    this.displayQuestion();
  }

  displayQuestion() {
    const question = this.questions[this.currentQuestion];

    if (!question) {
      this.finishQuiz();

      return;
    }

    const quizTitle = document.getElementById("quiz-title");

    const questionElement = document.getElementById("question");

    const questionNumber = document.getElementById("question-number");

    const questionBadge = document.getElementById("question-badge");

    const totalQuestions = document.getElementById("total-questions");

    const scoreElement = document.getElementById("score");

    const progressFill = document.getElementById("progress-fill");

    const percentageElement = document.getElementById("percentage");

    if (quizTitle) {
      quizTitle.textContent = `${this.topic} Quiz`;
    }

    if (questionElement) {
      questionElement.textContent = question.question;
    }

    if (questionNumber) {
      questionNumber.textContent = this.currentQuestion + 1;
    }

    if (questionBadge) {
      questionBadge.textContent = this.currentQuestion + 1;
    }

    if (totalQuestions) {
      totalQuestions.textContent = this.questions.length;
    }

    if (scoreElement) {
      scoreElement.textContent = this.score;
    }

    const progress = ((this.currentQuestion + 1) / this.questions.length) * 100;

    if (progressFill) {
      progressFill.style.width = `${progress}%`;
    }

    if (percentageElement) {
      percentageElement.textContent = `${Math.round(progress)}%`;
    }

    this.createAnswers(question);

    this.restoreAnswer();

    this.resetTimer();
  }

  createAnswers(question) {
    const container = document.querySelector(".answers");

    if (!container) {
      console.error("ERROR: .answers container was not found.");

      return;
    }

    container.innerHTML = "";

    question.answers.forEach((answer, index) => {
      const button = document.createElement("button");

      button.type = "button";

      button.className = "answer-option";

      const letter = document.createElement("span");

      letter.className = "answer-letter";

      letter.textContent = String.fromCharCode(65 + index);

      const text = document.createElement("span");

      text.className = "answer-text";

      text.textContent = answer;

      button.appendChild(letter);

      button.appendChild(text);

      button.addEventListener("click", () => {
        this.selectAnswer(index);
      });

      container.appendChild(button);
    });
  }

  selectAnswer(index) {
    if (this.userAnswers[this.currentQuestion] !== undefined) {
      return;
    }

    const question = this.questions[this.currentQuestion];

    if (!question) {
      return;
    }

    const buttons = document.querySelectorAll(".answer-option");

    if (!buttons[index]) {
      return;
    }

    this.userAnswers[this.currentQuestion] = index;

    this.stopTimer();

    if (index === question.correct) {
      buttons[index].classList.add("correct");

      this.score++;
    } else {
      buttons[index].classList.add("incorrect");

      if (buttons[question.correct]) {
        buttons[question.correct].classList.add("correct");
      }
    }

    buttons[index].classList.add("selected");

    buttons.forEach((button) => {
      button.disabled = true;
    });

    const scoreElement = document.getElementById("score");

    if (scoreElement) {
      scoreElement.textContent = this.score;
    }
  }

  restoreAnswer() {
    const answer = this.userAnswers[this.currentQuestion];

    if (answer === undefined) {
      return;
    }

    const question = this.questions[this.currentQuestion];

    if (!question) {
      return;
    }

    const buttons = document.querySelectorAll(".answer-option");

    if (!buttons[answer]) {
      return;
    }

    buttons[answer].classList.add("selected");

    if (answer === question.correct) {
      buttons[answer].classList.add("correct");
    } else {
      buttons[answer].classList.add("incorrect");

      if (buttons[question.correct]) {
        buttons[question.correct].classList.add("correct");
      }
    }

    buttons.forEach((button) => {
      button.disabled = true;
    });

    this.stopTimer();
  }

  nextQuestion() {
    if (this.userAnswers[this.currentQuestion] === undefined) {
      alert("Please select an answer first.");

      return;
    }

    this.stopTimer();

    this.currentQuestion++;

    if (this.currentQuestion >= this.questions.length) {
      this.finishQuiz();
    } else {
      this.displayQuestion();
    }
  }

  previousQuestion() {
    if (this.currentQuestion === 0) {
      alert("You are already on the first question.");

      return;
    }

    this.stopTimer();

    this.currentQuestion--;

    this.displayQuestion();
  }

  startTimer() {
    this.stopTimer();

    this.timeRemaining = this.timeLimit;

    this.updateTimerDisplay();

    this.timer = setInterval(() => {
      this.timeRemaining--;

      this.updateTimerDisplay();

      if (this.timeRemaining <= 0) {
        this.stopTimer();

        this.handleTimeUp();
      }
    }, 1000);
  }

  resetTimer() {
    this.startTimer();
  }

  stopTimer() {
    if (this.timer) {
      clearInterval(this.timer);

      this.timer = null;
    }
  }

  updateTimerDisplay() {
    const timerElement = document.getElementById("timer");

    const timerWrapper = document.querySelector(".timer-wrapper");

    if (timerElement) {
      timerElement.textContent = this.timeRemaining;
    }

    if (timerWrapper) {
      if (this.timeRemaining <= 5) {
        timerWrapper.classList.add("warning");
      } else {
        timerWrapper.classList.remove("warning");
      }
    }
  }

  handleTimeUp() {
    if (this.userAnswers[this.currentQuestion] !== undefined) {
      return;
    }

    const question = this.questions[this.currentQuestion];

    if (!question) {
      return;
    }

    this.userAnswers[this.currentQuestion] = -1;

    const buttons = document.querySelectorAll(".answer-option");

    if (buttons[question.correct]) {
      buttons[question.correct].classList.add("correct");
    }

    buttons.forEach((button) => {
      button.disabled = true;
    });

    setTimeout(() => {
      this.currentQuestion++;

      if (this.currentQuestion >= this.questions.length) {
        this.finishQuiz();
      } else {
        this.displayQuestion();
      }
    }, 1000);
  }

  finishQuiz() {
    this.stopTimer();

    this.finished = true;

    this.saveHighScore();

    showScreen("results");

    this.displayResults();
  }

  displayResults() {
    const total = this.questions.length;

    const correct = this.score;

    const incorrect = total - correct;

    const percentage = total > 0 ? Math.round((correct / total) * 100) : 0;

    const finalScore = document.getElementById("final-score");

    const finalTotal = document.getElementById("final-total");

    const finalPercentage = document.getElementById("final-percentage");

    if (finalScore) {
      finalScore.textContent = correct;
    }

    if (finalTotal) {
      finalTotal.textContent = total;
    }

    if (finalPercentage) {
      finalPercentage.textContent = `${percentage}%`;
    }

    const correctCount = document.getElementById("correct-count");

    const incorrectCount = document.getElementById("incorrect-count");

    if (correctCount) {
      correctCount.textContent = correct;
    }

    if (incorrectCount) {
      incorrectCount.textContent = incorrect;
    }

    const scoreCircle = document.querySelector(".score-circle");

    if (scoreCircle) {
      scoreCircle.style.background = `conic-gradient(
                    #4f46e5 0% ${percentage}%,
                    #e2e8f0 ${percentage}% 100%
                )`;
    }

    const message = document.querySelector(".result-message");

    if (message) {
      if (percentage === 100) {
        message.textContent = "Perfect score! Amazing work! 🎉";
      } else if (percentage >= 80) {
        message.textContent = "Excellent job! You really know your stuff! 👏";
      } else if (percentage >= 50) {
        message.textContent =
          "Good effort! Keep practising and improve your score! 💪";
      } else {
        message.textContent = "Keep learning and try again! You can do it! 📚";
      }
    }

    this.createReview();
  }

  createReview() {
    const reviewList = document.getElementById("review-list");

    if (!reviewList) {
      return;
    }

    reviewList.innerHTML = "";

    this.questions.forEach((question, index) => {
      const userAnswer = this.userAnswers[index];

      const isCorrect = userAnswer === question.correct;

      const item = document.createElement("div");

      item.className = isCorrect
        ? "review-item correct"
        : "review-item incorrect";

      const icon = document.createElement("span");

      icon.className = "review-icon";

      icon.textContent = isCorrect ? "✓" : "✕";

      const content = document.createElement("div");

      content.className = "review-content";

      const title = document.createElement("strong");

      title.textContent = `${index + 1}. ${question.question}`;

      const answer = document.createElement("p");

      let userAnswerText;

      if (
        userAnswer !== undefined &&
        userAnswer !== -1 &&
        question.answers[userAnswer]
      ) {
        userAnswerText = question.answers[userAnswer];
      } else {
        userAnswerText = "Not answered";
      }

      answer.textContent = `Your answer: ${userAnswerText}`;

      content.appendChild(title);

      content.appendChild(answer);

      if (!isCorrect) {
        const correctAnswer = document.createElement("small");

        correctAnswer.textContent = `Correct answer: ${question.answers[question.correct]}`;

        content.appendChild(correctAnswer);
      }

      item.appendChild(icon);

      item.appendChild(content);

      reviewList.appendChild(item);
    });
  }

  retake() {
    this.stopTimer();

    this.start();
  }

  saveHighScore() {
    const total = this.questions.length;

    const percentage = total > 0 ? Math.round((this.score / total) * 100) : 0;

    const savedScore = Number(localStorage.getItem("quizHighScore")) || 0;

    if (percentage > savedScore) {
      localStorage.setItem("quizHighScore", percentage);
    }

    updateHighScore();
  }
}

let currentQuiz = null;

function showScreen(screen) {
  const quizSelection = document.querySelector(".quiz-selection");

  const quizScreen = document.querySelector(".quiz-screen");

  const resultsScreen = document.querySelector(".results-screen");

  if (!quizSelection || !quizScreen || !resultsScreen) {
    console.error(
      "ERROR: Make sure .quiz-selection, .quiz-screen and .results-screen exist in your HTML.",
    );

    return;
  }

  quizSelection.classList.add("hidden");

  quizScreen.classList.add("hidden");

  resultsScreen.classList.add("hidden");

  if (screen === "home") {
    quizSelection.classList.remove("hidden");
  } else if (screen === "quiz") {
    quizScreen.classList.remove("hidden");
  } else if (screen === "results") {
    resultsScreen.classList.remove("hidden");
  } else {
    console.error(`Unknown screen: ${screen}`);

    return;
  }

  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

function startQuiz(topic) {
  if (!quizData[topic]) {
    console.error(`Quiz topic "${topic}" was not found.`);

    return;
  }

  currentQuiz = new Quiz(topic, quizData[topic]);

  currentQuiz.start();
}

function updateHighScore() {
  const highScoreElement = document.getElementById("high-score");

  if (!highScoreElement) {
    return;
  }

  const highScore = Number(localStorage.getItem("quizHighScore")) || 0;

  highScoreElement.textContent = `${highScore}%`;
}

document.addEventListener("DOMContentLoaded", () => {
  console.log("Quiz application loaded successfully.");

  const quizButtons = document.querySelectorAll(".quiz-btn");

  quizButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const card = button.closest(".quiz-card");

      if (!card) {
        console.error("Quiz card not found.");

        return;
      }

      const title = card.querySelector("h3");

      if (!title) {
        console.error("Quiz card title <h3> not found.");

        return;
      }

      const topic = title.textContent.trim();

      startQuiz(topic);
    });
  });

  const nextButton = document.getElementById("next-btn");

  if (nextButton) {
    nextButton.addEventListener("click", () => {
      if (currentQuiz) {
        currentQuiz.nextQuestion();
      } else {
        console.error("No quiz is currently active.");
      }
    });
  } else {
    console.error("Next button #next-btn not found.");
  }

  const previousButton = document.getElementById("previous-btn");

  if (previousButton) {
    previousButton.addEventListener("click", () => {
      if (currentQuiz) {
        currentQuiz.previousQuestion();
      }
    });
  }

  const retakeButton = document.getElementById("retake-btn");

  if (retakeButton) {
    retakeButton.addEventListener("click", () => {
      if (currentQuiz) {
        currentQuiz.retake();
      }
    });
  }

  const newQuizButton = document.getElementById("new-quiz-btn");

  if (newQuizButton) {
    newQuizButton.addEventListener("click", () => {
      if (currentQuiz) {
        currentQuiz.stopTimer();
      }

      showScreen("home");

      setTimeout(() => {
        const quizzesSection = document.getElementById("quizzes");

        if (quizzesSection) {
          quizzesSection.scrollIntoView({
            behavior: "smooth",
          });
        }
      }, 100);
    });
  }

  const backHomeButton = document.getElementById("back-home-btn");

  if (backHomeButton) {
    backHomeButton.addEventListener("click", () => {
      if (currentQuiz) {
        currentQuiz.stopTimer();
      }

      showScreen("home");
    });
  }

  updateHighScore();

  showScreen("home");
});
