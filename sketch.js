const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var bob1,bob2,bob3,bob4,bob5;

var roof;
var rope1,rope2,rope3,rope4,rope5;
var con;
var rope;
//Create multiple bobs, mulitple ropes varibale here


function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	var roof_options={
		isStatic:true			
	}
	var ball_options={
		restitution:0.8,

	}

	roof = Bodies.rectangle(400,100,230,20,roof_options);
    World.add(world,roof);

	bob1 = Bodies.circle(300,400,40,ball_options);
	World.add(world,bob1);
	bob2 = Bodies.circle(500,400,40,ball_options);
	World.add(world,bob2);
	bob3 = Bodies.circle(500,400,40,ball_options);
	World.add(world,bob3);
	bob4 = Bodies.circle(500,400,40,ball_options);
	World.add(world,bob4);
	bob5 = Bodies.circle(500,400,40,ball_options);
	World.add(world,bob5);



	rope1 = new Rope(bob1,roof,-5,0);
	rope2 = new Rope(bob2,roof,-5,0);
	rope3 = new Rope(bob3,roof,-5,0);
	rope4 = new Rope(bob4,roof,-5,0);
	rope5 = new Rope(bob5,roof,-5,0);
	

	

	Engine.run(engine);

	
  
}

function draw() {
  rectMode(CENTER);
  background("#99004d");

  Engine.update(engine);

  keyPressed();


  rect(roof.position.x,roof.position.y,230,20);

  

  
  ellipse(bob1.position.x,bob1.position.y,40);	
  ellipse(bob2.position.x,bob2.position.y,40);
  ellipse(bob3.position.x,bob3.position.y,40);
  ellipse(bob4.position.x,bob4.position.y,40);
  ellipse(bob5.position.x,bob5.position.y,40);	


  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  
}

function keyPressed(){
	if(keyCode == UP_ARROW){
	Matter.Body.applyForce(bob1,{x:0,y:0},{x:-0.1,y:0});
	}
}
