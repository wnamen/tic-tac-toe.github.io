
// wait for the DOM to finish loading
$(document).ready(function() {
  // all code to manipulate the DOM
  // goes inside this function

  var xSelections = [];
  var oSelections = [];
  var selectedArr;

  var turns = 0;
  var turn = "O";

  var horWins = [['topleft', 'topmid', 'topright'],
  ['midleft', 'midmid', 'midright'],
  ['botleft', 'botmid', 'botright']];

  var verWins = [['topleft', 'midleft', 'botleft'],
  ['topmid', 'midmid', 'botmid'],
  ['topright', 'midright', 'botright']];

  var diagWins = [['topleft', 'midmid', 'botright'],
  ['botleft', 'midmid', 'topright']];

  function whichTurn() {
    if (turn === "X") {
      turn = "O";
    } else {
      turn = "X";
    }

    return turn;
  }

  function arrSelect() {
    if (turn === "X") {
      selectedArr = xSelections;
    } else {
      selectedArr = oSelections;
    }
  }

  function isWinner() {
    if (horizontalWin(selectedArr) || verticalWin(selectedArr) || diagonalWin(selectedArr)) {
      if (turn === "X") {
        alert("Player 1 has won!");
        return true;
      } else {
        alert("Player 2 has won!");
        return true;
      }
    }

    return false;
  }

  $('.box').on("click", function (event) {
    var boxID = $(this).attr('id');

    turn = whichTurn();

    $(this).text(turn);
    $(this).unbind("click");

    arrSelect(selectedArr);

    if (turn === "X") {
      xSelections.push(boxID);
    } else {
      oSelections.push(boxID);
    }

    if (isWinner(selectedArr)) {
      resetboard();
    }

    turns += 1;

    console.log(turns);

    if ((turns === 9) && (isWinner() === false)) {
      alert("Looks like this one was a tie!");
      resetboard();
    }

  })

  function horizontalWin(arr) {

    for (var i = 0; i <= horWins.length - 1; i++) {
      var point = horWins[i];
      var match = 0;

      for (var j = 0; j <= arr.length - 1; j++) {

        if (point.indexOf(arr[j]) !== -1) {
          match += 1;

          if (match === 3) {
            return true;
          }
        }
      }
    }

    return false;
  }

  function diagonalWin(arr) {

    for (var i = 0; i <= diagWins.length - 1; i++) {
      var point = diagWins[i];
      var match = 0;

      for (var j = 0; j <= arr.length - 1; j++) {

        if (point.indexOf(arr[j]) !== -1) {
          match += 1;

          if (match === 3) {
            return true;
          }
        }
      }
    }

    return false;
  }

  function verticalWin(arr) {

    for (var i = 0; i <= verWins.length - 1; i++) {
      var point = verWins[i];
      var match = 0;

      for (var j = 0; j <= arr.length - 1; j++) {

        if (point.indexOf(arr[j]) !== -1) {
          match += 1;

          if (match === 3) {
            return true;
          }
        }
      }
    }
    return false;
  }

  $("#reset-btn").on("click", function () {
    location.reload()
  })

  function resetboard(event) {
    location.reload();

    // $('.box').text("");
    // $('.box').on("click");
    // $('.box').css("background", "white");
    //
    // xSelections = [];
    // oSelections = [];
    console.log('reset');
  }

});
