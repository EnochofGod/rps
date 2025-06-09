document.addEventListener("DOMContentLoaded", function() {
    let play = document.getElementById("play");
    let winner = document.getElementById("winner");
    play.addEventListener("click", playGame);

    function playGame() {
        let p1 = document.getElementById("player-1").value.trim().toLowerCase();
        let p2 = document.getElementById("player-2").value.trim().toLowerCase();
        let score = "";
        if (p1 === p2 && (p1 === 'rock' || p1 === 'paper' || p1 === 'scissors')) {
            score = "Tie game";
        } else if (p1 === 'rock') {
            if (p2 === 'paper') {
                score = 'playertwo wins';
            } else if (p2 === 'scissors') {
                score = 'playerone wins';
            } else {
                score = 'Invalid input';
            }
        } else if (p1 === 'paper') {
            if (p2 === 'scissors') {
                score = 'playertwo wins';
            } else if (p2 === 'rock') {
                score = 'playerone wins';
            } else {
                score = 'Invalid input';
            }
        } else if (p1 === 'scissors') {
            if (p2 === 'rock') {
                score = 'playertwo wins';
            } else if (p2 === 'paper') {
                score = 'playerone wins';
            } else {
                score = 'Invalid input';
            }
        } else {
            score = 'Invalid input';
        }
        winner.innerText = score;
    }
});