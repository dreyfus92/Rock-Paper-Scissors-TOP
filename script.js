
function computerPlay() {
    let max = 3;
    let min = 1;
    let computerResult = Math.floor(Math.random()*(max-min+1)+min);
    if (computerResult == 1) {
        return 'Rock';
    }
    else if (computerResult == 2) {
        return 'Paper';
    }
    else{
        return 'Scissors';
    }  
}

function playRound() {
    let playerSelection = prompt('Choose Rock, Paper or Scissors:').toLowerCase();
    let computerSelection = computerPlay().toLowerCase();
    console.log('Player chooses' + ' ' + playerSelection + '.');
    console.log('Computer chooses' + ' ' + computerSelection + '.');
    if ((playerSelection == 'rock') && (computerSelection =='rock')){
        return 'It\'s a tie.';
    }
    else if((playerSelection == 'rock') && (computerSelection == 'paper')){
        return 'Computer wins.';
    }
    else if((playerSelection == 'rock') && (computerSelection == 'scissors')){
        return 'Player wins.';
    }
    else if((playerSelection == 'rock') && (computerSelection == 'rock')){
        return 'It\'s a tie.';
    }
    else if((playerSelection == 'paper') && (computerSelection == 'paper')){
        return 'It\'s a tie.';
    }
    else if((playerSelection == 'paper') && (computerSelection == 'rock')){
        return 'Player wins.';
    }
    else if((playerSelection == 'paper') && (computerSelection == 'scissors')){
        return 'Computer wins.';
    }
    else if((playerSelection == 'scissors') && (computerSelection == 'paper')){
        return 'Player wins.';
    }
    else if((playerSelection == 'scissors') && (computerSelection == 'rock')){
        return 'Computer wins.';
    }
    else if((playerSelection == 'scissors') && (computerSelection == 'scissors')){
        return 'It\'s a tie.';
    }
}


function game(){
    let numberOfGames = prompt('How many games do you wanna play?:')
    for(let i = 0; i < numberOfGames; i++) {
        console.log(playRound());
    }
}
console.log(game());