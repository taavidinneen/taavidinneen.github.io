var speed = 30
var numSegments = 10;
var direction = 'right';
var xStart = 0; 
var yStart = 250; 
var diff = 10;
var xCor = [];
var yCor = [];
var scoreElem;
function setup() {  
  createCanvas(1000, 530);
  background(170,130,200);
  frameRate(speed);
  stroke(1);
  strokeWeight(10);
  for (var i = 0; i < numSegments; i++) {
    xCor.push(xStart + (i * diff));
    yCor.push(yStart);
  }
}
function draw() {
  //background(0);
  for (var i = 0; i < numSegments - 1; i++) {
    line(xCor[i], yCor[i], xCor[i + 1], yCor[i + 1]);
  }
  updateSnakeCoordinates();
}
function updateSnakeCoordinates() {
  for (var i = 0; i < numSegments - 1; i++) {
    xCor[i] = xCor[i + 1];
    yCor[i] = yCor[i + 1];
  }
  switch (direction) {
    case 'right':
      xCor[numSegments - 1] = xCor[numSegments - 2] + diff;
      yCor[numSegments - 1] = yCor[numSegments - 2];
      break;
    case 'up':
      xCor[numSegments - 1] = xCor[numSegments - 2];
      yCor[numSegments - 1] = yCor[numSegments - 2] - diff;
      break;
    case 'left':
      xCor[numSegments - 1] = xCor[numSegments - 2] - diff;
      yCor[numSegments - 1] = yCor[numSegments - 2];
      break;
    case 'down':
      xCor[numSegments - 1] = xCor[numSegments - 2];
      yCor[numSegments - 1] = yCor[numSegments - 2] + diff;
      break;
  }
}
function checkSnakeCollision() {
  var snakeHeadX = xCor[xCor.length - 1];
  var snakeHeadY = yCor[yCor.length - 1];
  for (var i = 0; i < xCor.length - 1; i++) {
    if (xCor[i] === snakeHeadX && yCor[i] === snakeHeadY) {
      return true;
    }
  }
}
function keyPressed() {
  switch (keyCode) {
    case 37: //left
      if (direction != 'right') {
        direction = 'left';
      }
      break;
    case 39: //right
      if (direction != 'left') {
        direction = 'right';
      }
      break;
    case 38: //up
      if (direction != 'down') {
        direction = 'up';
      }
      break;
    case 40: //down
      if (direction != 'up') {
        direction = 'down';
      }
      break;
  }
}