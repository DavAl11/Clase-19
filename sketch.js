var towerImg, tower;
var doorImg, door, doorsGroup;
var climberImg, climber, climbersGroup;
var ghost, ghostImg;
var invisibleBlockGroup, invisibleBlock;
var gameState = "play"

function preload() {
  towerImg = loadImage("tower.png");
  doorImg = loadImage("door.png");
  climberImg = loadImage("climber.png");
  ghostImg = loadImage("ghost-standing.png");
  spookySound = loadSound("spooky.wav");
}

function setup() {
  createCanvas(600, 600);
  tower = createSprite(300, 300);
  tower.addImage("tower", towerImg);
  tower.velocityY = 1;
  
  ghost = createSprite(300,200,50,50);
  ghost.addImage(ghostImg);
  ghost.scale=0.4

  doorsGroup = new Group();
  climbersGroup = new Group();
  invisibleBlockGroup = new Group();

}

function draw() {
  background(200);

  if (tower.y > 400) {
    tower.y = 300
  }
  
  if(keyDown("left_arrow")){
    ghost.x=ghost.x-2.5
  }

  if(keyDown("right_arrow")){
    ghost.x=ghost.x+2.5
  }
  
  if(keyDown("space")){
    ghost.y=ghost.y-20
  }
  
  ghost.velocityY=6

  spawnObstacle();

  drawSprites();
}

function spawnObstacle() {
  if (frameCount % 300 === 0) {
    door = createSprite(200, -50);
    door.addImage("door", doorImg);
    door.velocityY = 1
    //Especifica donde se aplica antes con sprite.cardinal y luego operacion
    door.x = Math.round(random(120, 400));
    door.lifetime = 700
    doorsGroup.add(door);
    
    climber = createSprite(200,20);
    climber.addImage(climberImg);
    climber.x = door.x;
    climber.velocityY = 1;
    climber.lifetime = 700;
    climbersGroup.add(climber);
    
    door.depth=ghost.depth;
    climber.depth=ghost.depth;
    ghost.depth=ghost.depth+1;

    var invisibleBlock=createSprite(200,15);
    invisibleBlock.width=climber.width;
    invisibleBlock.height=2;
    invisibleBlock.x = climber.x;
    InvisibleBlock.velocityX=1;
    invisibleBlock.lifetime = 700;
  }
} 