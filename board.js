(function(root) {
  var SnakeGame = root.SnakeGame = (root.SnakeGame || {});
  var Snake = SnakeGame.Snake;
  var Coord = SnakeGame.Coord;

  var Board = SnakeGame.Board = function Board() {
    this.rows = Board.makeBoard();
    this.snake = new Snake();
    this.apple = new Coord([1,1]);
  }

  Board.MAX_WIDTH = 10;
  Board.MAX_HEIGHT = 10;

  Board.makeBoard = function(){
    return _.times(Board.MAX_WIDTH, function (i) {
      return _.times(Board.MAX_HEIGHT, function (j) {
        return null;
      });
    });
  }

  Board.prototype.render = function() {
    return _.map(this.rows, function(arr){
      return _.map(arr, function(spot) {
        if (spot === null){
          return ".";
        } else {
          return "S";
        }
      }).join(" ")
    }).join("\n")
  }

  Board.prototype.update = function(){
    this.rows = Board.makeBoard();
    this.rows[this.apple.y][this.apple.x] = "A";
    var board = this;
    console.log(this.snake.hitItself());

    this.snake.segments.forEach(function(segment) {
      board.rows[segment.y][segment.x] = segment;
    });

    console.log(this.snake.segments[0].equals(this.apple));

    if (this.snake.segments[0].equals(this.apple)) {
      this.snake.grow();
      this.apple.changeSpot();
    } else {

    }
  }

})(this);