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
    "n" : "&#9816",
    "b" : "&#9815",
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

    // console.log(board0.join('\n') + '\n\n');

    var board1 = [
      ['R','N','B','Q','K','B','N','R'],
      ['P','P','P','P','P','P','P','P'],
      [' ',' ',' ',' ',' ',' ',' ',' '],
      [' ',' ',' ',' ',' ',' ',' ',' '],
      [' ',' ',' ','p',' ',' ',' ',' '],
      [' ',' ',' ',' ',' ',' ',' ',' '],
      ['p','p','p',' ','p','p','p','p'],
      ['r','n','b','q','k','b','n','r'] ];

      // console.log(board1.join('\n') + '\n\n');

    var board2 = [
      ['R','N','B','Q','K','B',' ','R'],
      ['P','P','P','P','P','P','P','P'],
      [' ',' ',' ',' ',' ','N',' ',' '],
      [' ',' ',' ',' ',' ',' ',' ',' '],
      [' ',' ',' ','p',' ',' ',' ',' '],
      [' ',' ',' ',' ',' ',' ',' ',' '],
      ['p','p','p',' ','p','p','p','p'],
      ['r','n','b','q','k','b','n','r'] ];

      // console.log(board2.join('\n') + '\n\n');

    var board3 = [
      ['R','N','B','Q','K','B',' ','R'],
      ['P','P','P','P','P','P','P','P'],
      [' ',' ',' ',' ',' ','N',' ',' '],
      [' ',' ',' ',' ',' ',' ',' ',' '],
      [' ',' ','p','p',' ',' ',' ',' '],
      [' ',' ',' ',' ',' ',' ',' ',' '],
      ['p','p',' ',' ','p','p','p','p'],
      ['r','n','b','q','k','b','n','r'] ];

      // console.log(board3.join('\n') + '\n\n');

    var board4 = [
      ['R','N','B','Q','K','B',' ','R'],
      ['P','P','P','P',' ','P','P','P'],
      [' ',' ',' ',' ','P','N',' ',' '],
      [' ',' ',' ',' ',' ',' ',' ',' '],
      [' ',' ','p','p',' ',' ',' ',' '],
      [' ',' ',' ',' ',' ',' ',' ',' '],
      ['p','p',' ',' ','p','p','p','p'],
      ['r','n','b','q','k','b','n','r'] ];

      // console.log(board4.join('\n') + '\n\n');

    var board5 = [
      ['R','N','B','Q','K','B',' ','R'],
      ['P','P','P','P',' ','P','P','P'],
      [' ',' ',' ',' ','P','N',' ',' '],
      [' ',' ',' ',' ',' ',' ',' ',' '],
      [' ',' ','p','p',' ',' ',' ',' '],
      [' ',' ',' ',' ',' ',' ','p',' '],
      ['p','p',' ',' ','p','p',' ','p'],
      ['r','n','b','q','k','b','n','r'] ];

      // console.log(board5.join('\n') + '\n\n');

    var board6 = [
      ['R','N','B','Q','K','B',' ','R'],
      ['P','P','P',' ',' ','P','P','P'],
      [' ',' ',' ',' ','P','N',' ',' '],
      [' ',' ',' ','P',' ',' ',' ',' '],
      [' ',' ','p','p',' ',' ',' ',' '],
      [' ',' ',' ',' ',' ',' ','p',' '],
      ['p','p',' ',' ','p','p',' ','p'],
      ['r','n','b','q','k','b','n','r'] ];

      // console.log(board6.join('\n') + '\n\n');

    var board7 = [
      ['R','N','B','Q','K','B',' ','R'],
      ['P','P','P',' ',' ','P','P','P'],
      [' ',' ',' ',' ','P','N',' ',' '],
      [' ',' ',' ','P',' ',' ',' ',' '],
      [' ',' ','p','p',' ',' ',' ',' '],
      [' ',' ',' ',' ',' ',' ','p',' '],
      ['p','p',' ',' ','p','p','b','p'],
      ['r','n','b','q','k',' ','n','r'] ];

      // console.log(board7.join('\n') + '\n\n');

    var board8 = [
      ['R','N','B','Q','K',' ',' ','R'],
      ['P','P','P',' ','B','P','P','P'],
      [' ',' ',' ',' ','P','N',' ',' '],
      [' ',' ',' ','P',' ',' ',' ',' '],
      [' ',' ','p','p',' ',' ',' ',' '],
      [' ',' ',' ',' ',' ',' ','p',' '],
      ['p','p',' ',' ','p','p','b','p'],
      ['r','n','b','q','k',' ','n','r'] ];

      // console.log(board8.join('\n') + '\n\n');

    var board9 = [
      ['R','N','B','Q','K',' ',' ','R'],
      ['P','P','P',' ','B','P','P','P'],
      [' ',' ',' ',' ','P','N',' ',' '],
      [' ',' ',' ','P',' ',' ',' ',' '],
      [' ',' ','p','p',' ',' ',' ',' '],
      [' ',' ',' ',' ',' ','n','p',' '],
      ['p','p',' ',' ','p','p','b','p'],
      ['r','n','b','q','k',' ',' ','r'] ];

      // console.log(board9.join('\n') + '\n\n');

// Testing how to make a deep copy of an object
//
// var moves = {};
//
// moves[0] = board0;
//
// console.log(moves);
// console.log(moves[0].join('\n') + '\n\n');
//
// var temp = jQuery.extend(true, [], board0)
//
// temp[4][4] = temp[6][4];
// temp[6][4] = " ";
//
// moves[1] = temp;
//
// console.log(moves);
// console.log(moves[0].join('\n') + '\n\n');
// console.log(moves[1].join('\n') + '\n\n');

  var moveCount = 0;

  var moves = {
    0 : board0,
    1 : board1,
    2 : board2,
    3 : board3,
    4 : board4,
    5 : board5,
    6 : board6,
    7 : board7,
    8 : board8,
    9 : board9
  }

  console.log(moves);
  $.each(moves, function(index) {
    console.log(moves[index].join('\n') + '\n\n');
  });

var gamePaused = false;
var timeoutId;
var delay = 1000;

  $(".btn-play, .btn-pause").on("click", function(e) {
    e.preventDefault();


    if ($(this).hasClass("btn-play")) {
      console.log("*** play button click ***");
      gamePaused = false;
      $.each(moves, function(index) {

        if (index < moveCount) {
          return;
        }
console.log(timeoutId);
        timeoutId = window.setTimeout(function() {
console.log(timeoutId);
          if (index >= moveCount && moveCount >= 0 && moveCount < 10) {

            if (gamePaused) {
              // window.clearTimeout(timeoutId);
              return;
            }

            render(moves[index]);
            moveCount++;
            console.log("Index of render() call = > " + index);
          }
        }, delay);
        delay += 1000; // creates an 1s interval between interations

      });  //  end of each
      delay = 1000;  // reset

    }

    if ($(this).hasClass("btn-pause")) {
      console.log("*** pause button click ***");
      // window.clearTimeout(timeoutId);
      gamePaused = true;
    }

  });

  $(".btn-fast-forward").on("click", function(e) {
    e.preventDefault();
    moveCount = 9;
    render(board9);
    console.log("*** fast forward button click ***");
  });

  $(".btn-rewind").on("click", function(e) {
    e.preventDefault();
    moveCount = 0;
    render(board0);
    console.log("*** rewind button click ***");
  });

  $("[class*='btn-step-']").on("click", function(e) {
    e.preventDefault();
    console.log("*** step button click ***");
    console.log("moveCount => " + moveCount);
    if (moveCount >= 0 && moveCount <= 9) {

      if ($(this).hasClass("btn-step-forward") && moveCount >= 0 && moveCount < 9) {
        moveCount++;
        console.log("*** step forward button click ***");
      } else if ($(this).hasClass("btn-step-back") && moveCount > 0 && moveCount <=  9) {
        moveCount--;
        console.log("*** step back button click ***");
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
