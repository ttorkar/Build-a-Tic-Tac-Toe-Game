$(document).ready(function() {
  var turn = "X";
  var computersTurn = "O";
  var turns = ["#", "#", "#", "#", "#", "#", "#", "#", "#"];
  var count = 0;
  var gameOn = false;

  $("#turnX").click(function() {
    turn = "X";
    computersTurn = "O";
    $("#turnX").addClass("btn-primary");
    $("#turnO").removeClass("btn-primary");
    reset();
  });
  $("#turnO").click(function() {
    turn = "O";
    computersTurn = "X";
    $("#turnO").addClass("btn-primary");
    $("#turnX").removeClass("btn-primary");
    reset();
  });
  $("#reset").click(function() {
    reset();
  });
  function computerTurn() {
    var taken = false;
    while (taken === false && count !== 5) {
      var computersMove = (Math.random() * 10).toFixed();
      var move = $("#" + computersMove).text();
      if (move === "#") {
        $("#" + computersMove).text(computersTurn);
        taken = true;
        turns[computersMove] = computersTurn;
      }
    }
  }
  function playerTurn(turn, id) {
    var spotTaken = $("#" + id).text();
    if (spotTaken === "#") {
      count++;
      turns[id] = turn;
      $("#" + id).text(turn);
      winCondition(turns, turn);
      if (gameOn === false) {
        computerTurn();
        winCondition(turns, computersTurn);
      }
      if ((turns).indexOf('#') < 0){
        gameOn = true;
      reset();
      alert(
        "Draw!")
      }
    }
  }

  function winCondition(turnArray, currentTurn) {
    if (
      turnArray[0] === currentTurn &&
      turnArray[1] === currentTurn &&
      turnArray[2] === currentTurn
    ) {
      gameOn = true;
      reset();
      alert(
        "Player " + currentTurn + " wins"
      );
    } else if (
      turnArray[2] === currentTurn &&
      turnArray[4] === currentTurn &&
      turnArray[6] === currentTurn
    ) {
      gameOn = true;
      reset();
      alert("Player " + currentTurn + " wins!");
    } else if (
      turnArray[0] === currentTurn &&
      turnArray[3] === currentTurn &&
      turnArray[6] === currentTurn
    ) {
      gameOn = true;
      reset();
      alert("Player " + currentTurn + " wins!");
    } else if (
      turnArray[0] === currentTurn &&
      turnArray[4] === currentTurn &&
      turnArray[8] === currentTurn
    ) {
      gameOn = true;
      reset();
      alert("Player " + currentTurn + " wins!");
    } else if (
      turnArray[3] === currentTurn &&
      turnArray[4] === currentTurn &&
      turnArray[5] === currentTurn
    ) {
      gameOn = true;
      reset();
      alert("Player " + currentTurn + " wins!");
    } else if (
      turnArray[6] === currentTurn &&
      turnArray[7] === currentTurn &&
      turnArray[8] === currentTurn
    ) {
      gameOn = true;
      reset();
      alert("Player " + currentTurn + " wins!");
    } else if (
      turnArray[1] === currentTurn &&
      turnArray[4] === currentTurn &&
      turnArray[7] === currentTurn
    ) {
      gameOn = true;
      reset();
      alert("Player " + currentTurn + " wins!");
    } else if (
      turnArray[2] === currentTurn &&
      turnArray[5] === currentTurn &&
      turnArray[8] === currentTurn
    ) {
      gameOn = true;
      reset();
      alert("Player " + currentTurn + " wins!");
    } else {
      gameOn = false;
    }
  }

  $(".tic").click(function() {
    var slot = $(this).attr("id");
    playerTurn(turn, slot);
  });

  function reset() {
    turns = ["#", "#", "#", "#", "#", "#", "#", "#", "#"];
    count = 0;
    $(".tic").text("#");
    gameOn = true;
  }
});
