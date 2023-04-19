import { getCardValue } from "./get-card-value";


export const computeScore = (card, turn, scores, scoresHtml) => {
    scores[turn] += getCardValue(card);
    scoresHtml[turn].innerText = `Score: ${scores[turn]}`;
}