let questions = [
  {
    question: "Apa itu multimedia?",
    answers: [
      { text: "Penggabungan teks, gambar, suara, dan video", correct: true },
      { text: "Media cetak saja", correct: false },
      { text: "Hanya video", correct: false },
      { text: "Hanya animasi", correct: false }
    ]
  },
  {
    question: "Jenis perangkat lunak untuk editing video adalah?",
    answers: [
      { text: "Adobe Premiere Pro", correct: true },
      { text: "Microsoft Excel", correct: false },
      { text: "CorelDRAW", correct: false },
      { text: "Photoshop", correct: false }
    ]
  },
  {
    question: "Format video populer adalah?",
    answers: [
      { text: ".mp4", correct: true },
      { text: ".docx", correct: false },
      { text: ".ppt", correct: false },
      { text: ".mp3", correct: false }
    ]
  },
  {
    question: "Apa fungsi storyboard dalam produksi video?",
    answers: [
      { text: "Merencanakan adegan", correct: true },
      { text: "Mengedit suara", correct: false },
      { text: "Mengatur pencahayaan", correct: false },
      { text: "Memperbesar resolusi", correct: false }
    ]
  },
  {
    question: "Resolusi video Full HD adalah?",
    answers: [
      { text: "1920x1080", correct: true },
      { text: "800x600", correct: false },
      { text: "1024x768", correct: false },
      { text: "1280x720", correct: false }
    ]
  },
  {
    question: "Software open source untuk edit video?",
    answers: [
      { text: "Shotcut", correct: true },
      { text: "MS Word", correct: false },
      { text: "Windows Media Player", correct: false },
      { text: "Excel", correct: false }
    ]
  },
  {
    question: "FPS adalah singkatan dari?",
    answers: [
      { text: "Frame Per Second", correct: true },
      { text: "Fast Print Setting", correct: false },
      { text: "Film Picture Sound", correct: false },
      { text: "Format Pixel Shape", correct: false }
    ]
  },
  {
    question: "Aplikasi yang digunakan untuk animasi 2D?",
    answers: [
      { text: "Adobe Animate", correct: true },
      { text: "Google Chrome", correct: false },
      { text: "Excel", correct: false },
      { text: "Winamp", correct: false }
    ]
  },
  {
    question: "Suara dalam multimedia disebut?",
    answers: [
      { text: "Audio", correct: true },
      { text: "Video", correct: false },
      { text: "Teks", correct: false },
      { text: "Frame", correct: false }
    ]
  },
  {
    question: "Multimedia interaktif memerlukan?",
    answers: [
      { text: "Partisipasi pengguna", correct: true },
      { text: "Hanya tampilan gambar", correct: false },
      { text: "Buku cetak", correct: false },
      { text: "Printer", correct: false }
    ]
  }
];

let currentQuestionIndex = 0;
let score = 0;
let namaSiswa = '';
let kelasSiswa = '';

// Elemen
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

function masukKuis() {
  const nama = document.getElementById('nama').value.trim();
  const kelas = document.getElementById('kelas').value.trim();

  if (nama === '' || kelas === '') {
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
  showQuestion();
}

function showQuestion() {
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  questionNumber.innerText = `Soal ${currentQuestionIndex + 1} dari ${questions.length}`;
  questionElement.innerText = currentQuestion.question;

  currentQuestion.answers.forEach(answer => {
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

  Array.from(answerButtons.children).forEach(btn => {
    btn.disabled = true;
  });

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
}
