// function uses number to determine winner 1 means player wins 2 means computer wins 3 means tie
function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return 3;
    }
    else if (playerSelection == "ROCK" && computerSelection == "PAPER") {
        return 2;
    }
    else if (playerSelection == "ROCK" && computerSelection == "SCISSOR") {
        return 1;
    }
    else if (playerSelection == "SCISSOR" && computerSelection == "PAPER") {
        return 1;
    }
    else if (playerSelection == "SCISSOR" && computerSelection == "ROCK") {
        return 2;
    }
    else if (playerSelection == "PAPER" && computerSelection == "SCISSOR") {
        return 2;
    }
    else (playerSelection == "PAPER" && computerSelection == "ROCK")
        return 1;

}
function computerPlay() {
    let computerWeapon = Math.floor(Math.random() * 3);
    if (computerWeapon == 1) {
        return ("ROCK");
    }
    else if (computerWeapon == 2) {
        return ("PAPER");
    }
    else (computerWeapon == 3)
        return ("SCISSOR");
}

// scoreKeeper array0 is player array1 is computer
function game() {
    let scoreKeeper= [0,0];
    for (i = 0; i < 5; i++) {
        const playerSelection = prompt("Select your weapon: Rock, Paper, or Scissor")
        const computerSelection = computerPlay();
        let playerSelectionCap = playerSelection.toUpperCase();
        let winScore = playRound(playerSelectionCap, computerSelection)

        if(winScore == 1){
            scoreKeeper[0]++;
            console.log(`You won 
                Players Score ${scoreKeeper[0]}
                Computers Score ${scoreKeeper[1]}`);
        }
        else if(winScore == 2){
            scoreKeeper[1]++;
            console.log(`You Lost
                Player's Score ${scoreKeeper[0]}
                Computer's Score ${scoreKeeper[1]}`);
        }
        else if( winScore == 3){
            console.log(`TIE
            Player's Score ${scoreKeeper[0]}
            Computer's Score ${scoreKeeper[1]}`);
        }
        else
            console.log("ERROR")

    }
    if(scoreKeeper[0] == scoreKeeper[1]){
        console.log("game is a tie")
    }
    else if (scoreKeeper[0] > scoreKeeper[1]){
        console.log("You WIN!!!")
    }
    else
        console.log("You LOST :(")
}