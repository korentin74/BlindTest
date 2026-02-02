const audio = document.getElementById("audio");
const result = document.getElementById("result");

const goodAnswer = "despacito";

// extrait test (à remplacer plus tard)
audio.src = "assets/audio/Vanessa Paradis  - Joe le taxi.mp3";

function checkAnswer() {
  const userAnswer = document.getElementById("answer").value.toLowerCase();

  if (userAnswer.includes(goodAnswer)) {
    result.textContent = "✅ Bonne réponse !";
    result.style.color = "#00ffcc";
  } else {
    result.textContent = "❌ Mauvaise réponse";
    result.style.color = "red";
  }
}
