/* 
	♦ ♥ ♠ ♣
*/
window.onload = addEvents;
var cardsOrder = [];
function addEvents() {
    let buttonGenerator = document.getElementById("generate");
    buttonGenerator.addEventListener("click", generateCards);
    let buttonSort = document.getElementById("sort");
    buttonSort.addEventListener("click", sort);
}

function generateCards() {
    let container = document.getElementById("cardsContainer");
    let numberOfCards = parseInt(document.getElementById("numberOfCards").value);

    //Resets container and cardsOrderVariable
    container.querySelectorAll("*").forEach((n) => n.remove());
    cardsOrder = [];

    for (let i = 0; i < numberOfCards; i++) {
        let cardValue = generateCardValue();
        let cardSuit = generateCardSuit(); //Generate card's value and suit

        cardsOrder.push([cardValue, cardSuit]);

        let valueToCard = document.createElement("P");
        let suitToCard = document.createElement("P");
        let suitToCard2 = document.createElement("P");

        if (cardSuit == "♥" || cardSuit == "♦") {
            suitToCard.style.color = "red";
            suitToCard2.style.color = "red";
        } else {
            suitToCard.style.color = "black";
            suitToCard2.style.color = "black";
        }

        valueToCard.innerHTML = `${cardValue}`;
        suitToCard.innerHTML = `${cardSuit}`;
        suitToCard2.innerHTML = `${cardSuit}`;

        let cardHead = document.createElement("div");
        let cardBody = document.createElement("div");
        let cardFoot = document.createElement("div");

        cardHead.classList.add("head");
        cardBody.classList.add("body");
        cardFoot.classList.add("foot");

        cardHead.appendChild(suitToCard);
        cardBody.appendChild(valueToCard);
        cardFoot.appendChild(suitToCard2);

        let card = document.createElement("div");
        card.classList.add("card");
        card.appendChild(cardHead);
        card.appendChild(cardBody);
        card.appendChild(cardFoot);

        container.appendChild(card);
    }
}

function sort() {
    let container = document.getElementById("sortContainer");
    container.querySelectorAll("*").forEach((n) => n.remove());
    let count = 0;
    for (let min = 0; min < cardsOrder.length; min++) {
        for (let index = min +1; index < cardsOrder.length; index++) {
            let aux = cardsOrder[min];
            
            if (aux[0] == "J") aux[0] = 11;
            if (aux[0] == "Q") aux[0] = 12;
            if (aux[0] == "K") aux[0] = 13;
            if (aux[0] == "A") aux[0] = 1;

            let aux2 = cardsOrder[index];
            if (aux2[0] == "J") aux2[0] = 11;
            if (aux2[0] == "Q") aux2[0] = 12;
            if (aux2[0] == "K") aux2[0] = 13;
            if (aux2[0] == "A") aux2[0] = 1;
            let change = false;
            if (aux[0] > aux2[0]) {
                change = true
                console.log("algo cambio");
                let aux3 = cardsOrder[min];
                cardsOrder[min] = cardsOrder[index];
                cardsOrder[index] = aux3;
            }
            if(change){
                let cardBox = document.createElement("div");
                cardBox.classList.add("box");
                let number = document.createElement("p");
                number.innerHTML = count;
                cardBox.appendChild(number);
                for (const value of cardsOrder) {
                    let cardValue = value[0];
                    let cardSuit = value[1];
    
                    if (cardValue == 11) cardValue = "J";
                    if (cardValue == 12) cardValue = "Q";
                    if (cardValue == 13) cardValue = "K";
                    if (cardValue == 1) cardValue = "A";
    
                    let valueToCard = document.createElement("P");
                    let suitToCard = document.createElement("P");
                    let suitToCard2 = document.createElement("P");
    
                    if (cardSuit == "♥" || cardSuit == "♦") {
                        suitToCard.style.color = "red";
                        suitToCard2.style.color = "red";
                    } else {
                        suitToCard.style.color = "black";
                        suitToCard2.style.color = "black";
                    }
    
                    valueToCard.innerHTML = `${cardValue}`;
                    suitToCard.innerHTML = `${cardSuit}`;
                    suitToCard2.innerHTML = `${cardSuit}`;
    
                    let cardHead = document.createElement("div");
                    let cardBody = document.createElement("div");
                    let cardFoot = document.createElement("div");
    
                    cardHead.classList.add("head");
                    cardBody.classList.add("body");
                    cardFoot.classList.add("foot");
    
                    cardHead.appendChild(suitToCard);
                    cardBody.appendChild(valueToCard);
                    cardFoot.appendChild(suitToCard2);
    
                    let card = document.createElement("div");
                    card.classList.add("card");
                    card.appendChild(cardHead);
                    card.appendChild(cardBody);
                    card.appendChild(cardFoot);
    
                    cardBox.appendChild(card);
                }
                container.appendChild(cardBox);
                count++;
            }
        }
    }
}

function generateCardValue() {
    let value = Math.floor(Math.random() * 13 + 1);
    if (value == 11) value = "J";
    if (value == 12) value = "Q";
    if (value == 13) value = "K";
    if (value == 1) value = "A";
    return value;
}

function generateCardSuit() {
    let value = Math.floor(Math.random() * 4 + 1);
    if (value == 1) value = "♥";
    if (value == 2) value = "♦";
    if (value == 3) value = "♣";
    if (value == 4) value = "♠";
    return value;
}

function drawCard(values) {
    return card;
}
