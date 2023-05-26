const data = [
  {
    id: 1,
    question: "¿Cuál fue el primer hombre en pisar la luna?",
    answers: [
      { answer: "Neil Armstrong", isCorrect: true },
      { answer: "Buzz Aldrin", isCorrect: false },
      { answer: "Yuri Gagarin", isCorrect: false },
      { answer: "Alan Shepard", isCorrect: false },
    ],
  },
  {
    id: 2,
    question: "¿Cuál es el autor de la novela Cien años de soledad?",
    answers: [
      { answer: "Jorge Luis Borges", isCorrect: false },
      { answer: "Mario Vargas Llosa", isCorrect: false },
      { answer: "Gabriel García Márquez", isCorrect: true },
      { answer: "Isabel Allende", isCorrect: false },
    ],
  },
  {
    id: 1,
    question: "¿Cuál es el metal más abundante en la corteza terrestre?",
    answers: [
      { answer: "Hierro", isCorrect: true },
      { answer: "Aluminio", isCorrect: false },
      { answer: "Cobre", isCorrect: false },
      { answer: "Oro", isCorrect: false },
    ],
  },
];

const gameScreen = document.querySelector(".game");
const resultScreen = document.querySelector(".result");
const question = document.querySelector(".question");
const answersContainer = document.querySelector(".answers");
const submit = document.querySelector(".submit");
const play = document.querySelector(".play");

let qIndex = 0;
let correctCount = 0;
let wrongCount = 0;
let total = 0;
let selectedAnswer;

const playAgain = () => {
  qIndex = 0;
  correctCount = 0;
  wrongCount = 0;
  total = 0;
  showQuestion(qIndex);
};

play.addEventListener("click",()=>{
  resultScreen.style.display = "none";
  gameScreen.style.display = "block";
  playAgain()
})

const showResult = () => {
  resultScreen.style.display = "block";
  gameScreen.style.display = "none";

  resultScreen.querySelector(
    ".correct"
  ).textContent = `Correct Answers: ${correctCount}`;

  resultScreen.querySelector(
    ".wrong"
  ).textContent = `Wrong Answers: ${wrongCount}`;

  resultScreen.querySelector(".score").textContent = `Score: ${
    (correctCount - wrongCount) * 10
  }`;
};

const showQuestion = (qNumber) => {
  if (qIndex === data.length) return showResult();
  selectedAnswer = null;
  question.textContent = data[qNumber].question;
  answersContainer.innerHTML = data[qNumber].answers
    .map(
      (item, index) =>
        `
  <div class="answer">
      <input type="radio" id=${index} name="answer" value=${item.isCorrect} />
      <label for="1">${item.answer}</label>
  </div>
  `
    )
    .join("");

  selectAnswer();
};

const selectAnswer = () => {
  answersContainer.querySelectorAll("input").forEach((el) => {
    el.addEventListener("click", (e) => {
      selectedAnswer = e.target.value;
    });
  });
};

const submitAnswer = () => {
  submit.addEventListener("click", () => {
    if (selectedAnswer !== null) {
      selectedAnswer === "true" ? correctCount++ : wrongCount++;
      qIndex++;
      showQuestion(qIndex);
    } else alert("Select an answer!");
  });
};

showQuestion(qIndex);
submitAnswer();