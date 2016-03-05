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
    "p" : "&#9817",
    " " : " "
  };

  console.log(entityCodex["R"]);

  var board0 = [
    ['R','N','B','Q','K','B','N','R'],
    ['P','P','P','P','P','P','P','P'],
    [' ',' ',' ',' ',' ',' ',' ',' '],
    [' ',' ',' ',' ',' ',' ',' ',' '],
    [' ',' ',' ',' ',' ',' ',' ',' '],
    [' ',' ',' ',' ',' ',' ',' ',' '],
    ['p','p','p','p','p','p','p','p'],
    ['r','n','b','q','k','b','n','r'] ];

    console.log(board0.join('\n') + '\n\n');

    var board1 = [
      ['R','N','B','Q','K','B','N','R'],
      ['P','P','P','P','P','P','P','P'],
      [' ',' ',' ',' ',' ',' ',' ',' '],
      [' ',' ',' ',' ',' ',' ',' ',' '],
      [' ',' ',' ','p',' ',' ',' ',' '],
      [' ',' ',' ',' ',' ',' ',' ',' '],
      ['p','p','p',' ','p','p','p','p'],
      ['r','n','b','q','k','b','n','r'] ];

      console.log(board1.join('\n') + '\n\n');

    var board2 = [
      ['R','N','B','Q','K','B',' ','R'],
      ['P','P','P','P','P','P','P','P'],
      [' ',' ',' ',' ',' ','N',' ',' '],
      [' ',' ',' ',' ',' ',' ',' ',' '],
      [' ',' ',' ','p',' ',' ',' ',' '],
      [' ',' ',' ',' ',' ',' ',' ',' '],
      ['p','p','p',' ','p','p','p','p'],
      ['r','n','b','q','k','b','n','r'] ];

      console.log(board2.join('\n') + '\n\n');

    var board3 = [
      ['R','N','B','Q','K','B',' ','R'],
      ['P','P','P','P',' ','P','P','P'],
      [' ',' ',' ',' ','P','N',' ',' '],
      [' ',' ',' ',' ',' ',' ',' ',' '],
      [' ',' ',' ','p',' ',' ',' ',' '],
      [' ',' ',' ',' ',' ',' ',' ',' '],
      ['p','p','p',' ','p','p','p','p'],
      ['r','n','b','q','k','b','n','r'] ];

      console.log(board3.join('\n') + '\n\n');

    var board4 = [
      ['R','N','B','Q','K','B',' ','R'],
      ['P','P','P','P','P','P','P','P'],
      [' ',' ',' ',' ',' ','N',' ',' '],
      [' ',' ',' ',' ',' ',' ',' ',' '],
      [' ',' ','p','p',' ',' ',' ',' '],
      [' ',' ',' ',' ',' ',' ',' ',' '],
      ['p','p',' ',' ','p','p','p','p'],
      ['r','n','b','q','k','b','n','r'] ];

      console.log(board4.join('\n') + '\n\n');

    var board5 = [
      ['R','N','B','Q','K','B',' ','R'],
      ['P','P','P','P',' ','P','P','P'],
      [' ',' ',' ',' ','P','N',' ',' '],
      [' ',' ',' ',' ',' ',' ',' ',' '],
      [' ',' ','p','p',' ',' ',' ',' '],
      [' ',' ',' ',' ',' ',' ',' ',' '],
      ['p','p',' ',' ','p','p','p','p'],
      ['r','n','b','q','k','b','n','r'] ];

      console.log(board5.join('\n') + '\n\n');

    var board6 = [
      ['R','N','B','Q','K','B',' ','R'],
      ['P','P','P','P',' ','P','P','P'],
      [' ',' ',' ',' ','P','N',' ',' '],
      [' ',' ',' ',' ',' ',' ',' ',' '],
      [' ',' ','p','p',' ',' ',' ',' '],
      [' ',' ',' ',' ',' ',' ','p',' '],
      ['p','p',' ',' ','p','p',' ','p'],
      ['r','n','b','q','k','b','n','r'] ];

      console.log(board6.join('\n') + '\n\n');

    var board7 = [
      ['R','N','B','Q','K','B',' ','R'],
      ['P','P','P',' ',' ','P','P','P'],
      [' ',' ',' ',' ','P','N',' ',' '],
      [' ',' ',' ','P',' ',' ',' ',' '],
      [' ',' ','p','p',' ',' ',' ',' '],
      [' ',' ',' ',' ',' ',' ','p',' '],
      ['p','p',' ',' ','p','p',' ','p'],
      ['r','n','b','q','k','b','n','r'] ];

      console.log(board7.join('\n') + '\n\n');

    var board8 = [
      ['R','N','B','Q','K','B',' ','R'],
      ['P','P','P',' ',' ','P','P','P'],
      [' ',' ',' ',' ','P','N',' ',' '],
      [' ',' ',' ','P',' ',' ',' ',' '],
      [' ',' ','p','p',' ',' ',' ',' '],
      [' ',' ',' ',' ',' ',' ','p',' '],
      ['p','p',' ',' ','p','p','b','p'],
      ['r','n','b','q','k',' ','n','r'] ];

      console.log(board8.join('\n') + '\n\n');

    var board9 = [
      ['R','N','B','Q','K',' ',' ','R'],
      ['P','P','P',' ','B','P','P','P'],
      [' ',' ',' ',' ','P','N',' ',' '],
      [' ',' ',' ','P',' ',' ',' ',' '],
      [' ',' ','p','p',' ',' ',' ',' '],
      [' ',' ',' ',' ',' ',' ','p',' '],
      ['p','p',' ',' ','p','p','b','p'],
      ['r','n','b','q','k',' ','n','r'] ];

      console.log(board9.join('\n') + '\n\n');

    var board10 = [
      ['R','N','B','Q','K',' ',' ','R'],
      ['P','P','P',' ','B','P','P','P'],
      [' ',' ',' ',' ','P','N',' ',' '],
      [' ',' ',' ','P',' ',' ',' ',' '],
      [' ',' ','p','p',' ',' ',' ',' '],
      [' ',' ',' ',' ',' ','n','p',' '],
      ['p','p',' ',' ','p','p','b','p'],
      ['r','n','b','q','k',' ',' ','r'] ];

      console.log(board10.join('\n') + '\n\n');

// render(board0);

  var moveCount = 0;

  $("[class*='btn-step-']").on("click", function(e) {
    e.preventDefault();
    console.log("*** step forward button click ***");

    console.log("moveCount => " + moveCount);
    if (moveCount >= 0 && moveCount <= 10) {

      if ($(this).hasClass("btn-step-forward") && moveCount >= 0 && moveCount < 10) {
        moveCount++;
      } else if ($(this).hasClass("btn-step-back") && moveCount > 0 && moveCount <=  10) {
        moveCount--;
      }

      if (moveCount === 0) {
        render(board0);
      } else if (moveCount === 1) {
        render(board1);
      } else if (moveCount === 2) {
        render(board2);
      } else if (moveCount === 3) {
        render(board3);
      } else if (moveCount === 4) {
        render(board4);
      } else if (moveCount === 5) {
        render(board5);
      } else if (moveCount === 6) {
        render(board6);
      } else if (moveCount === 7) {
        render(board7);
      } else if (moveCount === 8) {
        render(board8);
      } else if (moveCount === 9) {
        render(board9);
      } else if (moveCount === 10) {
        render(board10);
      }
    }

  })

  // $("[class*='btn-']").on("click", function(e) {
  //   e.preventDefault();
  //   console.log("*** button click ***");
  //
  //   if (moveCount >= 0 && moveCount <= 10) {
  //     if (moveCount == ) {
  //
  //     } else if {}
  //   }
  // })

  // draw game board
  function render(arr) {
    for(var rowCount = 0; rowCount < 8; rowCount++) {
      var rowArray = $("[class*='game-row-" + rowCount + "'] div");
      for(var colCount = 0; colCount < 8; colCount++ ) {
        $(rowArray[colCount]).html(entityCodex[arr[rowCount][colCount]]);
      }
    }
  }  // end of render()

});  // End of file.
