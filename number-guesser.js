Skip to content

let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

const generateTarget = () => 
	Math.floor(Math.random()*9);

function difference(a, b) {
  return Math.abs(a - b);
}

const compareGuesses = (hGuess, cGuess, target) =>{
  if(hGuess > 9){
    window.alert('Out of range.');
    return false;
  } else if (difference(target, hGuess) <= difference(target, cGuess)){
		return true;
	} else if (difference(target, hGuess) > difference(target, cGuess)){
		return false;
	} 
}

const updateScore = winner =>{
	switch(winner){
		case 'human':
			humanScore ++;
			break;
		case 'computer':
			computerScore ++;
			break;
	}
} 

const advanceRound = () => currentRoundNumber ++;
