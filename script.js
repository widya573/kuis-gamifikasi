const questions = [
  {
    question: "Apa fungsi dari kabel twisted pair dalam jaringan?",
    answers: [
      { text: "Mengurangi interferensi", correct: true },
      { text: "Meningkatkan suara", correct: false },
      { text: "Menambah daya listrik", correct: false },
      { text: "Menyimpan data", correct: false }
    ]
  },
  {
    question: "Topologi yang semua perangkat terhubung ke satu kabel utama adalah?",
    answers: [
      { text: "Bus", correct: true },
      { text: "Star", correct: false },
      { text: "Ring", correct: false },
      { text: "Mesh", correct: false }
    ]
  },
  {
    question: "Kabel yang paling tahan gangguan elektromagnetik adalah?",
    answers: [
      { text: "Fiber Optic", correct: true },
      { text: "UTP", correct: false },
      { text: "STP", correct: false },
      { text: "Coaxial", correct: false }
    ]
  },
  {
    question: "Topologi yang menggunakan perangkat pusat (hub/switch)?",
    answers: [
      { text: "Star", correct: true },
      { text: "Bus", correct: false },
      { text: "Ring", correct: false },
      { text: "Tree", correct: false }
    ]
  },
  {
    question: "Apa itu RJ45?",
    answers: [
      { text: "Konektor jaringan", correct: true },
      { text: "Protokol data", correct: false },
      { text: "Jenis topologi", correct: false },
      { text: "Jenis server", correct: false }
    ]
  },
  {
    question: "Kabel UTP biasanya memiliki berapa pasang kabel?",
    answers: [
      { text: "4 pasang", correct: true },
      { text: "2 pasang", correct: false },
      { text: "6 pasang", correct: false },
      { text: "8 pasang", correct: false }
    ]
  },
  {
    question: "Topologi yang mahal tapi sangat handal?",
    answers: [
      { text: "Mesh", correct: true },
      { text: "Star", correct: false },
      { text: "Bus", correct: false },
      { text: "Ring", correct: false }
    ]
  },
  {
    question: "Apa kepanjangan dari UTP?",
    answers: [
      { text: "Unshielded Twisted Pair", correct: true },
      { text: "Universal Type Port", correct: false },
      { text: "Unit Transfer Protocol", correct: false },
      { text: "Unstable Transfer Point", correct: false }
    ]
  },
  {
    question: "Kabel yang cocok untuk jaringan luar ruangan?",
    answers: [
      { text: "Fiber Optic", correct: true },
      { text: "UTP", correct: false },
      { text: "STP", correct: false },
      { text: "Flat Cable", correct: false }
    ]
  },
  {
    question: "Topologi yang tiap perangkat punya dua koneksi?",
    answers: [
      { text: "Ring", correct: true },
      { text: "Bus", correct: false },
      { text: "Star", correct: false },
      { text: "Hybrid", correct: false }
    ]
  }
];

let currentQuestionIndex = 0;
let score = 0;
let namaSiswa = '';
let kelasSiswa = '';

const questionNumber = document.getElementById('question-number');
const questionElement = document.getElementById('question');
const answerButtons = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-btn');
const scoreText = document.getElementById('score');
const formContainer = document.getElementById('form-container');
const quizContainer = document.getElementById('quiz-container');
const resultContainer = document.getElementById('result-container');
const finalIdentity = document.getElementById('final-identity');
const finalScore = document.getElementById('final-score');
const starsContainer = document.getElementById('stars');

function masukKuis() {
  const nama = document.getElementById('nama').value.trim();
  const kelas = document.getElementById('kelas').value.trim();

  if (!nama || !kelas) {
    alert('Nama dan kelas wajib diisi!');
    return;
  }

  namaSiswa = nama;
  kelasSiswa = kelas;

  formContainer.classList.add('hide');
  quizContainer.classList.remove('hide');
  startQuiz();
}

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerText = 'Selanjutnya';
  shuffleArray(questions);
  showQuestion();
}

function showQuestion() {
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  questionNumber.innerText = `Soal ${currentQuestionIndex + 1} dari ${questions.length}`;
  questionElement.innerText = currentQuestion.question;

  let shuffledAnswers = [...currentQuestion.answers];
  shuffleArray(shuffledAnswers);

  shuffledAnswers.forEach(answer => {
    const button = document.createElement('button');
    button.innerText = answer.text;
    button.classList.add('btn');
    button.addEventListener('click', () => selectAnswer(button, answer.correct));
    answerButtons.appendChild(button);
  });
}

function resetState() {
  nextButton.style.display = 'none';
  answerButtons.innerHTML = '';
}

function selectAnswer(button, correct) {
  if (correct) {
    score++;
    button.style.backgroundColor = '#2ecc71';
  } else {
    button.style.backgroundColor = '#e74c3c';
  }

  Array.from(answerButtons.children).forEach(btn => btn.disabled = true);
  nextButton.style.display = 'inline-block';
  scoreText.innerText = `Skor: ${score}`;
}

nextButton.addEventListener('click', () => {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showResult();
  }
});

function showResult() {
  quizContainer.classList.add('hide');
  resultContainer.classList.remove('hide');

  finalIdentity.innerHTML = `Nama: <strong>${namaSiswa}</strong><br>Kelas: <strong>${kelasSiswa}</strong>`;
  finalScore.innerText = `Skor akhir kamu: ${score} dari ${questions.length}`;
  starsContainer.innerHTML = '⭐'.repeat(score >= 9 ? 5 : score >= 7 ? 4 : score >= 5 ? 3 : score >= 3 ? 2 : 1);
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}
