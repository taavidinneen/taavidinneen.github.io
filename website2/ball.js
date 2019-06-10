let balls=[];
let numBalls=10;
function setup() {
createCanvas(500, 500);
for (let i = 0; i < numBalls; i++) {
balls[i] = new PopcornBall (
random(width),
random(height) 
);
}
}
function draw() {
background(155);
for (let i = 0; i < balls.length; i++) {
balls[i].display();
balls[i].bounce();
balls[i].move();
}
}
class PopcornBall {
constructor(x, y) { // we could add radius or r to the constructor
this.x = x;
this.y = y;
this.xspeed = random(2, 4);
this.yspeed = -3;
this.r = 15;

}
move() {
this.y=this.y-this.yspeed
this.x=this.x-this.xspeed
if (this.yspeed<0){
this.yspeed=this.yspeed-.5
}if (this.yspeed>0){
  this.yspeed=this.yspeed-.5
}if (this.yspeed==0){
  this.yspeed=this.yspeed-.5
}
}
bounce() {
if (this.x>width||this.x<0) {
    this.xspeed=this.xspeed *-1;
  }
  if (this.y>height||this.y<0) {
    this.yspeed=this.yspeed *-1;
}
}
display() {
fill(200, 34, 123); 
ellipse(this.x, this.y, this.r, this.r);
}
}