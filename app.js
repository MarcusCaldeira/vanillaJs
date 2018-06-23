/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/


var scores, roundScores, activePlayer;

scores = [0,0];
roundScores  = 0;
activePlayer = 1;





document.querySelector('.dice').style.display = 'none';


document.querySelector('.btn-roll').addEventListener('click', function() {

    // 1. Random Number
    var dice = Math.floor(Math.random() * 6) + 1;

    // 2. Display the Result
    var diceDom = document.querySelector('.dice')
    diceDom.style.display = 'block';
    diceDom.src = 'dice-' + dice + '.png';


    // 3. Update the Round Scopare IF the rolled number was  not 1


});



//Saving for LATER
// document.querySelector('#current-' + activePlayer).textContent = dice;
// document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>';


// var x = document.querySelector('#score-0').textContent;
// console.log(x);