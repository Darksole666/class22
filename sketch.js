const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies
const Body = Matter.Body;

var myengine, myworld;

var ground, groundoption, ball, balloptions;

function setup() {
  
  var canvas = createCanvas(400,400);
  //ball= createSprite(200, 200, 50, 50);
 // ground = createSprite(200,100,50,50);

  //myworld is my Engine's world

  myengine = Engine.create();
  myworld = myengine.world;

  var groundoption = {
    isStatic: true,
  }

  ground = Bodies.rectangle(200,380,400,10, groundoption);
  World.add(myworld,ground);
  //console.log(ground.position.x);
  //console.log(ground.position.y);
  console.log(ground)

var balloptions = {
  restitution : 1.0
}
  ball=Bodies.circle(200,200,25,balloptions);
  World.add(myworld, ball)

}

function draw() {
  background("black");  
  //drawSprites();


  Engine.update(myengine);
  rectMode(CENTER);
  
  rect(ground.position.x,ground.position.y,400,10);
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,25,25)
 
}