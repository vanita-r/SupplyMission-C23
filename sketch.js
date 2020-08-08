var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var Wall, Wall2, Wall3;
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
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	wall=createSprite(width/2, 650, 200,20);
	wall.shapeColor="red";
	wall2=createSprite(300,610,20,100);
	wall2.shapeColor="red";
	wall3=createSprite(510,610,20,100);
	wall3.shapeColor="red";


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.5, isStatic:true});
	//packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:3, isStatic:false});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, ground);
	 
	Wall = Bodies.rectangle(width/2,650,200,20,{isStatic:true} );
	 World.add(world, Wall);
	Wall2 = Bodies.rectangle(300,610,20,100,{isStatic:true} );
	 World.add(world, Wall2);
	Wall3 = Bodies.rectangle(510,610,20,100,{isStatic:true} );
	 World.add(world, Wall3);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  Matter.Body.setStatic(Wall,false);
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
	// Look at the hints in the document and understand how to make the package body fall only on
	Matter.Body.setStatic(packageBody,false);
  }
}



