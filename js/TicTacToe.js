import Square from './Square.js';
export default function TicTacToe(id) {
  const CONTEXTS = {
    _2d: '2d',
    _3d: '3d',
  };
  const ACTORS = {
    x: 'x',
    o: 'o',
  };
  this.actors = ACTORS;
  this.id = id;
  this.canvas = document.getElementById(this.id);
  this.ctx = this.canvas.getContext(CONTEXTS._2d);
  this.squares = [];

  this.w = this.canvas.width / 3;
  this.h = this.canvas.height / 3;

  this.turn = 0;
  this.gameOver = false;

}

TicTacToe.prototype.bindClickEvent = function() {
  const callBack = (event) => {
    this.onClick(event);
  };
  this.canvas.addEventListener('click', function(event) {
    callBack(event);
  });
};

TicTacToe.prototype.createBoard = function() {
  for (let x = 0; x < 3; x++) {
    for (let y = 0; y < 3; y++) {
      this.squares.push(new Square(x * this.w, y * this.h, this.w, this.h, this.ctx));
    }
  }
  this.squares.forEach(squares => squares.draw());
  this.bindClickEvent();
};

TicTacToe.prototype.onClick = function(event) {
  console.log(event);
  if (this.gameOver) {
    this.reset();
    return;
  }
  const x = event.offsetX;
  const y = event.offsetY;

  for (let square of this.squares) {
    // Only allow empty squares to be clicked.
    if (square.actor !== null) {
      continue;
    }
    if (x >= square.x && x <= square.x + square.w && y >= square.y && y <= square.y + square.h) {
      // Set actor.
      square.actor = this.actors[this.turn];
      square.draw();

      // Swith turn.
      this.turn = (this.turn + 1) % this.actors.length;
    }
    this.checkForWinner();
  }
};

TicTacToe.prototype.checkForWinner = function() {

  const winnerCombinations = [
    // Rows
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    // Columns
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    // Diagonals
    [0, 4, 8], [2, 4, 6],
  ]; 

};

TicTacToe.prototype.reset = function() {

};
