import _ from 'underscore';
import { createDeck } from './usecases/create-deck';
import { getCard } from './usecases/get-card';
import { computerTurn } from './usecases/computer-turn';
import { computeScore } from './usecases/compute-score';
import { renderCard } from './usecases/render-card';



/*
    2C = Two of Clubs
    2D = Two of Diamons
    2H = Two of Hearts
    2S = Two of Spades
*/

(() => {
    'use strict'

    let deck = [],
        scores = [] // Each element of the array represents a player. The last element represents the computer.
        // playerScore = 0,
        // computerScore = 0
    ;

    const cardTypes = ['C', 'D', 'H', 'S'],
          letterCards = ['A', 'J', 'Q', 'K']
    ;


  // HTML References
    const btnNewGame = document.querySelector('#btnNewGame'),
        btnGetCard = document.querySelector('#btnGetCard'),
        btnStop = document.querySelector('#btnStop'),          
        scoresHtml = document.querySelectorAll('small'), // Getting both the player and computer scores in an Array.          
        divPlayedCards = document.querySelectorAll('.played-cards')
    ;


    const initializeGame = (playersCount = 2) => {
        deck = createDeck(cardTypes, letterCards);
        scores = [];

        btnGetCard.disabled = false;
        btnNewGame.disabled = true;

        for (let i = 0; i < playersCount; i++) {
            scores.push(0);
            scoresHtml[i].innerText = 'Score: 0';


            // Short version to clear the DIV.
            // divPlayedCards[i].innerHTML = '';

            // Best practice/performance way to clear the DIV.
            while (divPlayedCards[i].firstChild) {
                divPlayedCards[i].removeChild(divPlayedCards[i].firstChild);
            }
        }
    }


    // Event listeners.

    btnGetCard.addEventListener('click', () => {
    const card = getCard(deck);

    computeScore(card, 0, scores, scoresHtml);

    renderCard(card, 0, divPlayedCards);

    // Enable stop button to end turn.
    btnStop.disabled = false;


    // Validating score
    setTimeout(() => {
        if (scores[0] === 21) {
            // console.warn('Game Over. You win!');
            btnGetCard.disabled = true;
            btnStop.disabled = true;
            computerTurn(scores[0], deck, scores, scoresHtml, divPlayedCards);
        }

        if (scores[0] > 21) {
            alert('Game Over. You lose!');
            btnGetCard.disabled = true;
            btnStop.disabled = true;
            btnNewGame.disabled = false;
        }
    }, 35);
    });


    btnStop.addEventListener('click', () => {
        btnGetCard.disabled = true;
        btnStop.disabled = true;
        btnNewGame.disabled = false;

        computerTurn(scores[0], deck, scores, scoresHtml, divPlayedCards);
    });


    btnNewGame.addEventListener('click', () => {
        initializeGame();

        btnGetCard.disabled = false;
    });
})();
