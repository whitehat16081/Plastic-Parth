var personIMG, personSprite, plasticSprite,plastic1Sprite,plastic2Sprite,plastic1IMG,plastic2IMG;
var ocean, oceanIMG,backgroundimage;
var score;
//var packageBody,ground;
//var red1, red2, red3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	personIMG=loadImage("energetic swimmer.png");
	plasticIMG=loadImage("bag.jpg");
	plastic1IMG=loadImage("plasticbottlecrushed.jpg");
	plastic2IMG=loadImage("bottle.png");
	oceanIMG=loadImage("ocean.jpg");
	backgroundimage = loadImage("sand.jpg")
}

function setup() {
	createCanvas(1300, 400);
	//rectMode(CENTER);
	
	score = 0;
	ocean=createSprite(650,300,1300,50);//width/2, height-35, width,10);
	//groundSprite.shapeColor=color(255)
	ocean.addImage(oceanIMG);
	ocean.scale = 2;


	

	
	

	personSprite=createSprite(100, 350, 10,10);
	personSprite.addImage(personIMG)
	personSprite.scale=0.2;
	
	
	
	//red1 = createSprite(400,650,200,20);
	//red1.shapeColor = color(139,0,0);
	

	//red2 = createSprite(300,600,20,120);
	//red2.shapeColor = color(139,0,0);

	

	//red3 = createSprite(500,600,20,120);
	//red3.shapeColor = color(139,0,0);
	

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, packageBody);
	
   // packageSprite.collide(red1);
	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
	background("white");//backgroundimage);

	if (ocean.x < 0){
		ocean.x =ocean.width/2;
	  }
	if (keyDown(RIGHT_ARROW)){
		personSprite.x = personSprite.x + 2;
	}
	
	//personSprite.depth = personSprite.depth+1;
	keyPressed();
	plastic();
  rectMode(CENTER);
  
  ocean.velocityX = -3;//(4 + 3* score/100)
  
  
  score = score + Math.round(getFrameRate()/60);
 // packageSprite.x= packageBody.position.x 
  //packageSprite.y= packageBody.position.y 
  
  drawSprites();
  text("Score: "+ score, 500,50);
}

function keyPressed() {
 if (keyCode === LEFT_ARROW) {

	Matter.Body.setStatic(packageBody, false);
  }
}

function plastic(){
	if (frameCount % 50 === 0){
		plasticSprite=createSprite(600, 380, 10,10);
	//plasticSprite.addImage(plasticIMG)
	plasticSprite.scale=0.3


	
	//plastic1Sprite=createSprite(700,380, 10,10);
	//plastic1Sprite.addImage(plastic1IMG)
	//plastic1Sprite.scale=0.4

//	plastic2Sprite=createSprite(1300, 350, 10,10);
	//plastic2Sprite.addImage(plastic2IMG)
	//plastic2Sprite.scale=0.1;
		plasticSprite.velocityX = -6
		//plastic1Sprite.velocityX = -6
		//plastic2Sprite.velocityX = -6
		
		 //generate random obstacles
		 var rand = Math.round(random(1,3));
		 switch(rand) {
		   case 1: plasticSprite.addImage(plasticIMG);
				   break;
		   case 2: plasticSprite.addImage(plastic1IMG);
				   break;
		   case 3: plasticSprite.addImage(plastic2IMG);
				   break;


				   default:break;
		   
}
	}

}

