var roof
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	
	roof = new Roof(200,550,40,700)
	bob1 = new bob(100,550)
	bob2 = new bob(150,550)
	bob3 = new bob(200,550)
	bob4 = new bob(250,550)
	bob5 = new bob(300,550)
	engine = Engine.create();
	world = engine.world;

	


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Ground.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  drawSprites();
 
}



