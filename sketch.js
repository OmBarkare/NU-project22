var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 500);
	rectMode(CENTER);
	
	engine = Engine.create();
	world = engine.world;	

	packageOptions = {restitution: 0.2, isStatic:true};
	packageOptions2 = {restitution:0.2, isStatic: false};

	packageBody = Bodies.circle(width/2 , 200 , 5 ,packageOptions);
	World.add(world, packageBody);

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	//Create a Ground
	ground = Bodies.rectangle(width/2, 700, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	groundSprite=createSprite(ground.position.x, ground.position.y, width, 10);
	groundSprite.shapeColor=color(255)
 

	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y
//  packageBody.collide(ground);
  keyPressed();
  Engine.update(engine); 
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
	packageBody = Bodies.circle(width/2 , 200 , 5 , packageOptions2);
	World.add(world, packageBody);    
  }
}



