function computerThink() {
	computerChoice = Math.floor(Math.random()*3);
	if(computerChoice === 1) {
		computerChoice = "rock";
	}
	else if(computerChoice === 2) {
		computerChoice = "paper";
	}
	else{
		computerChoice = "scissors";
	}
}

function rockPick() {
	userChoice = "rock";
	computerThink();
	results();
	replay();
}

function paperPick() {
	userChoice = "paper";
	computerThink();
	results();
	replay();
}

function scissorsPick() {
	userChoice = "scissors";
	computerThink();
	results();
	replay();
}

function compare(choice1, choice2) {}
	if (choice1 === choice2) {
		alert("It's a tie!");
		}
		else if(choice1 === "rock") {}
			if (choice2 === "scissors") {
		alert("You Lose");
		}
		else if(choice1 === "paper") {
			if (choice2 === "rock") {
		alert("You Win");
		}
		else 
		alert("You Lose");
		}
		else if(choice1 === "scissors") {
			if (choice2 === "paper") {
		alert("You Win");
		}
		else {
		alert("You Lose");	
		}
	}





