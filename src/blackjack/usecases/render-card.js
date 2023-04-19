
export const renderCard = (card, turn, divPlayedCards) => {
    const cardImage = document.createElement('img');

    cardImage.classList.add('cards');

    cardImage.src = `assets/cards/${card}.png`;

    divPlayedCards[turn].append(cardImage);
}