const rock = "Rock";
const paper = "Paper";
const scissors = "Scissors";
if (playerTurn == "r" || playerTurn == "rock") {
    playerTurn = rock
}
else if (playerTurn == "p" || playerTurn == "paper") {
    playerTurn = paper;
}
else if (playerTurn == "s" || playerTurn == "scissors") {
    playerTurn = scissors;
}
else {
    console.log("Inavlid Input. Try again...");
}

let computerRandomNumber = Math.floor(Math.random() * 3) + 1;
switch (computerRandomNumber) {
    case 1:
        computerTurn = rock;
        break;
    case 2:
        computerTurn = paper;
        break;
    case 3:
        computerTurn = scissors;
        break;
    default:
        break;
}
console.log(`The computer chooses${computerTurn}`)
if (( playerTurn ===rock && computerTurn=== scissors ) || (playerTurn=== paper &&computerTurn=== rock ) ||( playerTurn === scissors && computerTurn === paper)) {
    console.log("You win!")
}else if(( computerTurn ===rock && playerTurn=== scissors ) || (computerTurn=== paper &&playerTurn=== rock ) ||( computerTurn === scissors && playerTurn === paper)) {
    console.log("You lose!")
}else{
    console.log("This game was draw!")
}
