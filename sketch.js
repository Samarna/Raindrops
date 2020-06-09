const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var raindrop = [];


function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  for(var i = 0; i < 200; i ++){
    raindrop.push(new Raindrop());
  }
}

function draw() {
  background("darkblue");
  Engine.update(engine);
  for(var i = 0; i < 200; i ++){
    raindrop[i].display();
    raindrop[i].reset();
  }
  //raindrop.display();
}
