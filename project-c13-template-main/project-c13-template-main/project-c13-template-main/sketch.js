var garden,rabbit;
var gardenImg,rabbitImg,apple;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
 orangeImg = loadImage("orangeLeaf.png");
  redImg = loadImage("redImage.png"); 
}

function setup(){
  
  createCanvas(400,400);
  
// mover o fundo
garden=createSprite(200,200);
garden.addImage(gardenImg);

//criar sprite do coelho
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);


  edges= createEdgeSprites();
  rabbit.collide(edges);
 CreatApple()
 CreatOrange()
  drawSprites();
  CreatRed()
  var select_sprites = Math.round(random(1,3));
  if (framecount %80 == 0){
  if(select_sprites ==1){
    CreatApple();
  }
  else if (select_sprites == 2){
    CreatOrange();
  }else{
    CreatRed();
  }
 
  }
 rabbit.x = world.mousex 
}
function CreatApple(){
apple = createSprite(random(50,350),40,10,10);
apple.addImage(appleImg);
apple.scale=0.07;
apple.velocity = 3;
apple.lifetime = 150;
}
function CreatOrange(){
Orange = createSprite(random(50,350),40,10,10);
Orange.addImage(orangeImg);
Orange.scale=0.08;
Orange.velocity = 3;
Orange.lifetime = 150;
}
function CreatRed(){
Red = createSprite(random(50,350),40,10,10);
Red.addImage(orangeImg);
Red.scale=0.06;
Red.velocity = 3;
Red.lifetime = 150;
}

