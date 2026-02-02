const audio = document.getElementById("audio");
const progress = document.querySelector(".player-progress");
const time = document.querySelector(".player-time");
const result = document.getElementById("result");

const DUREE = 6; // secondes

const musique = {
  src: "assets/audio/joe_le_taxi.mp3",
  answer: "joe le taxi"
};

// Lancer automatiquement (clic utilisateur requis par navigateur)
window.addEventListener("click", startOnce, { once: true });

function startOnce() {
  audio.src = musique.src;
  audio.currentTime = 0;
  audio.play();

  const start = Date.now();

  const interval = setInterval(() => {
    const elapsed = (Date.now() - start) / 1000;
    const percent = Math.min((elapsed / DUREE) * 100, 100);

    progress.style.width = percent + "%";
    time.textContent = `0:${Math.max(0, Math.ceil(DUREE - elapsed))}`;

    if (elapsed >= DUREE) {
      audio.pause();
      clearInterval(interval);
    }
  }, 50);
}

function checkAnswer() {
  const input = document.getElementById("answer").value.toLowerCase();

  if (input.includes(musique.answer)) {
    result.textContent = "✅ Bonne réponse !";
    result.style.color = "#00ffcc";
  } else {
    result.textContent = "❌ Mauvaise réponse";
    result.style.color = "red";
  }
}
