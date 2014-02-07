(function(root) {
  var SnakeGame = root.SnakeGame = (root.SnakeGame || {});
  var Snake = SnakeGame.Snake;
  var Coord = SnakeGame.Coord;
  var Board = SnakeGame.Board;

  var View = SnakeGame.View = function View($el){
    this.$el = $el;
    this.board = new Board();
  }

  View.prototype.start = function() {
    var board = this.board;
    $('body').keydown(function (event) {
      board.snake.dir = handleKeyEvent(event);
    });

    setInterval(this.step.bind(this), 500);
  }

  View.prototype.step = function () {
    this.board.snake.move();
    this.board.update();
    // this.$el.html(this.board.render());
    this.htmlRender();
  }

  View.prototype.htmlRender = function () {
    this.$el.empty();
    this.$el.append("<ul class='group'></ul>");

    this.board.rows.forEach(function(row) {
      row.forEach(function(cell) {
        if (cell === null){
          $('#snake ul').append('<li></li>');
        } else if (cell === "A") {
          $('#snake ul').append("<li class='apple'></li>");
        } else {
          $('#snake ul').append("<li class='snake'></li>");
        }
      })
    });
  }

  var handleKeyEvent = function(event){
    var dir;
    if (event.keyCode === 38) {
      dir = "N";
    }
    else if (event.keyCode === 37) {
      dir = "E";
    }
    else if (event.keyCode === 40) {
      dir = "S";
    }
    else if (event.keyCode === 39) {
      dir = "W";
    }

    return dir;
  }

})(this);