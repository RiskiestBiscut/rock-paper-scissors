const btnChoices = document.querySelectorAll('.btn')
let playerScore = 0;
    let compScore = 0;
btnChoices.forEach(item => {
    
    item.addEventListener('click', () => {
        const playerChoice = item.innerHTML;
        const computerChoice = getCompChoice();
        const scoreHolder = document.querySelector('.score');
        const result = playRound(playerChoice, computerChoice);
        let resultText; 
        if (result === 1) {
            resultText = "You Win!"
            playerScore ++
        } else if (result === 0) {
            resultText = "It's a tie!"
        } else {
            resultText = "You Lose!"
            compScore ++
        }
        document.querySelector('.result').textContent = resultText
        scoreHolder.textContent = `Player Score: ${playerScore} | Computer Score: ${compScore}`
        

    })
})

function getCompChoice() {
    let check = Math.floor(Math.random()*3)

   if (check === 0) {
    return 'rock'
   } else if (check === 1) {
    return 'paper'
   } else {
    return 'scissors'
   } 
}

function playRound(playerChoice, cChoice) {
    let pChoice = playerChoice.toLowerCase()
    if ((pChoice === 'rock' && cChoice === 'scissors') || (pChoice === 'paper' && cChoice === 'rock') || (pChoice === 'scissors' && cChoice === 'paper')) {
        return 1
    } else if (pChoice === cChoice) {
        return 0
    } else {
        return 2
    }
}



// function playGame() {
//     for (let i=0; i<5; i++) {
//         const playerSelection = prompt('select your choice')
//         const computerSelection = getCompChoice()
//         console.log(playRound(playerSelection, computerSelection))
//     }
// }

// playGame()

// const playerSelection = 'rock'
// const computerSelection = getCompChoice()
// console.log(playRound(playerSelection, computerSelection))