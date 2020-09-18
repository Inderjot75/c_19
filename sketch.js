var bg, bg_image;

var Ghost,Ghost_image

var sound;

var door, door_image, doorgroup;

var climber, climber_image, climbergroup;

var invisbleblock, invisibleblockgroup

var Gamestate = "Play"

function preload()
{
bg_image = loadImage ("tower.png");

Ghost_image = loadImage ("ghost-standing.png");
  
climber_image = loadImage("climber.png");

door_Image = loadImage("door.png");

sound = loadSound ("spooky.wav");

  
  
  
}

function setup()
{
createCanvas(600,600)

  bg = createSprite(300,300,10,10);
  bg.addImage(bg_image);
  
  bg.velocityY = -2;

  Ghost = createSprite(300,300,10,10);
  Ghost.addImage(Ghost_image);
  
  Ghost.scale = 0.3;
  

  
  doorgroup = new Group();
  climbergroup = new Group();
  invisbleblockgroup = new Group();

//sound.loop()


}



function draw()
{
background("lightblue")

if(Gamestate==="Play")
{
if(keyDown("left"))
{
 Ghost.x = Ghost.x -3;  
}

if(keyDown("right"))
{
 Ghost.x = Ghost.x +3;  
}

if(keyDown("space"))
{
 Ghost.velocityY = -10; 
}
Ghost.velocityY = Ghost.velocityY = 0.8


}
 
  if(bg.y<0)
{
bg.y = bg.height/2

}
 
  Spawndoors()
  
  if(climbergroup.isTouching(Ghost))
  {
  Ghost.velocityY = 0;
  }
  
  if(invisbleblockgroup.isTouching(Ghost) || Ghost.y >500)
  {
  Gamestate = "Gameover";
  
  }

  drawSprites();
  if(Gamestate ==="Gameover")
  {
  fill("green");
  textSize(30);
  stroke("lightblue")
  strokeWeight(2);
    
    text("GAMEOVER",300,300)
  
  }
}

function Spawndoors()
{
if(frameCount %300===0)
{
  door = createSprite (200,-50);
  door.addImage(door_image);
  
  door.x = Math.round(random(120,400))
  door.velocityY = 1;

  
  climber = createSprite(200,10);
  climber.addImage(climber_image)
  
  climber.velocityY = 1;
  
  invisibleblock = createSprite(200,15);
  
  invisibleblock.velocityY = 1;

  invisibleblock.lifetime = 600;
  door.lifetime = 600;
  climber.lifetime = 600;
  
  Ghost.depth = door.depth;
  Ghost.depth = Ghost.depth + 1;
  
   doorgroup.add(door);
  climbergroup.add(climber);
  invisbleblockgroup.add(invisibleblock);
}

}



