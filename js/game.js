const audio = document.getElementById("audio");
const result = document.getElementById("result");

let score = 0;
let current = 0;

const musiques = [
  {
    src: "assets/audio/joe_le_taxi.mp3",
    answer: "joe le taxi"
  },
  {
    src: "assets/audio/test.mp3",
    answer: "test"
  }
];

// charger une musique
function loadMusic() {
  audio.src = musiques[current].src;
  audio.load();
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

  setTimeout(nextMusic, 1200);
}

function nextMusic() {
  current++;

  if (current < musiques.length) {
    loadMusic();
  } else {
    result.textContent = `🎉 Partie terminée ! Score : ${score}/${musiques.length}`;
    audio.pause();
  }
}
