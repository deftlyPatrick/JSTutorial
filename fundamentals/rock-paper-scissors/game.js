function computerPlay(){
    let num = Math.floor(Math.random() * 3);
    switch(num){
        case 0:
            return 'Rock';
            break;
        case 1:
            return 'Paper';
            break;
        case 2:
            return 'Scissors';
            break;
    }
}

function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase();
    playerSelection = playerSelection.substring(0,1).toUpperCase() + playerSelection.substring(1, playerSelection.length);
    if (playerSelection == "Rock"){
        
        if (computerSelection == "Paper"){
            return [`You lose! ${computerSelection} beats ${playerSelection}`, 0];
        } else if (computerSelection == "Scissors"){
            return [`You win! ${playerSelection} beats ${computerSelection}`, 1];
        } else{
            return [`A draw! ${playerSelection} matches with ${computerSelection}`, 2];
        }
    } else if(playerSelection == "Paper"){
       
        if (computerSelection == "Scissors"){
            return [`You lose! ${computerSelection} beats ${playerSelection}`, 0];
        } else if (omputerSelection == "Rock"){
            return [`You win! ${playerSelection} beats ${computerSelection}`,1];
        } else{
            return [`A draw! ${playerSelection} matches with ${computerSelection}`, 2];
        }
    } else if(playerSelection == "Scissors"){
        if (computerSelection == "Rock"){
            return [`You lose! ${computerSelection} beats ${playerSelection}`, 0];
        } else if (computerSelection == "Paper"){
            return [`You win! ${playerSelection} beats ${computerSelection}`, 1];
        } else{
            return [`A draw! ${playerSelection} matches with ${computerSelection}`, 2];
        }
    }

}

// function game(){
//     let gameCounter = 0;

//     let playerScore = 0;
//     let cpuScore = 0;


//     while (gameCounter != 5){
//         const playerMove = prompt("What is your move.");
//         playerMove = playerMove.toLowerCase();
//         while ((playerMove != "rock") || (playerMove != "scissors") || (playerMove != "paper")){
//             playerMove = prompt("Wrong answer, give us your move.");
//         }
//         var round = playRound(playerMove, computerPlay());

//         switch (round[1]){
//             case 0:
//                 console.log(round[0]);
//                 cpuScore += 1; 
//                 gameCounter += 1;
//                 break;
//             case 1:
//                 console.log(round[0]);
//                 playerScore += 1;
//                 gameCounter += 1;
//                 break;
//             case 2:
//                 console.log(round[0]);
//                 playerScore += 2;
//                 cpuScore += 2;
//                 gameCounter += 1;

//         }
//     } 

//     if (playerScore > cpuScore){
//         return `You won! The score was ${playerScore} to ${cpuScore}`;
//     } else{
//         return `You lost. The score was ${cpuScore} to ${playerScore}`;
//     }
// }












  // if (round[1] == 1){
        //     console.log(round[0]);
        //     playerScore += 1;
        //     gameCounter += 1;
        // } else if (round[1] == 2){
        //     console.log(round[0]);
        //     playerScore += 2;
        //     cpuScore += 2;
        //     gameCounter += 1;
        // } else{
        //     console.log(round[0]);
        //     cpuScore += 1; 
        //     gameCounter += 1;
        // }