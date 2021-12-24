var friend
var Grounnd
var playAnimation  
var play
var gameState = "START";
var playSound
var sound
var alien1,alien2,monster,monsteranimation, enemygroup;
var fruit1,fruit2,fruit3,fruit4,fruit, fruitgroup;
var score
var sword,swordimage;
var appleimg, back , backim , appl1 , appl2 , appl3 , appl4 , appl5
var guy , guyimg
var collectCount = 0
var appla
var alien1,alien2,monster,monsteranimation, enemygroup;
var fruit1,fruit2,fruit3,fruit4,fruit, fruitgroup;
var sword,swordimage;
 var score = 0
var oh;
var card,card2,card3,card4,card5,card6
var ulMaze
var wormtail , wormimg
var tri,triimg
var stupefy

function preload(){
  friendStatic = loadAnimation("boy.png")
  friendAnimation = loadAnimation("boy.png", "boy1.png", "boy2.png","boy3.png")
  grounnd = loadImage("pngtree-modern-double-color-futuristic-neon-background-image_351866.jpg")
  playAnimation  = loadImage("play.png") 
  playSound  = loadSound("mixkit-magic-sweep-game-trophy-257.wav")
 
  sound  = loadSound("sowwsh.mp3")
  appleimg = loadImage("fresh-apple-500x500-removebg-preview.png")
  backim = loadImage("istockphoto-903625692-612x612.jpg")

  guyimg = loadImage("3-sad-guy-on-bench-cartoon-clipart-removebg-preview.png")
  appla = loadSound("applause.mp3")
  monsteranimation=loadAnimation("alien2.png","alien1.png");
  
  fruit1 = loadImage("fruit1.png");
  fruit2 = loadImage("fruit2.png");
  fruit3 = loadImage("fruit3.png");
  fruit4 = loadImage("fruit4.png");
  swordimage = loadImage("sword.png");
  oh = loadSound("oh no.mp3")
  b= loadImage("36ec97d182a95af7f798a43c616151e0.jpg")
  wormimg = loadImage("57cf5e4019190356c46450b0e59d1e65-removebg-preview.png")

  triimg = loadImage("maxresdefault-removebg-preview (2).png")
  wandimg = loadImage("download-removebg-preview (1).png")
  stupefy = loadSound("8d82b5_Harry_Potter_Stupefy_Sound_Effect.mp3")
  pallu = loadImage("palani.png")

}





function setup() {
  createCanvas(displayWidth, displayHeight);

  wormtail = createSprite(1350,400)
 wormtail.addImage(wormimg)
 wormtail.scale = 0.5
 wormtail.visible = false

tri = createSprite(1450,400)
tri.addImage(triimg)
tri.scale = 0.5
tri.visible = false




  sword=createSprite(40,200,20,20);
  sword.addImage(swordimage);
  sword.scale=0.7
 sword.visible = false;
 //creating groups;
  fruitgroup = createGroup();
  enemygroup = createGroup();
  
 //giving score value = 0;
  score = 0
 
     back = createSprite(0,0)
     back.addImage(backim)
     back.visible = false
     back.scale = 5

     guy = createSprite(1200,400)
     guy.addImage(guyimg)
     guy.scale = 0.5
     guy.visible = false

     play  = createSprite(800,500)
     play.addImage(playAnimation)

     friend = createSprite(100,500)
     friend.addAnimation("static",friendStatic)
     friend.addAnimation("walk",friendAnimation)
     friend.scale = 1

     appl1 = createSprite(100 , 200,20,20)
     appl2 = createSprite(500,500,20,20)
     appl3 = createSprite(400,10,20,20)
     appl4 = createSprite(600,600,20,20)
     appl5 = createSprite(900,255,20,20)
     appl1.addImage(appleimg)
     appl2.addImage(appleimg)
     appl3.addImage(appleimg)
     appl4.addImage(appleimg)
     appl5.addImage(appleimg)
    
     
     appl1.scale = 0.05
     appl2.scale = 0.05
     appl3.scale =0.05
     appl4.scale = 0.05
     appl5.scale = 0.05

    
     appl1.visible = false 
     appl2.visible = false
     appl3.visible = false
     appl4.visible = false
     appl5.visible = false


   border = createSprite(0,0,10000,10)
   border2  = createSprite(0,860,10000,10)
   border3 = createSprite(0,0,10,10000)
   border4 = createSprite(1530,0,10,10000)
     

   card = createSprite(400,500,10,500)
   card.shapeColor = "cyan"
   card.velocityY = 7

   card2 = createSprite(800,500,10,500)
   card2.shapeColor = "brown"
   card2.velocityY = -7


   card3 = createSprite(1200,500,10,500)
   card3.shapeColor = "red"
   card3.velocityY = 7
   card.visible = false
   card2.visible = false
   card3.visible = false

   
    wand = createSprite(600,700)
    wand.addImage(wandimg)
    wand.scale = 0.3
    wand.visible = false

 

}

function draw() {
  background(grounnd); 
  
friend.collide(border)

friend.collide(border2)

friend.collide(border3)

friend.collide(border4)

card.bounceOff(border)
card.bounceOff(border2)

card2.bounceOff(border)
card2.bounceOff(border2)

card3.bounceOff(border)
card3.bounceOff(border2)
  
  
  if(gameState === "START"){
    
    fill("pink")  
    textSize(50)
    text("!! Happy Birthday Pallu !!",500,200) 

    if(mousePressedOver(play) ){
      gameState = "STORY"
    playSound.play()
      play.visible = false
    }

}

if (gameState === "STORY"){

  fill("cyan")
  textSize(30)
 text("You want to give palani a gift but you dont have a gift nor money",200,300)
 text("you see a awesome gift on the gift shop but you cant afford it you walk away sadly",200,350);
 text("then you see a guy who lost all his apples and he says if you get them he will buy you any gift .",200,400)
 fill("red")
 text("so go find the apples!!",200,450)
 fill("red")
 text("press on you to start the game",200,500)
 if( mousePressedOver(friend)){
  gameState = "LEVEL1"
 
 back.visible=true
 appl1.visible = true
 appl2.visible = false
 appl3.visible = false
 appl4.visible = false
 appl5.visible = false
 guy.visible = true
 appl1.scale = 0.05
 appl2.scale = 0.05
 appl3.scale = 0.05
 appl4.scale = 0.05
 appl5.scale = 0.05
 friend.scale  = 0.5

}

}


if(gameState === "LEVEL1"){

  if(keyIsDown(RIGHT_ARROW)){
    friend.changeAnimation("walk",friendAnimation);
    friend.x =friend.x+10;
   
  }else if(keyIsDown(LEFT_ARROW)){
    friend.changeAnimation("walk",friendAnimation);
   friend.x = friend.x-10;
 }else if(keyIsDown(UP_ARROW)){
  friend.changeAnimation("walk",friendAnimation);
   friend.y = friend.y-10;
 }else if(keyIsDown(DOWN_ARROW)){
  friend.changeAnimation("walk",friendAnimation);
  friend.y = friend.y+10;
  }
  else{
    friend.changeAnimation("static",friendStatic)
  }




if(appl1.isTouching(friend) ){
  collectCount = 1
  playSound.play()
  appl1.velocityY = 6
  appl2.visible = true
}


if(appl2.isTouching(friend) ){
  collectCount = 2
  playSound.play()

  appl2.velocityY = 6
  appl4.visible = true
}


if(appl3.isTouching(friend) ){
  collectCount= 3
  playSound.play()

  appl3.velocityY =6
  appl4.visible = true
}


if(appl4.isTouching(friend) ){
  collectCount = 4
  playSound.play()

  appl4.velocityY = 6
  appl5.visible = true
}


if(appl5.isTouching(friend) ){
  collectCount  = 5
  playSound.play()

  appl5.velocityY =6
  appla.play()
}


   
if (collectCount === 5   || collectCount> 5){
  
  gameState = "STORY2"
  guy.visible = false;
back.velocityY = -6
friend.scale = 1
friend.x = 100
friend.y = 500


}




}



if(gameState === "STORY2"){
  friend.changeAnimation("static",friendStatic)
  fill("cyan")
  textSize(30)
 text("congrats you did it!!     so the guy takes you to  the shop",200,300)
 text("after buying the gift you come out when the guy steals the gift and throws apple on you",200,350);
 text("he challenges if you destroy all the fruits you get the gift.",200,400)
 fill("red")
 text("so go destroy them! but beware of the monster alien touching him decrease points",200,450)
 fill("red")
 text("press on you to start the game",200,500)

 if( mousePressedOver(friend)){
  gameState = "LEVEL2"
  friend.visible = false
  sword.visible = true
 }
}



if(gameState === "LEVEL2"){
 textSize(40)
  fill("cyan")
  text("score:"+score , 900,30)
  fruits();
  enemy();
  
  sword.x = World.mouseX;
  sword.y = World.mouseY;

  if(fruitgroup.isTouching(sword)){
    fruitgroup.destroyEach();
    //increasing the score by 3;
    score = score+3;
    sound.play()
 }

 else{
  if(enemygroup.isTouching(sword)){
    score = score - 3
oh.play()
enemygroup.destroyEach()
  }
}

if(score === 35 || score>35){
fruitgroup.destroyEach();
enemygroup.destroyEach()
fruit.velocityX = 0
monster.velocityX = 0

sword.destroy()
gameState="story3"
friend.visible = true
}

}



if(gameState === "story3"){
   friend.changeAnimation("static",friendStatic)
  fill("cyan")
  textSize(30)
 text("congrats you did it!!     you got the gift from him!!   ",300,300)
 text("so all you have to do is now go to palani's house . but you dont no the way!!!",300,350);
 text("so try to grab a portkey which is guarded by wormtail  use the wand lying away .",300,400)
 fill("red")
 text("once you touch the wand stupefy will be casted",300,450)
 fill("red")
 text("press on you to start the game",300,500)

 if(mousePressedOver(friend)){
   gameState = "level3"
   friend.scale = 0.5
  wormtail.visible = true
  tri.visible = true
  wand.visible = true
  card.visible = true
  card2.visible = true
  card3.visible = true
 }
}


if(gameState === "level3"){

  if(keyIsDown(RIGHT_ARROW)){
    friend.changeAnimation("walk",friendAnimation);
    friend.x =friend.x+10;
   
  }else if(keyIsDown(LEFT_ARROW)){
    friend.changeAnimation("walk",friendAnimation);
   friend.x = friend.x-10;
 }else if(keyIsDown(UP_ARROW)){
  friend.changeAnimation("walk",friendAnimation);
   friend.y = friend.y-10;
 }else if(keyIsDown(DOWN_ARROW)){
  friend.changeAnimation("walk",friendAnimation);
  friend.y = friend.y+10;
  }
  else{
    friend.changeAnimation("static",friendStatic)
  }

  if(friend.isTouching(card)||friend.isTouching(card2)|| friend.isTouching(card3)){

    friend.x = 100
    friend.y = 500
  }

  if(friend.isTouching(wand)){
     wormtail.velocityY = -5
     stupefy.play()
     wand.destroy ()
     }

     if(friend.isTouching(tri)){
       card.destroy()
       tri.destroy()
       card2.destroy()
       card3.destroy()
       friend.x = 100
      friend.y = 500
friend.scale = 1.5
       gameState = "end"
     }

}

if(gameState ==="end"){
  friend.changeAnimation("static",friendStatic)
  fill("cyan")
  textSize(30)
 text("congrats you did it!!  ",300,300)
 text("HAPPY BIRTHDAY THALAIVAAA",300,350);
 text("Friends 'till the end.",300,400)
 image(pallu,800,300)
}

drawSprites();




}



   function fruits(){
//creating fruits when framecount % 40 === 0;
  if(frameCount%40 === 0){
  fruit = createSprite(400,200,20,20)
    fruit.scale = 0.18;
    
    r = Math.round(random(1,4));
    
    if( r == 1){
      fruit.addImage(fruit1);
    }else if (r == 2){
      fruit.addImage(fruit2);
    }else if (r == 3){
      fruit.addImage(fruit3)
    }else {
      fruit.addImage(fruit4);
    }
//giving y co-ordinate value to the fruits;
    fruit.y = Math.round(random(50,350));
//giving velocity and lifetime
    fruit.velocityX = -7;
    fruit.lifetime = 100;
//adding fruit to fruit group(fruitgroup.add(fruit));
    fruitgroup.add(fruit);
  }
}
function enemy(){
//creating alien animation when frameCount % 150 === 0;
  if(frameCount%150 === 0){
    monster = createSprite(400,200,20,20);
  monster.addAnimation("movingmonster",monsteranimation);
    monster.y = Math.round(random(100,300));
    monster.velocityX = -8;
    monster.lifetime = 50;
//adding enemy to monstergroup(monstergroup.add(enemy));    
    enemygroup.add(monster);
  }
}




