const audio = document.getElementById("audio");
const result = document.getElementById("result");
const startBtn = document.getElementById("startBtn");
const answerInput = document.getElementById("answer");
const validateBtn = document.getElementById("validateBtn");

const DUREE_EXTRAIT = 6;

const musiques = [
  {
    src: "assets/audio/joe_le_taxi.mp3",
    answer: "joe le taxi"
  }
];

let current = 0;
let score = 0;

// aucune interaction possible
audio.controls = false;

startBtn.addEventListener("click", () => {
  startBtn.style.display = "none";
  answerInput.disabled = false;
  validateBtn.disabled = false;

  playMusic();
});

function playMusic() {
  audio.src = musiques[current].src;
  audio.currentTime = 0;
  audio.load();

  audio.play();

  setTimeout(() => {
    audio.pause();
  }, DUREE_EXTRAIT * 1000);
}

function checkAnswer() {
  const input = answerInput.value.toLowerCase();

  if (input.includes(musiques[current].answer)) {
    result.textContent = "✅ Bonne réponse !";
    result.style.color = "#00ffcc";
    score++;
  } else {
    result.textContent = "❌ Mauvaise réponse";
    result.style.color = "red";
  }
}
