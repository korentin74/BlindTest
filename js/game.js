const audio = document.getElementById("audio");
const startBtn = document.getElementById("startBtn");
const answerInput = document.getElementById("answer");
const validateBtn = document.getElementById("validateBtn");
const result = document.getElementById("result");

const DUREE_EXTRAIT = 6;

const musique = {
  src: "assets/audio/joe_le_taxi.mp3",
  answer: "joe le taxi"
};

// sécurité
audio.controls = false;
audio.preload = "auto";

startBtn.addEventListener("click", () => {
  startBtn.disabled = true;
  answerInput.disabled = false;
  validateBtn.disabled = false;

  audio.src = musique.src;
  audio.currentTime = 0;
  audio.play();

  // arrêt forcé
  setTimeout(() => {
    audio.pause();
  }, DUREE_EXTRAIT * 1000);
});

function checkAnswer() {
  const input = answerInput.value.toLowerCase();

  if (input.includes(musique.answer)) {
    result.textContent = "✅ Bonne réponse !";
    result.style.color = "#00ffcc";
  } else {
    result.textContent = "❌ Mauvaise réponse";
    result.style.color = "red";
  }
}
