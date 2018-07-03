/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/


var scores, roundScores, activePlayer;
init();


document.querySelector('.btn-roll').addEventListener('click', function() {

    // 1. Random Number
    var dice = Math.floor(Math.random() * 6) + 1;

    // 2. Display the Result
    var diceDom = document.querySelector('.dice')
    diceDom.style.display = 'block';
    diceDom.src = 'dice-' + dice + '.png';
    // 3. Update the Round Score IF the rolled number was  not 1
    if (dice !== 1){
        //add score
        roundScores += dice;
        document.querySelector('#current-' + activePlayer).textContent = roundScores;
    } else{
        //next player
        nextPlayer();
    }
});

document.querySelector('.btn-hold').addEventListener('click', function () {
    // Add CURRENT score to Global Score
    scores[activePlayer] += roundScores;
    //Update The UI
    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
    // Check if player won the game.
    if (scores[activePlayer] >= 100){
        document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
        document.querySelector('.dice').style.display = 'none';
        document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
        document.querySelector('.player-' + activePlayer + '-panel').classList.remove('winner');

    } else {
        // Next Player
        nextPlayer();
    }
});

function nextPlayer() {
    //next player
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScores = 0;

    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';


    document.querySelector('.player-1-panel').classList.toggle('active');
    document.querySelector('.player-0-panel').classList.toggle('active');




    // document.querySelector('.player-0-panel').classList.remove('active');
    // document.querySelector('.player-1-panel').classList.add('active');
    document.querySelector('.dice').style.display = 'none';
}

document.querySelector('.btn-new').addEventListener('click', init);

function init() {
    scores = [0,0];
    activePlayer = 0;
    roundScores = 0;

    document.querySelector('.dice').style.display = 'none';

    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('name-1').textContent = 'Player 1';
    document.getElementById('name-2').textContent = 'Player 2';


}

//Saving for LATER
// document.querySelector('#current-' + activePlayer).textContent = dice;
// document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>';
// var x = document.querySelector('#score-0').textContent;
// console.log(x);