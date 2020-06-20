const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ball;
var ball2;
var ground1, ground2, ground3, ground4, ground5, ground6, ground7;
var ground8, ground9, ground10, ground11;
var  ground12, ground13, ground14, ground15, ground16, ground17;
var ground18, ground19, ground20, ground21;
var boxes = [];
var col = "yellow";
var num = 0

function setup() {
  createCanvas(1275,600);
  engine = Engine.create();
        world = engine.world;
  ball = new ColourBall(-120, 80, 10, "blue");
  ball2 = new Dad(-60, 50, 20, "pink");
    ground1 = new Ground(500, 2, 1000, 30);
    ground2 = new Ground(500, 590, 1000, 20);
    ground3 = new Ground(10, 300, 20, 600);
    ground4 = new Ground(990, 300, 20, 600);
    ground5 = new Ground(300, 500, 20, 200);
    ground6 = new Ground(900, 200, 200, 20);
    ground7 = new Ground(100, 410, 250, 20);
    ground8 = new Ground(200, 200, 20, 300);
  ground9 = new Ground(750, 108, 20, 180);
  ground10 = new Ground(750, 450, 20, 300);
  ground11= new Ground(850, 350, 20, 200);
  ground20 = new Ground(630, 160, 100, 150);
  ground21= new Ground(850, 350, 20, 200);
  
  ground18 = new Ground(800, 500, 100, 20);
  ground19 = new Ground(630, 448, 100, 100);

  ground12 = new Ground(940, 500, 120, 20);
    ground13 = new Ground(500, 160, 20, 280);
    ground14 = new Ground(660, 300, 200, 20);
    ground15 = new Ground(500, 500, 20, 300);
    ground16 = new Ground(350, 180, 200, 20);
    ground17 = new Ground(370, 290, 20, 200);

    for (var i = 10, j = 0; i < 1000; i=i+10, j++) {
    var rand=random(1, 100000);
    var randomStuff= random(1, 6000);
      boxes[j] = new ColorBox(rand, randomStuff, 20, 20, "pink"); 
  }
}

function draw() {
  Engine.update(engine);
  background(col);  
  for (var i = 0; i < boxes.length; i++){
    boxes[i].display();

    var ran=random(-10, 10);
    boxes[i].body.position.x = boxes[i].body.position.x+ran;
    boxes[i].body.position.y = boxes[i].body.position.y+2;

  }
  textSize(17);
  text("How to play", 1070, 30);
  text("The bigger ball is the father.", 1002, 70);
  text("To control it, use the w, a, s, ", 1002, 90);
  text("and z keys. The smaller ball on", 1002, 110);
  text("the left will be the child. It can be ", 1002, 130);
  text("controlled using the up, down, left  ", 1002, 150);
  text("and right arrow keys. The aim of ", 1002, 170);
  text("the game is for the father to catch", 1002, 190);
  text("the child, while the child runs ", 1002, 210);
  text("from the father. The child wins if", 1002, 230);
  text("he/she makes it to the room labell-", 1002, 250);
  text("-ed 'safe room'. There are two ways ", 1002, 270);
  text("you can play. one is where you can't", 1002, 290);
  text("pass through the walls. The other is ", 1002, 310);
  text("where you treat the walls as tables", 1002, 330);
  text("the child can hide under. In this ", 1002, 350);
  text("version the child doesn't need to", 1002, 370);
  text("reach the safe room to win. It's up", 1002, 390);
  text("to you which method you pick.", 1002, 410);
  text("SAFE ROOM", 810, 550);
  ball.display();
  ball2.display();
    ground1.display();  
    ground2.display();  
    ground3.display();  
    ground4.display();  
    ground5.display();  
    ground6.display();  
    ground7.display();  
    ground8.display(); 
  ground9.display(); 
  ground18.display(); 
  ground19.display(); 
  ground10.display(); 
  ground11.display();
  ground12.display();  
    ground13.display();  
    ground14.display();  
    ground15.display();  
    ground16.display();  
    ground17.display(); 
    ground20.display(); 
    ground21.display(); 
  isTouching(ball,ground1);
  isTouching(ball,ground2);
  isTouching(ball,ground3);
  isTouching(ball,ground4);
  isTouching(ball,ground5);
  isTouching(ball,ground6);
  isTouching(ball,ground7);
  isTouching(ball,ground8);
  isTouching(ball,ground9);
  isTouching(ball,ground10);
  isTouching(ball,ground11);
  console.log(ball.body.position);
  console.log(ball.width);
  drawSprites();
}

function touchStarted() {
   col = "red";
}

function bounceOff(object1,object2){
  if (object1.body.position.x - object2.body.position.x < object2.width/2 + object1.width/2
    && object2.body.position.x - object1.body.position.x < object2.width/2 + object1.width/2) {
    object1.velocityX = object1.velocityX * (-1);
    object2.velocityX = object2.velocityX * (-1);
  }
  if (object1.body.position.y - object2.body.position.y < object2.height/2 + object1.height/2
    && object2.body.position.y - object2.body.position.y < object2.height/2 + object1.height/2) {
      object1.velocityY = object1.velocityY * (-1);
      object2.velocityY = object2.velocityY * (-1);
  } 
}


function isTouching(object1,object2){
  if (object1.body.position.x - object2.body.position.x < object2.width/2 + object1.width/2
    && object2.body.position.x - object1.body.position.x < object2.width/2 + object1.width/2
    && object1.body.position.y - object2.body.position.y < object2.height/2 + object1.height/2
    && object2.body.position.y - object2.body.position.y < object2.height/2 + object1.height/2) {
    
    col = "red";
    console.log("boo");
  }
  else{
    col = "yellow";
    console.log("nope");
  }
}