let time = 10;
let clicks = 0;
let highScore = localStorage.getItem("highScore") || 0;

const timer = document.getElementById("time");
const clicker = document.getElementById("clicks");
const highScoreText = document.getElementById("high-score");
const btn = document.getElementById("btn");
const refreshBtn = document.getElementById("refresh-btn");

highScoreText.textContent = highScore;

let countdown = setInterval(function() {
  if (time > 0) {
    time--;
    timer.textContent = time;
  } else {
    clearInterval(countdown);
    btn.disabled = true;
    if (clicks > highScore) {
      highScore = clicks;
      localStorage.setItem("highScore", highScore);
      highScoreText.textContent = highScore;
    }
    alert("Time's up! You clicked the button " + clicks + " times.");
  }
}, 1000);

btn.addEventListener("click", function() {
  clicks++;
  clicker.textContent = clicks;
});

refreshBtn.addEventListener("click", function() {
  location.reload();
});
