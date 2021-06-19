const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;
var ground;
var box,box2,box3,stone,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15;
var slingshot;


function setup(){
   createCanvas(500,500);
   engine = Engine.create();
   world = engine.world;

 ground = new Ground(350,250,160,10);
 box = new Box(350,220,20,20);
 box2 = new Box(330,230,20,20);
 box3 = new Box(310,240,20,20);
 box4 = new Box(370,230,20,20);
 box6 = new Box(390,230,20,20);
 box5 = new Box(320,200,20,20);
 box7 = new Box(340,200,20,20);
 box8 = new Box(360,200,20,20);
 box9 = new Box(380,200,20,20);
 box10 = new Box(330,190,20,20);
 box11 = new Box(350,190,20,20);
 box12 = new Box(370,190,20,20);
 stone = new Box(210,200,30,30);
 box13 = new Box(340,180,20,20);
 box14 = new Box(365,180,20,20);

 

 slingshot = new SlingShot(stone.body,{x:70,y:230});
 

}

function draw(){
  background("yellow");
  Engine.update(engine);
ground.display();
box10.display();
box14.display();
box13.display();
box12.display();
box11.display();
box9.display();
box.display();
box8.display();
box2.display();
box3.display();
box4.display();
box5.display();
box6.display();
box7.display();
stone.display();
slingshot.display();
}

function mouseDragged(){
  
      Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
  
}


function mouseReleased(){
  slingshot.fly();

}

function keyPressed(){
  if(keyCode === 32){
      stone.trajectory = [];
     slingshot.attach(stone.body);
  }
}