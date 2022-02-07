var bg,bgImg,bg1Img,bg1;
var logo,logoImg,playbutton,playbuttonImg,infobutton,infobuttonImg;
var leave1,leave2,leave3,leave4,leave5,leave6,leave1Img,leave2Img,leave3Img,leave4Img,leave5Img,leave6Img;
var brokenbulb1,brokenbulb1Img,brokenbulb2,brokenbulb2Img;
var dirty1,dirty2,dirty3,dirty4,dirty5,dirty6,dirty7,dirty1Img,dirty2Img,dirty3Img,dirty4Ing,dirty5Img,dirty6Img,dirty7Img;
var gameState = "start";
var next,nextImg,dirty10;
var boy,boy_animation;
var chat_Bubble,chat_bubbleImg,toolbox,toolbox_img,lock,lock_img,lock2,lock3,broom,broom_img,
mob,mob_img,bulb,bulb_img,ball,ball_img;
var lose,lose_image,restart,restart_img, win,win_img,bg11;
var score_brick = 0;
var breaker;
var edges ;
var tile,tileG,tileimg1,tileimg2,tileimg3,tileimg4,tileimg5,tileimg6,tileimg7,tileimg8,tileimg9,tileimg10;
var paddle_img;
// assigning variables

var coin_animation,coin,ruby,ruby_image,background_image;
var heart,heart_image;
var sapphire,sapphire_image;
var emerald,emerald_image;
var amethyst,amethyst_image;
var stone1,stone;
var basket,basket_animation,boy_collided;
var invisibleGround,ground;
var gameover,gameover_image;
var restart,restart_image;
var collidingSound;
var lifeLose;

// declaring variables for game state


// for scoring system
var score=0;

// creating groups
var stoneG,amethystG,heartG,coinG,sapphireG,emeraldG,rubyG;
var life = 3;
var leftArrow,rightArrow;

function preload(){
  bgImg = loadImage('bg3.jpg')
  bg1Img = loadImage('bg8.jpg')
  logoImg = loadImage('logo1.png')
  playbuttonImg = loadImage('playbutton1.png')
  infobuttonImg = loadImage('infobutton.png')
  leave1Img = loadImage('leave1.png');
  leave2Img = loadImage('leave2.png');
  leave3Img = loadImage('leave3.png');
  leave4Img = loadImage('leave4.png');
  leave5Img = loadImage('leave5.png');
  leave6Img = loadImage('leave6.png');
  brokenbulb1Img = loadImage('brokenbulb1.png');
  brokenbulb2Img = loadImage('brokenbulb2.png');
  dirty1Img = loadImage('dirty1.png');
  dirty2Img = loadImage('dirty2.png');
  dirty3Img = loadImage('dirty3.png');
  dirty4Img = loadImage('dirty4.png');
  dirty5Img = loadImage('dirty5.png');
  dirty6Img = loadImage('dirty6.png');
  dirty7Img = loadImage('dirty7.png');
  nextImg = loadImage('next.png');
  boy_animation = loadAnimation("png/Idle (1).png","png/Idle (2).png","png/Idle (3).png",
  "png/Idle (4).png","png/Idle (5).png","png/Idle (6).png","png/Idle (7).png",
  "png/Idle (8).png","png/Idle (9).png","png/Idle (10).png");
  chat_bubbleImg = loadImage("Chat_buuble.png");
  lock_img = loadImage("lock.png");
  toolbox_img = loadImage("toolbox.png");
  broom_img = loadImage("broom.png");
  ball_img = loadImage("ball.png");
  bulb_img = loadImage("bulb.png");
  mob_img = loadImage("mob.png");
  background_brick = loadImage("bg10.jpg");
  lose_image = loadImage("youLose.png");
  restart_img = loadImage("restart.png");
  bg11 = loadImage("bg11.jpg");
  tileimg1 = loadImage("tile1.png");
tileimg2 = loadImage("tile2.png");
tileimg3 = loadImage("tile3.png");
tileimg4 = loadImage("tile4.png");
tileimg5 = loadImage("tile5.png");
tileimg6 = loadImage("tile6.png");
tileimg7 = loadImage("tile7.png");
tileimg8 = loadImage("tile8.png");
tileimg9 = loadImage("tile9.png");
tileimg10 = loadImage("tile10.png");
paddle_img = loadImage("paddle.png");
coin_animation = loadImage("coin.png");
ruby_image = loadImage("ruby1.png");
background_image = loadImage("background.png");
heart_image = loadImage("heart.png"); 
sapphire_image = loadImage("sapphire1.png");
emerald_image = loadImage("emerald3.png");
amethyst_image = loadImage("amethyst1.png");
stone1 = loadImage("rock1.png");
basket_animation = loadAnimation("boy1.png","boy2.png","boy3.png","boy4.png");
boy_collided = loadAnimation("boy1.png");
gameover_image = loadImage("gameOver.png");
restart_image = loadImage("restart.png");
}

function setup(){
  createCanvas(windowWidth, windowHeight);

  logo = createSprite(windowWidth/2,windowHeight/2-200);
  logo.addImage(logoImg);
  logo.scale = 1;
  logo.visible = false;

  playbutton = createSprite(windowWidth/2,windowHeight/2+150);
  playbutton.addImage(playbuttonImg);
  playbutton.scale = 0.4;
  playbutton.visible = false;

  infobutton = createSprite(width-50,windowHeight/2+300);
  infobutton.addImage(infobuttonImg);
  infobutton.scale = 0.05;
  infobutton.visible = false;

  leave1=createSprite(150,height-150);
  leave1.addImage(leave1Img);
  leave1.scale = 0.25;

  leave2=createSprite(300,height-60);
  leave2.addImage(leave2Img);
  leave2.scale = 0.25;

  edges = createEdgeSprites();

  leave3=createSprite(width/2-150,height-150);
  leave3.addImage(leave3Img);
  leave3.scale = 0.75;

  leave4=createSprite(width-100,height-60);
  leave4.addImage(leave4Img);
  leave4.scale = 0.25;

  leave5=createSprite(width/2+150,height-100);
  leave5.addImage(leave5Img);
  leave5.scale = 0.25;

  leave6=createSprite(width-300,height-120);
  leave6.addImage(leave6Img);
  leave6.scale = 0.25;

  brokenbulb1=createSprite(width/2-355,height/2-120);
  brokenbulb1.addImage(brokenbulb1Img);
  brokenbulb1.scale = 0.6;

  brokenbulb2=createSprite(width-515,height/2-120);
  brokenbulb2.addImage(brokenbulb2Img);
  brokenbulb2.scale = 0.3;

  dirty1=createSprite(width/2-50,height/2+100);
  dirty1.addImage(dirty1Img);
  dirty1.scale = 0.15;

  dirty10=createSprite(width/2+250,height/2);
  dirty10.addImage(dirty2Img);
  dirty10.scale = 0.15;

  dirty2=createSprite(width/2-250,height/2+60);
  dirty2.addImage(dirty2Img);
  dirty2.scale = 0.15;

  dirty3=createSprite(width/2+70,height/2+70);
  dirty3.addImage(dirty3Img);
  dirty3.scale = 0.15;

  dirty4=createSprite(width/2+300,height/2+100);
  dirty4.addImage(dirty4Img);
  dirty4.scale = 0.15;

  dirty5=createSprite(width/2+170,height/2+100);
  dirty5.addImage(dirty5Img);
  dirty5.scale = 0.1;

 

  boy = createSprite(width/2-300,height-240);
  boy.addAnimation("idle",boy_animation);
  boy.scale = 0.4;

  chat_Bubble = createSprite(width/2-330,height-420);
  chat_Bubble.addImage(chat_bubbleImg);
  chat_Bubble.scale = 0.7;

  toolbox = createSprite(width-60,height/2);
  toolbox.addImage(toolbox_img);
  toolbox.scale = 0.4;

  broom = createSprite(width-50,height/4-60);
  broom.addImage(broom_img);
  broom.scale=0.2;

  lock = createSprite(width-60,height/4-70);
  lock.addImage(lock_img);
  lock.scale = 0.35;

  mob = createSprite(width-65,height/4+65);
  mob.addImage(mob_img);
  mob.scale=1;

  lock2 = createSprite(width-60,height/4+70);
  lock2.addImage(lock_img);
  lock2.scale = 0.35;

  bulb = createSprite(width-65,height/2+65);
  bulb.addImage(bulb_img);
  bulb.scale=0.3;

  lock3 = createSprite(width-60,height/2+70);
  lock3.addImage(lock_img);
  lock3.scale = 0.35;

  ball = createSprite(width/2,height/2+100);
  ball.addImage(ball_img);
  ball.scale = 0.15;

  lose = createSprite(width/2,height/2);
  lose.addImage(lose_image);
  lose.scale = 1;
 
  breaker = createSprite(width/2,height/2+250);
  breaker.addImage(paddle_img);
  breaker.scale=0.5;

  restart = createSprite(width/2+200,height/2+200);
  restart.addImage(restart_img);
  restart.scale = 0.2;

  next = createSprite(width/2,height/2+200);
  next.addImage(nextImg);
  next.scale = 1;

 breaker.debug = true;
 breaker.setCollider("rectangle",0,0,200,50);

   // creating an invisible ground on which the boy is standing
   invisibleGround = createSprite(400,height/2+250,width,20);
   invisibleGround.visible = false;
 
  //assigning groups
  stoneG = new Group();
  emeraldG= new Group();
  heartG= new Group();
  coinG= new Group();
  amethystG= new Group();
  sapphireG=new Group();
  rubyG = new Group();

basket = createSprite(width/2-60,height/2+200,540,10,10);
  basket.addAnimation("running",basket_animation);
  basket.addAnimation("boycollided",boy_collided);
  basket.scale =0.9;
  basket.collide(invisibleGround);
    

 
  gameover = createSprite(400,300,10,10);
  gameover.addImage("game",gameover_image);
  gameover.scale = 0.5;

  
  breaker.visible = false;
  mob.visible = false;
  lock2.visible = false;
  bulb.visible = false;
  lock3.visible = false;
  ball.visible = false;
  leave1.visible = false;
  leave2.visible = false;
  leave3.visible = false;
  leave4.visible = false;
  leave5.visible = false;
  leave6.visible = false;
  dirty1.visible = false;
  dirty2.visible = false;
  dirty3.visible = false;
  dirty4.visible = false;
  dirty5.visible = false;
  dirty10.visible = false;
  brokenbulb1.visible = false;
  brokenbulb2.visible = false;
  next.visible = false;
  boy.visible = false;
  chat_Bubble.visible = false;
  lock.visible = false;
  toolbox.visible = false;
  broom.visible = false;
  ball.visible = false;
  lose.visible= false;
  restart.visible = false;
  gameover.visible = false;
  basket.visible = false;
  tileG = new Group();
}

function draw()
//createEdgeSprites();
{
  if(gameState==="start")
  {
    background(bgImg);
    logo.visible = true;
    playbutton.visible = true;
    infobutton.visible = true;

    if(mousePressedOver(playbutton))
    {
      gameState = "park";
      lock.visible = true;
      lock2.visible = true;
      lock3.visible = true;
      
    }

  }

  else if(gameState==="park")
  {
    background(bg1Img);
  logo.visible = false;
  playbutton.visible = false;
  infobutton.visible = false;
  leave1.visible = true;
  leave2.visible = true;
  leave3.visible = true;
  leave4.visible = true;
  leave5.visible = true;
  leave6.visible = true;
  dirty1.visible = true;
  dirty2.visible = true;
  dirty3.visible = true;
  dirty4.visible = true;
  dirty5.visible = true;
  dirty10.visible = true;
  brokenbulb1.visible = true;
  brokenbulb2.visible = true;
 // next.visible = true;
  boy.visible = true;
  chat_Bubble.visible = true;
  broom.visible = true;
  toolbox.visible = true;
  mob.visible = true;
  bulb.visible = true;

  

  }
 
if(mousePressedOver(lock)){
  gameState="brickStart";
  tileSpawn();


}
if(gameState==="park2"){
  background(bg1Img);
  logo.visible = false;
  playbutton.visible = false;
  infobutton.visible = false;
  leave1.visible = true;
  leave2.visible = true;
  leave3.visible = true;
  leave4.visible = true;
  leave5.visible = true;
  leave6.visible = true;
  dirty1.visible = true;
  dirty2.visible = true;
  dirty3.visible = true;
  dirty4.visible = true;
  dirty5.visible = true;
  dirty10.visible = true;
  brokenbulb1.visible = true;
  brokenbulb2.visible = true;
 // next.visible = true;
  boy.visible = true;
 // chat_Bubble.visible = true;
  broom.visible = true;
  toolbox.visible = true;
  mob.visible = true;
  bulb.visible = true;

  if(mousePressedOver(leave1)){
    leave1.destroy();
  }
  if(mousePressedOver(leave2)){
    leave2.destroy();
  }
  if(mousePressedOver(leave3)){
    leave3.destroy();
  }
  if(mousePressedOver(leave4)){
    leave4.destroy();
  }
  if(mousePressedOver(leave5)){
    leave5.destroy();
  }
  if(mousePressedOver(leave6)){
    leave6.destroy();
  }

  if(mousePressedOver(lock2)){
    gameState="richieRich_start"
  }

}
if(gameState === "park3"){
  background(bg1Img);
  logo.visible = false;
  playbutton.visible = false;
  infobutton.visible = false;
  dirty1.visible = true;
  dirty2.visible = true;
  dirty3.visible = true;
  dirty4.visible = true;
  dirty5.visible = true;
  dirty10.visible = true;
  leave1.visible = true;
  leave2.visible = true;
  leave3.visible = true;
  leave4.visible = true;
  leave5.visible = true;
  leave6.visible = true;
  brokenbulb1.visible = true;
  brokenbulb2.visible = true;
 // next.visible = true;
  boy.visible = true;
 // chat_Bubble.visible = true;
  broom.visible = true;
  toolbox.visible = true;
  mob.visible = true;
  bulb.visible = true;
  lock3.visible = true;

  if(mousePressedOver(dirty1)){
    dirty1.destroy();
  }
  if(mousePressedOver(dirty2)){
    dirty2.destroy();
  }
  if(mousePressedOver(dirty3)){
    dirty3.destroy();
  }
  if(mousePressedOver(dirty4)){
    dirty4.destroy();
  }
  if(mousePressedOver(dirty5)){
    dirty5.destroy();
  }
  if(mousePressedOver(dirty10)){
    dirty10.destroy();
  }
  if(mousePressedOver(leave1)){
    leave1.destroy();
  }
  if(mousePressedOver(leave2)){
    leave2.destroy();
  }
  if(mousePressedOver(leave3)){
    leave3.destroy();
  }
  if(mousePressedOver(leave4)){
    leave4.destroy();
  }
  if(mousePressedOver(leave5)){
    leave5.destroy();
  }
  if(mousePressedOver(leave6)){
    leave6.destroy();
  }
  if(mousePressedOver(lock3)){
    gameState = "";
  }
}
if(gameState === "park4"){
  background(bg1Img);
  logo.visible = false;
  playbutton.visible = false;
  infobutton.visible = false;
  dirty1.visible = true;
  dirty2.visible = true;
  dirty3.visible = true;
  dirty4.visible = true;
  dirty5.visible = true;
  dirty10.visible = true;
  leave1.visible = true;
  leave2.visible = true;
  leave3.visible = true;
  leave4.visible = true;
  leave5.visible = true;
  leave6.visible = true;
  brokenbulb1.visible = true;
  brokenbulb2.visible = true;
 // next.visible = true;
  boy.visible = true;
 // chat_Bubble.visible = true;
  broom.visible = true;
  toolbox.visible = true;
  mob.visible = true;
  bulb.visible = true;

 
}

if(gameState==="brickStart"){

    //setting background
    background(background_brick);
    textSize(24);
    text("Score: "+score_brick,width/2,height/4-120);
  //setting visiblity
  mob.visible = false;
  lock2.visible = false;
  bulb.visible = false;
  lock3.visible = false;
  ball.visible = false;
  leave1.visible = false;
  leave2.visible = false;
  leave3.visible = false;
  leave4.visible = false;
  leave5.visible = false;
  leave6.visible = false;
  dirty1.visible = false;
  dirty2.visible = false;
  dirty3.visible = false;
  dirty4.visible = false;
  dirty5.visible = false;
  dirty10.visible = false;
  brokenbulb1.visible = false;
  brokenbulb2.visible = false;
  next.visible = false;
  boy.visible = false;
  chat_Bubble.visible = false;
  lock.visible = false;
  toolbox.visible = false;
  broom.visible = false;
  ball.visible=true;

  breaker.visible = true;

  text("Press Space to start!",width/2,height/2);
  if(keyDown("space")){
    gameState="brickBreaker";
    serve();
  }
}
if(gameState==="brickBreaker"){

  ball.bounceOff(edges[2]);
  ball.bounceOff(edges[1]);
  ball.bounceOff(edges[0]);
  ball.bounceOff(breaker);
  //setting background
  background(background_brick);
  textSize(24);
  text("Score: "+score_brick,width/2,height/4-120);
  
  if (ball.isTouching(breaker)) {
      
    ball.velocityY = -ball.velocityY;
  }
  


  if(keyDown("left_arrow")){
    breaker.x=breaker.x-10;
  }
  if(keyDown("right_arrow")){
    breaker.x=breaker.x+10;
  }
  if(ball.isTouching(tileG)){
    ball.velocityY = ball.velocityY*-1;
  }

  for (var i = 0; i < tileG.length; i++) {
    if (tileG.get(i) != null && ball.isTouching(tileG.get(i))) {
      ball.velocityY = -ball.velocityY;
     
      tileG.get(i).destroy();
      score_brick = score_brick+1;
  //    Pop.play();
      ;
    }}

    if (ball.y >= windowHeight + 5 && ball.y <= windowHeight + 20) {
      ball.x = width / 2;
      ball.y = height / 2;
     
      gameState = "brick_lose";
     tileG.destroyEach();

     
    }

    //serve();
//setting visiblity
  mob.visible = false;
  lock2.visible = false;
  bulb.visible = false;
  lock3.visible = false;
  ball.visible = false;
  leave1.visible = false;
  leave2.visible = false;
  leave3.visible = false;
  leave4.visible = false;
  leave5.visible = false;
  leave6.visible = false;
  dirty1.visible = false;
  dirty2.visible = false;
  dirty3.visible = false;
  dirty4.visible = false;
  dirty5.visible = false;
  dirty10.visible = false;
  brokenbulb1.visible = false;
  brokenbulb2.visible = false;
  next.visible = false;
  boy.visible = false;
  chat_Bubble.visible = false;
  lock.visible = false;
  toolbox.visible = false;
  broom.visible = false;
  ball.visible=true;

  breaker.visible = true;

  //winning the game
  if(score_brick === 4){
    gameState = "brick_win";
    tileG.destroyEach();
  }


}
if(gameState==="brick_win"){
  background(bg11);
  ball.velocityX = 0;
  ball.velocityY = 0;
  ball.visible = false;
  breaker.visible = false;
  next.visible = true;
  
  textSize(24);
  text("Hurray! You have unlocked broom!",width/2-100,height/2+50);

  if(mousePressedOver(next)){
    gameState="park2";
    next.visible = false;
    lock2.visible = true;
    lock3.visible = true;
  }

}

if(gameState==="brick_lose"){
  background("red");
  ball.velocityX = 0;
  ball.velocityY = 0;
  ball.visible = false;
  breaker.visible = false;
  
  lose.visible = true;
  restart.visible = true;
  textSize(24);
 // text("You Lose!",width/2,height/2+200);
 if(mousePressedOver(restart)){
   gameState = "brickStart";
   reset();
 }

 
}
if(gameState === "richieRich_start"){
  background(background_image);

  stroke("white");
  textSize(20);
  fill("white");
  
  stroke("black");
  textSize(20);
  fill("black");
  text("Life : "+life,windowWidth/2+200,height/4-50);
  
  
   text("Score:"+score,windowWidth/4-200,height/4-50);
  
 

  mob.visible = false;
  lock2.visible = false;
  bulb.visible = false;
  lock3.visible = false;
  ball.visible = false;
  leave1.visible = false;
  leave2.visible = false;
  leave3.visible = false;
  leave4.visible = false;
  leave5.visible = false;
  leave6.visible = false;
  dirty1.visible = false;
  dirty2.visible = false;
  dirty3.visible = false;
  dirty4.visible = false;
  dirty5.visible = false;
  dirty10.visible = false;
  brokenbulb1.visible = false;
  brokenbulb2.visible = false;
  next.visible = false;
  boy.visible = false;
  chat_Bubble.visible = false;
  lock.visible = false;
  toolbox.visible = false;
  broom.visible = false;
  basket.visible = true;

   //giving movement to the boy when left arrow key is pressed
   if(keyDown("left_arrow")){
    basket.x=basket.x-10;
 }
 
 //giving movement to the boy when right arrow key is pressed
 if(keyDown("right_arrow")){
    basket.x = basket.x+10;
 }
    // creating stones
    Stones();
  
    //creating continous gems
 var select_gem = Math.round(random(1,6));
 
 if (frameCount % 100 === 0) {
   if (select_gem === 1) {
   Coins();
   } else if (select_gem === 2) {
     Sapphires();
   } else if (select_gem === 3) {
    Emeralds();
   }else if(select_gem ===4){
     Amethysts();
   } else if(select_gem ===5){
     Rubies();
   }
   
   else {
     Hearts();
   }
 }
  
  // scoring system
 if(basket.isTouching(coinG)){
   coinG.destroyEach();
   score = score+1;

 }
if(basket.isTouching(rubyG)){
   rubyG.destroyEach();
   score = score+1;
 
 }
if(basket.isTouching(emeraldG)){
   emeraldG.destroyEach();
   score = score+1;

 }  
 if(basket.isTouching(amethystG)){
   amethystG.destroyEach();
   score = score+1;

 }
  if(basket.isTouching(sapphireG)){
   sapphireG.destroyEach();
   score = score+1;
  
 }
 if(basket.isTouching(heartG)){
   heartG.destroyEach();
   life = life+1;
 
 }
  
  // losing life on touching an obstacle
  if(basket.isTouching(stoneG)){
   stoneG.destroyEach();
   life = life-1;
 }
  
 // when life is 0 the game should end 
  if(life === 0){
    gameState="end";
  
  }
  if(score === 1){
    gameState = "park3"
    stoneG.setVelocityXEach(0);
 rubyG.setVelocityXEach(0); 
coinG.setVelocityXEach(0);
emeraldG.setVelocityXEach(0);
sapphireG.setVelocityXEach(0);
amethystG.setVelocityXEach(0);
heartG.setVelocityXEach(0);

// destroying existing gems on the screen
stoneG.destroyEach();
rubyG.destroyEach();
coinG.destroyEach();
emeraldG.destroyEach();
sapphireG.destroyEach();
amethystG.destroyEach();
heartG.destroyEach();
basket.destroy();
  }


}
if(gameState === "end"){
    
  basket.changeAnimation("boycollided",boy_collided);
  restart.visible = true;
 gameover.visible = true;
// displaying game over text
//    text("Game Over",400,400);




// stop making of new gems
 stoneG.setVelocityXEach(0);
 rubyG.setVelocityXEach(0); 
coinG.setVelocityXEach(0);
emeraldG.setVelocityXEach(0);
sapphireG.setVelocityXEach(0);
amethystG.setVelocityXEach(0);
heartG.setVelocityXEach(0);

// destroying existing gems on the screen
stoneG.destroyEach();
rubyG.destroyEach();
coinG.destroyEach();
emeraldG.destroyEach();
sapphireG.destroyEach();
amethystG.destroyEach();
heartG.destroyEach();


// game should reset when R is pressed
//  text("Press 'R' to restart",400,550);
if(keyDown("r")||mousePressedOver(restart)){
  reset1();
  basket.changeAnimation("running",basket_animation);

}


}






drawSprites();



}

function serve() {
  ball.velocityX = -6;
  ball.velocityY = 7;
}
function reset(){

  score_brick=0;
 
  ball.x = width/2;
  ball.y =height/2+200;
  tileSpawn();
  lose.visible = false;
  restart.visible = false;
  breaker.x = width/2;
  breaker.y = height/2+250;
}
function tileSpawn() {
  for (var x = 52.5; x < windowWidth; x = x + windowWidth / 13) {
    for (var y = 100; y <= 300; y = y + 50) {
      tile = createSprite(x, y);
      tileG.add(tile);
      tile.scale = 0.25;
      rand = Math.round(random(1, 10));
      switch (rand) {
        case 1:
          tile.addImage(tileimg1);
          break;
        case 2:
          tile.addImage(tileimg2);
          break;
        case 3:
          tile.addImage(tileimg3);
          break;
        case 4:
          tile.addImage(tileimg4);
          break;
        case 5:
          tile.addImage(tileimg5);
          break;
        case 6:
          tile.addImage(tileimg6);
          break;
        case 7:
          tile.addImage(tileimg7);
          break;
        case 8:
          tile.addImage(tileimg8);
          break;
        case 9:
          tile.addImage(tileimg9);
          break;
        case 10:
          tile.addImage(tileimg10);
          break;
        default:
          break;
      }
    }
  }
}

// function to reset the game
function reset1(){
  gameState = "richieRich_start";
  restart.visible = false;
  gameover.visible = false;
  score = 0;
  life=3;
 

}

// function for creating gems 
function Coins(){
  coin = createSprite(Math.round(random(90, windowWidth-50)),0,10,10);
  coin.addImage("moving",coin_animation);
  coin.scale=0.4;
  coin.velocityY = (3+  3* score/100);
  coin.lifetime = 180;
  coinG.add(coin);
}

function Emeralds(){
  emerald= createSprite(Math.round(random(90, windowWidth-50)),0,10,10);
  emerald.addImage("falling",emerald_image);
  emerald.scale =0.03;
  emerald.velocityY = (3+ 3* score/100);
  emerald.lifetime = 180;
  emeraldG.add(emerald);
  
}

function Rubies(){
  ruby= createSprite(Math.round(random(20,windowWidth-50)),0,10,10);
  ruby.addImage("falling",ruby_image);
  ruby.scale =0.15;
  
  ruby.velocityY = (3+ 3* score/100);
  ruby.velocityY = 3;
  ruby.lifetime = 180;
  rubyG.add(ruby);
  
}


function Sapphires(){
  sapphire = createSprite(Math.round(random(90, 700)),0,10,10);
  sapphire.addImage("fell",sapphire_image);
  sapphire.scale = 0.1;
  sapphire.velocityY = (3+ 3* score/100);
  sapphire.lifetime = 180;
  sapphireG.add(sapphire);
}

function Amethysts(){
  amethyst = createSprite(Math.round(random(90, windowWidth-50)),0,10,10);
  amethyst.addImage("go",amethyst_image);
  amethyst.scale =0.1;
  amethyst.velocityY = (3+ 3* score/100);
  amethyst.lifetime = 180;
  amethystG.add(amethyst);
}

function Hearts(){
  heart = createSprite(Math.round(random(90, windowWidth-50)),0,10,10);
  heart.addImage("going",heart_image);
  heart.scale = 0.3;
  heart.velocityY=(3+  3* score/100);
  heart.lifetime = 180;
  heartG.add(heart);  
}

// function for creating stones
function Stones(){
   if (frameCount % 150 === 0){
     stone = createSprite(Math.round(random(90, windowWidth-50)),0,10,10)
     stone.addImage("hit",stone1);
     stone.scale=0.4;
     stone.velocityY=(3+ 3* score/100);
     stone.lifetime = 180;
     stoneG.add(stone);
   }
}




