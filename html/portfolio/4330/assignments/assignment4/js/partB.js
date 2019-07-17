var x = 0;
var max = 3;
var left = 3;
var play_again = 'Y';

function start() {
 x = Math.floor(Math.random() * 101);
 console.log(x);
 document.getElementById('attempts').innerHTML = left + " guesses left";
}

function check() {
 var user_input = new Number(document.getElementById('number').value);
 if (user_input == x) {
  alert('Correct! Good guess! The number was ' + x + '.\nYou Win!');
  left = max;
  play_again = prompt('Would you like to play again? (Y/n)')
  playAgain(play_again);
 } else {
  if (user_input > x && left > 0) {
   alert('Too high!');
   left--;
   document.getElementById('attempts').innerHTML = left + " guesses left";
   var form = document.getElementById('number').value = '';
  }
  if (user_input < x && left > 0) {
   alert('Too low!');
   left--;
   document.getElementById('attempts').innerHTML = left + " guesses left";
   var form = document.getElementById('number').value = '';
  }
  if (left == 2) {
   alert('Last guess! Make it count! [hint: check the console ;)] ');
   left--;
   document.getElementById('attempts').innerHTML = left + " guesses left";
   var form = document.getElementById('number').value = '';
  }
  if (left == 0) {
   alert('You ran out of guesses. Correct number was ' + x + '.\n Restarting game.');
   left = max;
   play_again = prompt('Would you like to play again? (Y/n)')
   playAgain(play_again);
  }
 }
}

function playAgain(res) {
 if (res == 'Y') {
  var form = document.getElementById('number').value = '';
  start();
 } else {
  return document.getElementById('attempts').innerHTML = "Game Over!";
 }
}