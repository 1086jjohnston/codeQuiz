var userScores = JSON.parse(localStorage.getItem("userData"));
var highScoresArea = document.querySelector("#highScoresList");
var backBtn = document.querySelector("#backButton");
var clearBtn = document.querySelector("#clearScores");


function scoreDisplay() {
    if (userScores !== null) {
        var scoreList = document.createElement("ol");
        scoreList.className = "scoreListClass";
        for (var i = 0; i < userScores.length; i++) {
            var initials = userScores[i].inits;
            var scores = userScores[i].userScore
            var scoreEntry = document.createElement("li");
            scoreEntry.innerHTML = initials + " - " + scores;
            scoreList.appendChild(scoreEntry);
        }
        highScoresArea.appendChild(scoreList);
    }
};

scoreDisplay();

backBtn.addEventListener("click", function () {
    location.href = "index.html";
});

clearBtn.addEventListener("click", function () {
    highScoresArea.innerHTML = "";
    window.localStorage.clear();

});