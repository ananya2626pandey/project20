var mouse,cat,backgroundImg,mouseImg2; 

function preload() {
    //load the images here
backgroundImg=loadImage("images/garden.png");
 catImg1=loadAnimation("images/cat1.png");
 mouseImg1=loadAnimation("images/mouse1.png");
 catImg2=loadAnimation("images/cat3.png","images/cat2.png");
 mouseImg2=loadAnimation("images/mouse2.png","images/mouse3.png");
 catImg3=loadAnimation("images/cat4.png");
 mouseImg3=loadAnimation("images/mouse4.png");
}

function setup(){
    createCanvas(1000,800);
    
    //create tom and jerry sprites here
    mouse=createSprite(200,600,20,40);
    mouse.addAnimation("mouseStanding",mouseImg1);

    cat=createSprite(870,600,20,40);
    cat.addAnimation("catSleeping",catImg1);
    
    mouse.scale=0.15;
    cat.scale=0.15;
}

function draw() {

    background (backgroundImg);
    //Write condition here to evalute if tom and jerry collide
   if(cat.x-mouse.x<(cat.width-mouse.width)/2){
       cat.velocityx=0;
       cat.addAnimation("catChasing",catImg3);
       cat.x=350;
       cat.changeAnimation("catChasing");
       
       mouse.addAnimation("mouseSearching",mouseImg3);
       mouse.changeAnimation("mouseSearching");
   }
    drawSprites();
}


function keyPressed(){
if(keyCode===LEFT_ARROW){
    cat.velocityX=-5;
    cat.addAnimation("catWalking",catImg2);
    cat.changeAnimation("catWalking");

    mouse.addAnimation("mouseTeasing", mouseImg2);
    mouse.frameDelay=25;
    mouse.changeAnimation("mouseTeasing");
   
}
  //For moving and changing animation write code here


}
