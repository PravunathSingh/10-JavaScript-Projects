let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById('user-score');
const computerScore_span = document.getElementById('computer-score');
const scoreboard_div = document.querySelector('.scoreboard');
const result_p = document.querySelector('.result');
const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');

function compChoice() {
    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function converter(letter) {
    if (letter === 'r') return 'Rocks';
    if (letter === 'p') return 'Paper';
    if (letter === 's') return 'Scissors';
}

function win(userChoice, computerChoice) {
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${converter(userChoice)} beats ${converter(computerChoice)}. You Win!!!`
}

function lose(userChoice, computerChoice) {
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${converter(userChoice)} loses to ${converter(computerChoice)}. You lose :"(`
}

function draw(userChoice, computerChoice) {
    result_p.innerHTML = `${converter(userChoice)} equals ${converter(computerChoice)}. It's a draw`
}

function game(userChoice) {
    const computerChoice = compChoice();
    switch(userChoice + computerChoice) {
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, computerChoice);
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice, computerChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, computerChoice);
            break;
    }
}

function main() {
    rock.addEventListener('click', () => {
        game("r");
    });
    paper.addEventListener('click', () => {
        game("p");
    });
    scissors.addEventListener('click', () => {
        game("r");
    });
}

main();