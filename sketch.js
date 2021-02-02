var helicopterIMG, helicopter, package,packageIMG;
var packageBody,ground;
var PLAY=1;
var END=0;
var gameState=PLAY;
var win,winImg;
var invisible;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
	winImg=loadImage("win.png")
}

function setup() {
	createCanvas(800,700);
	rectMode(CENTER);
	
	package=createSprite(width/4, 200, 10,10);
	package.addImage(packageIMG)
	package.scale=0.2

	helicopter=createSprite(width/2, 200, 10,10);
	helicopter.addImage(helicopterIMG)
	helicopter.scale=0.6

	
	ground=createSprite(width/2, height-35, width,10);
	ground.shapeColor=color(255)

	invisible=createSprite(400,650, 200,20);
	invisible.visible=false;


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.4, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

 	boxPosition=width/2-100
 	boxY=610;


 	boxleftSprite=createSprite(boxPosition, boxY, 20,100);
 	boxleftSprite.shapeColor=color(255,0,0);

 	boxLeftBody = Bodies.rectangle(boxPosition+20, boxY, 20,100 , {isStatic:true} );
 	World.add(world, boxLeftBody);

 	boxBase=createSprite(boxPosition+100, boxY+40, 200,20);
 	boxBase.shapeColor=color(255,0,0);

 	boxBottomBody = Bodies.rectangle(boxPosition+100, boxY+45-20, 200,20 , {isStatic:true} );
 	World.add(world, boxBottomBody);

 	boxleftSprite=createSprite(boxPosition+200 , boxY, 20,100);
 	boxleftSprite.shapeColor=color(255,0,0);

 	boxRightBody = Bodies.rectangle(boxPosition+200-20 , boxY, 20,100 , {isStatic:true} );
 	World.add(world, boxRightBody);

	Engine.run(engine);

	win=createSprite(400,350,20,20)
	win.addImage(winImg);
	win.visible=false;
	win.scale=1

}

function draw() {
	package.collide(invisible)
    if(gameState===PLAY){
	rectMode(CENTER);
	background(0);
  
	helicopter.velocityX=0;
	
	package.x=helicopter.position.x

	if(keyDown("right")){
		  helicopter.velocityX=4;
	  }
	  if(keyDown("left")){
		  helicopter.velocityX=-4;
	  }
	if(keyDown("down")){
		package.velocityY=16;
	}
 
	if(package.y===600){
		win.visible=true;
        gameState=END;
	}

    }else if(gameState===0){

    }



  
  drawSprites();
  
  
 
}
