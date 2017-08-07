$(document).ready(function(){
  init();
});

var board;
var player;
var winConditions = [[0,1,2], [3,4,5], [6,7,8],
                       [0,3,6], [1,4,7], [2,5,8],
                       [0,4,8], [6,4,2]]
var gameOver;

function init(){
  board = [" "," "," "," "," "," "," "," "," "];
  player ="X";
  gameOver = false;
  renderBoard();
  renderText();
}

function renderBoard (){
  for (var i = 0;i<board.length;i++){
    $('.'+i).text(board[i]);
  }
}

function renderText(){
  $('.playerText').text('Turn : ' + player)
}