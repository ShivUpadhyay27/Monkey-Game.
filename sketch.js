  var monkey , monkey_running ;
  var bananaGroup ,bananaImage, obstacle, obstacleImage ;
  var FoodGroup, obstacleGroup ;
  var score ;
  var survivalTime = 0 ;
  var ground ;
 
function preload(){
monkey_running =  loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}
    
function setup() {
  createCanvas(600,600);

  monkey = createSprite(80,315,20,20) ;
  monkey.addAnimation("moving",monkey_running) ;
  monkey.scale =0.1 ;
  
  ground = createSprite(0,0,1200,20) ;
  ground.velocityX = -4 ;
  ground.x = ground.width/2 ;
  console.log(ground.x) ;
  
  stroke("white") ;
  textSize(20) ;
  fill("white") ;
  text("score : "+ 500,50) ;
  
  stroke("black") ;
  textSize(20) ;
  survivalTime = Math.ceil(frameCount/frameRate()) ;
  fill("black") ;
  text("survivalTime : " + survivalTime, 200,50) ;
}

function draw() {
 background(300);
  
   ground.velocityX = -(4 + 3* score/100)           
  
  if (ground.x < 0){
      ground.x = ground.width/2;
    }
         
  if(keyDown("space")&& monkey.y >= 100) {
    monkey.velocityY = -12;
    }
     
    monkey.velocityY = monkey.velocityY + 0.8
  
 drawSprites();
  
}