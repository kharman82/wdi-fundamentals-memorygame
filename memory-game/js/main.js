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
	function flipCard(cardID) {
		console.log("User flipped " + cards[cardID].rank);
		cardsInPlay.push(cards[cardID].rank);

	if (cardsInPlay.length === 2) {
		 checkForMatch(); 
	}
	console.log(cards[cardID].cardImage);
	console.log(cards[cardID].suite);
}
flipCard(0);	
flipCard(2);
