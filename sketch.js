
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var sling;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	wood = new Wood(800, 100, 700, 30)
	wood1 = new Wood(500, 100, 80, 30)
	wood2 = new Wood(650, 100, 80, 30)
    wood3 = new Wood(800, 100, 80, 30)
	wood4 = new Wood(950, 100, 80, 30)
	wood5 = new Wood(1100, 100, 80, 30)
	

	ball1= new Ball2(500, 500, 80)
	ball2 = new Ball(650, 500, 80)
	ball3 = new Ball(800, 500, 80)
	ball4 = new Ball(950, 500, 80)
	ball5 = new Ball(1100, 500, 80)
	

	sling1 = new Slingshot(ball1.body, wood1.body)
	sling2 = new Slingshot(ball2.body, wood2.body)
	sling3 = new Slingshot(ball3.body, wood3.body)
	sling4 = new Slingshot(ball4.body, wood4.body)
	sling5 = new Slingshot(ball5.body, wood5.body)
	
	
	Engine.run(engine);
  
}


function draw() 
{
	Engine.update(engine)

	background("pink");

  rectMode(CENTER);

  wood1.display();
  wood2.display();
  wood3.display();
  wood4.display();
  wood5.display();
  
  wood.display();

  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();
  
  sling1.display();
  sling2.display();
  sling3.display();
  sling4.display();
  sling5.display();
  
  drawSprites();
 
}


