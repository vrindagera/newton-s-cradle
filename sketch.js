
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
bobDiameter = 40;
	//Create the Bodies Here.
bobObject1 = new Bob(500,560,20);
bobObject2 = new Bob(450,560,20);
bobObject3 = new Bob(400, 560, 20);
bobObject4 = new Bob(350,560,20);
bobObject5 = new Bob(300,560,20);

roof1 = new Roof(400,360,250,25);

rope1 =new Rope(bobObject1.body, roof1.body,bobDiameter*2,0);
rope2 = new Rope(bobObject2.body, roof1.body,bobDiameter*1,0);
rope3 = new Rope(bobObject3.body, roof1.body,0,0);
rope4 = new Rope(bobObject4.body, roof1.body,-bobDiameter*1,0);
rope5 = new Rope(bobObject5.body, roof1.body,-bobDiameter*2,0)
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();

  roof1.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
           
  drawSprites();
 
}

function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x: 77,y:-79});
	}
}

