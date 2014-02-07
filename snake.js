(function(root) {
  var SnakeGame = root.SnakeGame = (root.SnakeGame || {})
  var Snake = SnakeGame.Snake = function Snake() {
    this.dir = "N";

    var head = new Coord([5,5]);
    var seg1 = new Coord([5,6]);
    var seg2 = new Coord([5,7]);

    this.segments = [head, seg1, seg2];
  };

  Snake.prototype.move = function () {
    var dirCoord;
    if (this.dir === "N") {
      dirCoord = [0,-1];
    }
    else if (this.dir === "S") {
      dirCoord = [0,1];
    }
    else if (this.dir === "E") {
      dirCoord = [-1,0];
    }
    else if (this.dir === "W") {
      dirCoord = [1,0];
    }

    var newCoord = new Coord(dirCoord);
    newCoord.plus(this.segments[0])
    var last = this.segments[this.segments.length-1]
    last.x = newCoord.x;
    last.y = newCoord.y;
    this.segments.unshift(this.segments.pop());

    };

  Snake.prototype.turn = function(dir) {
    this.dir = dir;
  }

  Snake.prototype.grow = function() {
    this.segments.push(new Coord([0,0]))
  }

  Snake.prototype.hitItself = function() {
    var head = this.segments[0];
    var body = this.segments.slice(1);
    return _.some(body, function(el){
      return head.equals(el);
    })
  }

  var Coord = SnakeGame.Coord = function Coord(pos) {
    this.x = pos[0];
    this.y = pos[1];
  };

  Coord.prototype.plus = function (coord) {
    this.x += coord.x;
    this.y += coord.y;
  };

  Coord.prototype.equals = function (coord) {
    return (this.x === coord.x && this.y === coord.y);
  };

  Coord.prototype.changeSpot = function () {
    this.x = Math.floor(Math.random() * 10);
    this.y = Math.floor(Math.random() * 10);
  };



})(this);