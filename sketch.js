var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  //fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
 // movingRect.debug = true;
 movingRect.velocityX=4;
 fixedRect.velocityX=4;
 movingRect.velocityY=4;
 fixedRect.velocityY=4;
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
 if(fixedRect.x-movingRect.x<=fixedRect.width/2 + movingRect.width/2&&movingRect.x-fixedRect.x<=fixedRect.width/2 + movingRect.width/2){
   fixedRect.velocityX= fixedRect.velocityX*-1
  movingRect.velocityX= movingRect.velocityX*-1
 }
 if(fixedRect.y-movingRect.y<=fixedRect.height/2+ movingRect.height/2&&movingRect.y-fixedRect.y<fixedRect.height/2+movingRect.height/2){
   movingRect.velocityY= movingRect.veloctyY*-1
   fixedRect.velocityY= fixedRect.velocityY*-1
 }
/*if(fixedRect.x-movingRect.x<=fixedRect.width/2 + movingRect.width/2&&movingRect.x-fixedRect.x<=fixedRect.width/2 + movingRect.width/2
  &&fixedRect.y-movingRect.y<=fixedRect.height/2 + movingRect.height/2&&movingRect.y-fixedRect.y<=fixedRect.height/2 + movingRect.height/2){
  fixedRect.shapeColor="red";
  movingRect.shapeColor="red";
}
else{
  fixedRect.shapeColor="green";
  movingRect.shapeColor="green";
}*/
  drawSprites();
}


























  /*if (movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2
      && fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2
      && movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2
      && fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2) {
    movingRect.shapeColor = "red";
    fixedRect.shapeColor = "red";
  }
  else {
    movingRect.shapeColor = "green";
    fixedRect.shapeColor = "green";
  }*/