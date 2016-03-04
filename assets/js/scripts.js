$(function () {
  'use strict';

  var entityCodex = {
    "R" : "&#9820;",
    "N" : "&#9822;",
    "B" : "&#9821",
    "Q" : "&#9819",
    "K" : "&#9818",
    "P" : "&#9823",
    "r" : "&#9814",
    "n" : "&#9815",
    "b" : "&#9816",
    "q" : "&#9813",
    "k" : "&#9812",
    "p" : "&#9817"
  };

  console.log(entityCodex["R"]);

  var board = [
    ['R','N','B','Q','K','B','N','R'],
    ['P','P','P','P','P','P','P','P'],
    [' ',' ',' ',' ',' ',' ',' ',' '],
    [' ',' ',' ',' ',' ',' ',' ',' '],
    [' ',' ',' ',' ',' ',' ',' ',' '],
    [' ',' ',' ',' ',' ',' ',' ',' '],
    ['p','p','p','p','p','p','p','p'],
    ['r','n','b','q','k','b','n','r'] ];

    console.log(board.join('\n') + '\n\n');


var moves = {};
moves[0] = board;

// console.log(moves);
console.log(moves[0]);
console.log(board);
// console.log(Object.keys(moves).length);


  // board[4][4] = board[6][4];
  // board[6][4] = ' ';
  var temp = board;
    temp[4][4] = temp[6][4];
    temp[6][4] = ' ';

console.log(temp.join('\n') + '\n\n');

moves[1] = temp;
// console.log(moves);
// console.log("Move 1 " + moves[1]);
// console.log(board);

// console.log(temp);

  $("[class*='btn-']").on("click", function(e) {
    e.preventDefault();
    console.log("*** button click ***");
  })


});  // End of file.
