const questions = [
  {
    question: "Apa kepanjangan dari RGB dalam multimedia?",
    answers: [
      { text: "Red, Green, Blue", correct: true },
      { text: "Range, Gray, Black", correct: false },
      { text: "Ratio, Gain, Bright", correct: false },
      { text: "Red, Gray, Black", correct: false }
    ]
  },
  {
    question: "Software yang digunakan untuk mengedit gambar disebut?",
    answers: [
      { text: "Photoshop", correct: true },
      { text: "PowerPoint", correct: false },
      { text: "Excel", correct: false },
      { text: "Audacity", correct: false }
    ]
  },
  {
    question: "Format file video yang umum digunakan adalah?",
    answers: [
      { text: ".mp4", correct: true },
      { text: ".jpg", correct: false },
      { text: ".mp3", correct: false },
      { text: ".docx", correct: false }
    ]
  },
  {
    question: "Apa fungsi utama dari Adobe Premiere Pro?",
    answers: [
      { text: "Edit video", correct: true },
      { text: "Membuat presentasi", correct: false },
      { text: "Mengedit teks", correct: false },
      { text: "Menggambar vektor", correct: false }
    ]
  },
  {
    question: "Berikut ini yang termasuk media interaktif adalah?",
    answers: [
      { text: "Game edukasi", correct: true },
      { text: "Buku cetak", correct: false },
      { text: "Poster", correct: false },
      { text: "Spanduk", correct: false }
    ]
  },
  {
    question: "Apa nama alat untuk menangkap gambar secara digital?",
    answers: [
      { text: "Kamera digital", correct: true },
      { text: "Speaker", correct: false },
      { text: "Monitor", correct: false },
      { text: "Scanner", correct: false }
    ]
  },
  {
    question: "Apa itu resolusi dalam konteks multimedia?",
    answers: [
      { text: "Jumlah piksel dalam sebuah gambar", correct: true },
      { text: "Ukuran kertas", correct: false },
      { text: "Durasi suara", correct: false },
      { text: "Jenis font", correct: false }
    ]
  },
  {
    question: "Apa kegunaan software Audacity?",
    answers: [
      { text: "Mengedit suara", correct: true },
      { text: "Membuat grafik", correct: false },
      { text: "Mengetik dokumen", correct: false },
      { text: "Merekam video", correct: false }
    ]
  },
  {
    question: "Berikut ini yang merupakan unsur multimedia adalah?",
    answers: [
      { text: "Teks, gambar, suara, video, dan animasi", correct: true },
      { text: "Kertas, tinta, lem, dan spidol", correct: false },
      { text: "Word, Excel, PowerPoint", correct: false },
      { text: "Keyboard, mouse, CPU", correct: false }
    ]
  },
  {
    question: "Software untuk desain grafis berbasis vektor adalah?",
    answers: [
      { text: "CorelDRAW", correct: true },
      { text: "Photoshop", correct: false },
      { text: "Audacity", correct: false },
      { text: "Notepad", correct: false }
    ]
  }
];

const questionElement = document.getElementById('question');
const answerButtons = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-btn');
const scoreText = document.getElementById('score');

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = 'Selanjutnya';
  showQuestion();
}

function showQuestion() {
  resetState();
  const currentQuestion = questions[currentQuestionIndex];
  questionElement.innerText = currentQuestion.question;

  currentQuestion.answers.forEach(answer => {
    const button = document.createElement('button');
    button.innerText = answer.text;
    button.classList.add('btn');
    button.addEventListener('click', () => selectAnswer(answer));
    answerButtons.appendChild(button);
  });
}

function resetState() {
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

function selectAnswer(answer) {
  if (answer.correct) {
    score++;
    scoreText.innerText = `Skor: ${score}`;
  }
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    questionElement.innerText = "Kuis Selesai! Skor akhir kamu: " + score + " dari " + questions.length;
    resetState();
    nextButton.style.display = 'none';
  }
}

nextButton.addEventListener('click', () => {
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  }
});

startQuiz();
