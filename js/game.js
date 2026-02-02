const audio = document.getElementById("audio");
const result = document.getElementById("result");

let score = 0;
let current = 0;

// durée d'écoute (en secondes)
const DUREE_EXTRAIT = 6;

const musiques = [
  {
    src: "assets/audio/joe_le_taxi.mp3",
    answer: "joe le taxi"
  }
];

// empêcher toute interaction
audio.controls = false;
audio.preload = "auto";

// charger et jouer la musique
function loadMusic() {
  audio.src = musiques[current].src;
  audio.currentTime = 0;
  audio.load();

  // lecture forcée
  audio.play().catch(() => {});

  // arrêt automatique après X secondes
  setTimeout(() => {
    audio.pause();
  }, DUREE_EXTRAIT * 1000);

  result.textContent = "";
  document.getElementById("answer").value = "";
}

loadMusic();

function checkAnswer() {
  const input = document.getElementById("answer").value.toLowerCase();

  if (input.includes(musiques[current].answer)) {
    result.textContent = "✅ Bonne réponse !";
    result.style.color = "#00ffcc";
    score++;
  } else {
    result.textContent = "❌ Mauvaise réponse";
    result.style.color = "red";
  }
}
