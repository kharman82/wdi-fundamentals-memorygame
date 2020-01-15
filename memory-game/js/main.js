const cards = [
{
	rank: "queen",
	suite: "hearts",
	cardImage: "images/queen-of-hearts.png"
},
{
	rank: "queen",
	suite: "diamonds",
	cardImage: "images/queen-of-diamonds.png"
},
{
	rank: "king",
	suite: "hearts",
	cardImage: "images/king-of-hearts.png"
},
{
	rank: "king",
	suite: "diamonds",
	cardImage: "images/king-of-diamonds.png"
}
];
const cardsInPlay = [];
	function checkForMatch() {
		if (cardsInPlay[0] === cardsInPlay[1]) {
			alert("You found a match!");
		} 
		else {
			alert("Sorry try again.");
	}
}
	function flipCard() {
		cardID = this.getAttribute('data-id');
		console.log("User flipped " + cards[cardID].rank);
		cardsInPlay.push(cards[cardID].rank);

		this.setAttribute('src', cards[cardID].cardImage);

	if (cardsInPlay.length === 2) {
		 checkForMatch(); 
	}
	console.log(cards[cardID].cardImage);
	console.log(cards[cardID].suite);
}
	function createBoard() {
		for (let i = 0; i < cards.length; i++) {
    let cardElement = document.createElement('img');
	cardElement.setAttribute('src', 'images/back.png');
	cardElement.setAttribute('data-id', i);
	cardElement.addEventListener('click', flipCard);
	document.getElementById('game-board').appendChild(cardElement);
	}
}
createBoard();
