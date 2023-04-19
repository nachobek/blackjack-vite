
import { getCard } from "./get-card";
import { computeScore } from "./compute-score";
import { renderCard } from "./render-card";







export const computerTurn = (scoreToBeat, deck, scores, scoresHtml, divPlayedCards) => {
    do {
        const card = getCard(deck);

        computeScore(card, scores.length - 1, scores, scoresHtml);

        renderCard(card, scores.length - 1, divPlayedCards);
        // Adding card in the front end.
        // const cardImage = document.createElement('img');

        // cardImage.classList.add('cards');

        // cardImage.src = `assets/cards/${card}.png`;

        // divComputerCards.append(cardImage);

    } while (scores[scores.length - 1] <= scoreToBeat && scoreToBeat <= 21);

    setTimeout(() => {
        if (scores[scores.length - 1] > 21 && scoreToBeat <= 21) {
            alert('Game Over. You win!');
            return;
        }

        if (scores[scores.length - 1] === scoreToBeat) {
            alert('Game Over. Tie!');
            return;
        }

        if (scores[scores.length - 1] > scoreToBeat && scores[scores.length - 1] <= 21) {
            alert('Game Over. You lose!');
            return;
        }

        if (scoreToBeat > scores[scores.length - 1] && scoreToBeat <= 21) {
            alert('Game Over. You win!');
            return;
        }
    }, 35);

    btnNewGame.disabled = false;
  }
