
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

function setup() {
	createCanvas(800, 700);
  engine = Engine.create();
  world = engine.world;
  //Create the Bodies Here.
	ground=new Cieling(400,150,650,50);

	bob=new ball(200,400,50);
	bob2=new ball(300,400,50);
	bob3=new ball(400,400,50);
	bob4=new ball(500,400,50);
  bob5=new ball(600,400,50);   
  rope = new Rope(bob.body,{x:200, y:150});
  rope2 = new Rope(bob2.body,{x:300, y:150});
  rope3 = new Rope(bob3.body,{x:400, y:150});
  rope4 = new Rope(bob4.body,{x:500, y:150});
  rope5 = new Rope(bob5.body,{x:600, y:150});
Engine.run(engine);
Engine.update(engine);
}
function draw() {
  rectMode(CENTER);
  background(0);
  ground.display();
 
  rope.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  bob.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
}
  function keyPressed(){
    if (keyCode == UP_ARROW) {
      Matter.Body.applyForce(bob.body,bob.body.position,{x:-1,y:-1});
    }
}



