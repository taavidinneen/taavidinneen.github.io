var bubbles=[];


function setup() {
  createCanvas(600,400);
  for (var i=0; i<300; i++) {
  bubbles[i]={
    x:random(0,width),
    y:random(0,height),
    display: function(){
      stroke(180,130,200,90);
      noFill();
      ellipse(this.x,this.y,10,10)
    },
    move: function(){
      this.x=this.x+random(-1,1)
      this.y=this.y+random(-1,1)
    }
    }
  }
  print(bubbles); 

}
function draw() {
  background(0);
  for(var i=0;i<bubbles.length; i++){
    bubbles[i].move();
    bubbles[i].display();
  }
}