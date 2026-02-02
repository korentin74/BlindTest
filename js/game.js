const audio = document.getElementById("audio");
const progress = document.querySelector(".progress");
const indicator = document.querySelector(".play-indicator");
const result = document.getElementById("result");

const DUREE_EXTRAIT = 6;

const musique = {
  src: "assets/audio/joe_le_taxi.mp3",
  answer: "joe le taxi"
};

// Sécurité
audio.controls = false;
audio.preload = "auto";

function startMusic() {
  audio.src = musique.src;
  audio.currentTime = 0;
  audio.play();

  indicator.classList.add("active");

  const startTime = Date.now();

  const interval = setInterval(() => {
    const elapsed = (Date.now() - startTime) / 1000;
    const percent = Math.min((elapsed / DUREE_EXTRAIT) * 100, 100);
    progress.style.width = percent + "%";
  }, 50);

  setTimeout(() => {
    audio.pause();
    indicator.classList.remove("active");
    clearInterval(interval);
  }, DUREE_EXTRAIT * 1000);
}

// Anti-triche TOTAL
audio.addEventListener("pause", () => {
  if (audio.currentTime < DUREE_EXTRAIT) {
    audio.play();
  }
});

audio.addEventListener("seeking", () => {
  audio.currentTime = 0;
});

// Lancer au clic utilisateur
document.getElementById("startBtn").addEventListener("click", startMusic);
