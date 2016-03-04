$(function () {
  'use strict';

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


  $("[class*='btn-']").on("click", function(e)) {
    e.preventDefault();
    console.log("*** button click ***");
  })


});  // End of file.
