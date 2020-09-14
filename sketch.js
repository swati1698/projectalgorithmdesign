var fixedrect, movingrect;

function setup() {
  createCanvas(800,400);
  fixedrect=createSprite(600, 200, 50, 50);
  fixedrect.shapeColor="green";
  fixedrect.debug=true;
  movingrect=createSprite(200,200,80,30);
  movingrect.shapeColor="green";
  movingrect.debug=true;

  fixedrect.velocityX=-4;
  movingrect.velocityX=2;
}

function draw() {
  background("lightgreen");  
  console.log(movingrect.x-fixedrect.x);
  
if(movingrect.x-fixedrect.x < movingrect.width/2 + fixedrect.width/2 && 
  fixedrect.x-movingrect.x < movingrect.width/2 + fixedrect.width/2)
{
movingrect.velocityX=movingrect.velocityX * (-1);
fixedrect.velocityX=fixedrect.velocityX * (-1);
}
if(movingrect.y-fixedrect.y < movingrect.height/2 + fixedrect.height/2 && 
  fixedrect.y-movingrect.y < movingrect.height/2 + fixedrect.height/2)
{
movingrect.velocityY=movingrect.velocityY * (-1);
fixedrect.velocityY=fixedrect.velocityY * (-1);
}
  /*
  movingrect.x=World.mouseX;
  movingrect.y=World.mouseY;

  if(movingrect.x-fixedrect.x < movingrect.width/2 + fixedrect.width/2 && 
    fixedrect.x-movingrect.x < movingrect.width/2 + fixedrect.width/2 &&
    movingrect.y-fixedrect.y < movingrect.height/2 + fixedrect.height/2 &&
    fixedrect.y-movingrect.y < movingrect.height/2 + fixedrect.height/2)
  {
    fixedrect.shapeColor="red";
    movingrect.shapeColor="red";
  }
  else
  {
    fixedrect.shapeColor="green";
    movingrect.shapeColor="green";
  }
  */

  drawSprites();
}