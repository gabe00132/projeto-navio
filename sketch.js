

function preload(){
    ship1Img=loadAnimation("ship-1.png")
    ship2Img= loadAnimation("ship-2.png")
    ship3Img= loadAnimation("ship-3.png")
    ship4Img= loadAnimation("ship-4.png")

    seaImg=loadImage ("sea.png")
}

function setup(){
  createCanvas(400,400);

  var spriteMar= createSprite (0,0,400,400)
spriteMar.addImage(seaImg)
spriteMar.velocityX= 3



var spriteNavio= createSprite(200,200,20,50)
spriteNavio.addAnimation(ship1Img, ship2Img, ship3Img,ship4Img)
}

function draw() {
  background("blue");
    drawSprites();
}
