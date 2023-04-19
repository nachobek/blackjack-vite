/**
 * Return the numeric value of a given card.
 * @param {String} card 
 * @returns {Number}
 */
export const getCardValue = (card = '') => {
    const cardValue = card.substring(0, card.length - 1);

    return (isNaN(cardValue)) ?
            (cardValue === 'A') ? 11 : 10
            : cardValue * 1 // Converts the string number to a number.
    ;
}