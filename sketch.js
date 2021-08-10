var garden,rabbit;
var gardenImg,rabbitImg;
var leaf1,leaf2,apple;
var leaf1Image,leaf2Image,appleImage;
function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  leaf1Image = loadImage("redImage.png")
  leaf2Image = loadImage("orangeLeaf.png")
  appleImage = loadImage("apple.png")
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);
  
  rabbit.x=mouseX;

  spawnLeaf1();
  spawnLeaf2();
  spawnApple();
  
  drawSprites();
}



function spawnLeaf1(){
  if(frameCount%60===0){
  leaf1 =createSprite(200,400,30,30) ;
  leaf1.addImage(leaf1Image);
  leaf1.y = 0  
  leaf1.x = Math.round(random(100,300));
  leaf1.scale=0.07;  
  leaf1.velocityY=3;
  }
}

function spawnLeaf2(){
  
if(frameCount%80===0){
    leaf2 =createSprite(200,400,30,30) ;
  leaf2.addImage(leaf2Image);
  leaf2.y = 0  
  leaf2.x = Math.round(random(100,300));
  leaf2.scale=0.07;  
  leaf2.velocityY=3;
 }
}

  function spawnApple(){
    if(frameCount%100===0){
  apple =createSprite(200,400,30,30) ;
  apple.addImage(appleImage);
  apple.y = 0  
  apple.x = Math.round(random(100,300));
  apple.scale=0.07;  
  apple.velocityY=3;
    }
  }
