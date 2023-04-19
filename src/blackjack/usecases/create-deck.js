import _ from 'underscore';

/**
 * This function creates a new deck of cards.
 * It needs the card types (Clubs, Diamonds, etc).
 * It also needs the letter cards (Ace, King, etc).
 * 
 * @param {Array<String>} cardTypes Example: ['C', 'D', 'H', 'S'].
 * @param {Array<String>} letterCards Example: ['A', 'J', 'Q', 'K'].
 * @returns {Array<String>} Array of string containing the cards deck.
 */
export const createDeck = (cardTypes, letterCards) => {
    if (!cardTypes || cardTypes.length === 0) {
        throw new Error('The card types are mandatory.');
    }

    if (!letterCards || letterCards.length === 0) {
        throw new Error('The letter cards are mandatory.');
    }

    let deck = [];

    for (let i = 2; i < 11; i++) {
        for (const type of cardTypes) {
            deck.push(i + type);
        }
    }

    for (const card of letterCards) {
        for (const type of cardTypes) {
            deck.push(card + type);
        }
    }

    // deck = _.shuffle(deck);
    // return deck;
    return _.shuffle(deck);
}

// export default createDeck;