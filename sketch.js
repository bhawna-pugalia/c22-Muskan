const Engine=Matter.Engine; //namespacing
const World=Matter.World;
const Bodies=Matter.Bodies;

var myEngine,myWorld;
var object;

function setup() {
  createCanvas(400,400);
  myEngine=Engine.create()
  //myEngine.world
  myWorld=myEngine.world
  object=Bodies.rectangle(100,200,50,50)//matter.js object- all the physics properties
  World.add(myWorld,object)
  console.log(object)
}

function draw() {
  background(0);  
  rectMode(CENTER)
 rect(object.position.x,object.position.y,50,50)
}