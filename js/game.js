const audio = document.getElementById("audio");
const result = document.getElementById("result");

const goodAnswer = "joe le taxi";

// extrait test
audio.src = "assets/audio/joe_le_taxi.mp3";
audio.load();

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
