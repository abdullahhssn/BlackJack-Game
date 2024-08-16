
let cards = []
let hasBlackjack = false
let isAlive = false

let sum = 0
let Message = ""

let messageEL = document.getElementById("message-el")
let sumEL = document.getElementById("sum-el")
let cardsEL = document.getElementById("cards-el")

let player = {
    name: "Abdullah",
    chips: 200
}


playerEl = document.getElementById("player-el")
playerEl.innerText = player.name + ": $" + player.chips

function getRandomCard() {
    let randomCard = Math.floor(Math.random() * 13) + 1
    if (randomCard === 1)
        return 11
    else if (randomCard > 10)
        return 10
    else return randomCard
}


function startGame(){
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard

    renderGame()
}
function renderGame(){
    cardsEL.innerText = "Cards: " 

    for (let i = 0; i < cards.length; i++) {
        cardsEL.innerText += " " + cards[i] 
    }

    sumEL.innerText = "Sum: " + sum
    if (sum <= 20){
        Message = "another card?"
    }
    else if (sum === 21){
        Message = "blackjack!"
        hasBlackjack = true
    }
    else {
       Message = "try again!"
      isAlive = false
    }

    messageEL.innerText = Message
}

function newCard(){
    if (isAlive == true && hasBlackjack == false)
    {
        let thirdCard = getRandomCard()
        sum += thirdCard
        cards.push(thirdCard)
        renderGame()
    }
}