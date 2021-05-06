var PLAY = 1;
var END = 0;
var gameState = PLAY;

var car;
var money, tireTrack, parkingSpot;




var gameOver, restart;


function preload(){
  
  gameOverImg = loadImage("gameOver.png");
  restartImg = loadImage("restart.png");
}

function setup() {
  createCanvas(displayWidth,displayHeight);

  car = createSprite(100,displayHeight-180);

  car.velocityY = -1;
  
  
}

function draw() {
  
  background('blue');

  if(keyDown(UP_ARROW)) {
  car.velocityY = 1.09* car.velocityY;
  }
  
  
 
    
  
  
  
  drawSprites();



}

