const highScoresList = document.getElementById("highScoresList");
// get the highscore out of our storage
const highScores = JSON.parse(localStorage.getItem("highScores")) || [];
// add li to our unordered list
highScoresList.innerHTML = highScores
  .map(score => {
    return `<li class="high-score">${score.name} - ${score.score}</li>`;
  })
  .join("");
