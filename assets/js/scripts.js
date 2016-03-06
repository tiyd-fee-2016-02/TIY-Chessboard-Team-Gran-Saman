$(function () {
  'use strict';

  var entityCodes = {
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

  var board0 = [
    ['R','N','B','Q','K','B','N','R'],
    ['P','P','P','P','P','P','P','P'],
    [' ',' ',' ',' ',' ',' ',' ',' '],
    [' ',' ',' ',' ',' ',' ',' ',' '],
    [' ',' ',' ',' ',' ',' ',' ',' '],
    [' ',' ',' ',' ',' ',' ',' ',' '],
    ['p','p','p','p','p','p','p','p'],
    ['r','n','b','q','k','b','n','r'] ];

    var board1 = [
      ['R','N','B','Q','K','B','N','R'],
      ['P','P','P','P','P','P','P','P'],
      [' ',' ',' ',' ',' ',' ',' ',' '],
      [' ',' ',' ',' ',' ',' ',' ',' '],
      [' ',' ',' ','p',' ',' ',' ',' '],
      [' ',' ',' ',' ',' ',' ',' ',' '],
      ['p','p','p',' ','p','p','p','p'],
      ['r','n','b','q','k','b','n','r'] ];

    var board2 = [
      ['R','N','B','Q','K','B',' ','R'],
      ['P','P','P','P','P','P','P','P'],
      [' ',' ',' ',' ',' ','N',' ',' '],
      [' ',' ',' ',' ',' ',' ',' ',' '],
      [' ',' ',' ','p',' ',' ',' ',' '],
      [' ',' ',' ',' ',' ',' ',' ',' '],
      ['p','p','p',' ','p','p','p','p'],
      ['r','n','b','q','k','b','n','r'] ];

    var board3 = [
      ['R','N','B','Q','K','B',' ','R'],
      ['P','P','P','P','P','P','P','P'],
      [' ',' ',' ',' ',' ','N',' ',' '],
      [' ',' ',' ',' ',' ',' ',' ',' '],
      [' ',' ','p','p',' ',' ',' ',' '],
      [' ',' ',' ',' ',' ',' ',' ',' '],
      ['p','p',' ',' ','p','p','p','p'],
      ['r','n','b','q','k','b','n','r'] ];

    var board4 = [
      ['R','N','B','Q','K','B',' ','R'],
      ['P','P','P','P',' ','P','P','P'],
      [' ',' ',' ',' ','P','N',' ',' '],
      [' ',' ',' ',' ',' ',' ',' ',' '],
      [' ',' ','p','p',' ',' ',' ',' '],
      [' ',' ',' ',' ',' ',' ',' ',' '],
      ['p','p',' ',' ','p','p','p','p'],
      ['r','n','b','q','k','b','n','r'] ];

    var board5 = [
      ['R','N','B','Q','K','B',' ','R'],
      ['P','P','P','P',' ','P','P','P'],
      [' ',' ',' ',' ','P','N',' ',' '],
      [' ',' ',' ',' ',' ',' ',' ',' '],
      [' ',' ','p','p',' ',' ',' ',' '],
      [' ',' ',' ',' ',' ',' ','p',' '],
      ['p','p',' ',' ','p','p',' ','p'],
      ['r','n','b','q','k','b','n','r'] ];

    var board6 = [
      ['R','N','B','Q','K','B',' ','R'],
      ['P','P','P',' ',' ','P','P','P'],
      [' ',' ',' ',' ','P','N',' ',' '],
      [' ',' ',' ','P',' ',' ',' ',' '],
      [' ',' ','p','p',' ',' ',' ',' '],
      [' ',' ',' ',' ',' ',' ','p',' '],
      ['p','p',' ',' ','p','p',' ','p'],
      ['r','n','b','q','k','b','n','r'] ];

    var board7 = [
      ['R','N','B','Q','K','B',' ','R'],
      ['P','P','P',' ',' ','P','P','P'],
      [' ',' ',' ',' ','P','N',' ',' '],
      [' ',' ',' ','P',' ',' ',' ',' '],
      [' ',' ','p','p',' ',' ',' ',' '],
      [' ',' ',' ',' ',' ',' ','p',' '],
      ['p','p',' ',' ','p','p','b','p'],
      ['r','n','b','q','k',' ','n','r'] ];

    var board8 = [
      ['R','N','B','Q','K',' ',' ','R'],
      ['P','P','P',' ','B','P','P','P'],
      [' ',' ',' ',' ','P','N',' ',' '],
      [' ',' ',' ','P',' ',' ',' ',' '],
      [' ',' ','p','p',' ',' ',' ',' '],
      [' ',' ',' ',' ',' ',' ','p',' '],
      ['p','p',' ',' ','p','p','b','p'],
      ['r','n','b','q','k',' ','n','r'] ];

    var board9 = [
      ['R','N','B','Q','K',' ',' ','R'],
      ['P','P','P',' ','B','P','P','P'],
      [' ',' ',' ',' ','P','N',' ',' '],
      [' ',' ',' ','P',' ',' ',' ',' '],
      [' ',' ','p','p',' ',' ',' ',' '],
      [' ',' ',' ',' ',' ','n','p',' '],
      ['p','p',' ',' ','p','p','b','p'],
      ['r','n','b','q','k',' ',' ','r'] ];

// Testing how to make a deep copy of an object - please do not remove
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

  // console.log(moves);
  // $.each(moves, function(index) {
  //   console.log(moves[index].join('\n') + '\n\n');
  // });

  var moveCount = 0;
  var gamePaused = false;
  var timeoutId;
  var delay = 1000;

  // play button and pause button click listerner
  $(".btn-play, .btn-pause").on("click", function(e) {
    e.preventDefault();
    if ($(this).hasClass("btn-play")) {
      // console.log("*** play button click ***");
      gamePaused = false;
      $.each(moves, function(index) {
        if (index < moveCount || gamePaused) {
          return;
        }
        timeoutId = window.setTimeout(function() {
          if (index >= moveCount && moveCount >= 0 && moveCount < 9) {
            if (gamePaused) {
              return;
            }
            moveCount++;
            render(moves[moveCount]);
            // console.log("Index of render() call = > " + index);
          }
        }, delay);
        delay += 1000; // creates a 1s interval between interations
      });  //  end of each
      delay = 1000;  // reset
    }
    if ($(this).hasClass("btn-pause")) {
      // console.log("*** pause button click ***");
      gamePaused = true;
    }
  }); // end of play and pause button listener

  // fast forward button and rewind button click listener
  $(".btn-fast-forward, .btn-rewind").on("click", function(e) {
    e.preventDefault();
    if ($(this).hasClass("btn-fast-forward")) {
      moveCount = 9;
      // console.log("*** fast forward button click ***");
    } else if ($(this).hasClass("btn-rewind")) {
      moveCount = 0;
      // console.log("*** rewind button click ***");
    }
    render(moves[moveCount]);
  })

  // step forward and step backward button click listener
  $("[class*='btn-step-']").on("click", function(e) {
    e.preventDefault();
    // console.log("*** step button click ***");
    // console.log("moveCount => " + moveCount);
    if (moveCount >= 0 && moveCount <= 9) {
      if ($(this).hasClass("btn-step-forward") && moveCount >= 0 && moveCount < 9) {
        moveCount++;
        // console.log("*** step forward button click ***");
      } else if ($(this).hasClass("btn-step-back") && moveCount > 0 && moveCount <=  9) {
        moveCount--;
        // console.log("*** step back button click ***");
      }
      render(moves[moveCount]);
    }
  })

  // draw game board - jQuery version
  function render(myArray) {
    $.each(myArray, function (rowCount) {
      $("[class*='game-row-" + rowCount + "'] div").each( function(colCount) {
        $(this).html(entityCodes[myArray[rowCount][colCount]]);
      });
    });
  }   // end of render()

  // draw game board - vanilla JavaScript version - please do not remove
  // function render(arr) {
  //   for(var rowCount = 0; rowCount < 8; rowCount++) {
  //     // var rowArray = $("[class*='game-row-" + rowCount + "'] div");
  //     var rowArray = document.querySelectorAll("[class*='game-row-" + rowCount + "'] div");
  //     for(var colCount = 0; colCount < 8; colCount++ ) {
  //       $(rowArray[colCount]).html(entityCodes[arr[rowCount][colCount]]);
  //     }
  //   }
  //}   end of render()

});  // end of JavaScript
