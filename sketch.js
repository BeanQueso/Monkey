var backImage,backgr;


function preload(){
  backImage=loadImage("jungle2.jpg");

}

function setup() {
  createCanvas(800,400);
  
  backgr=createSprite(0,0,800,400);
  backgr.addImage(backImage);
  
  
 
}

function draw() {
  
  background(255);
  
  
  
  drawSprites();
  
 
}
