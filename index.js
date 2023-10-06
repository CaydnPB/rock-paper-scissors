const randomChoice = () => {
  choice = Math.floor(Math.random() * 3) + 1;
  switch (choice) {
    case 1:
      return "Rock";
    case 2:
      return "Paper";
    case 3:
      return "Scissors";
    default:
      return "Error";
  };
}

const winner = (player1, player2) => {
  if (player1 === player2) {
    return "It's a Tie!";
  } else if ((player1 === "Rock" && player2 === "Scissors") || (player1 === "Paper" && player2 === "Rock") || (player1 === "Scissors" && player2 === "Paper")) {
    return "Player 1 Wins!";
  } else {
    return "Player 2 Wins!";
  };
}

console.log("Welcome to the RPS Simulator!")
numberSimulations = 100;

for (var i = 0; i < numberSimulations; i++) {
  console.log("Game " + (i + 1) + ":");
  let player1 = randomChoice();
  console.log("Player 1: " + player1);
  let player2 = randomChoice();
  console.log("Player 2: " + player2);
  console.log("Result: " + winner(player1, player2));
}
