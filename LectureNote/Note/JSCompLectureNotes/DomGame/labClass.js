/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

let dice, scores, roundScore, activePlayer;


/**
 * Declare Variables
 * How can we generate the random numbers
 * How Can we DOM Manipulations..
 * @type {number}
 */

//console.log(dice);



/**
 * Event Handlers
 * Set up an event handler
 * Assign an anonymous callback function as a handler
 * document.getElementbyID
 * How to manipulate the source property of the image
 *
 */
init();
document.querySelector('.btn-roll').addEventListener('click', function () {
    dice  = Math.floor(Math.random() * 6) + 1;
    document.querySelector('.dice').style.display='block';
    document.querySelector('.dice').src = 'images/dice-'+ dice+ '.png';
    if(dice !==1){
        roundScore += dice;
        document.querySelector('#current-' + activePlayer).textContent = roundScore;
    }else{
        nextPlayer()
    }
});
function nextPlayer() {
    roundScore = 0;
    //Toggled the Player
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    // Toggle the CSS Classes
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
    document.querySelector('#current-0').textContent = '0';
    document.querySelector('#current-1').textContent = '0';
    document.querySelector('.dice').style.display='none';
}
document.querySelector('.btn-hold').addEventListener('click', function () {
    // 1) Updating the scores of the active player
    scores[activePlayer] += roundScore;
    // 2) Updating the UI.
    document.getElementById('score-' + activePlayer).textContent = scores[activePlayer];
    // 3) Check if the player has won..
    if(scores[activePlayer] >= 30){
        document.getElementById('name-' + activePlayer).textContent = "WINNER !!!!!!!";
        document.querySelector('.player-'+ activePlayer +'-panel').classList.add('winner');
        document.querySelector('.player-'+ activePlayer +'-panel').classList.remove('active');
    }else{
        nextPlayer();
    }
});
function init() {
    scores = [0,0];
    roundScore = 0;
    activePlayer = 0;
    dice = 0;
    document.getElementById('score-0').textContent='0';
    document.getElementById('score-1').textContent='0';
    document.getElementById('current-1').textContent='0';
    document.getElementById('current-0').textContent='0';
    document.querySelector('.dice').style.display='none';
    document.querySelector('.player-0-panel').classList.add('active');

}
document.querySelector('.btn-new').addEventListener('click',init);