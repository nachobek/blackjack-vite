/**
 * Return a card from the deck and removes it from the deck.
 * @param {Array<String} deck 
 * @returns {String}
 */

export const getCard = (deck) => {
    if (deck.length === 0) {
        throw new Error('No more cards available in deck');
    }

    // const card = deck.pop();
    // return card;
    return deck.pop();
}