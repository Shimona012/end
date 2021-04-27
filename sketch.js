
var c,ci;
function preload(){
  ci=loadImage("cake.png")
}
function setup() {
  createCanvas(800,400);
c=createSprite(500,100,50,40);
c.addImage(ci);
c.scale=0.4;
}

function draw() {
  background("pink");  
  textSize(40)
  fill("red")
  text("Ha",200,200);
  fill("orange")
  text("pp",253,200);
  fill("blue")
  text("y!",296,200);
  fill("purple")
  text("Bi",280,300);
  fill("green")
  text("rt",315,300);
  fill("white")
  text("hD",340,300);
  fill("black")
  text("ay",389,300);
  fill("yellow")
  text("!!",430,300);
  textSize(20);
  fill("red")
  text("Shimona",700,380);
  drawSprites();
}