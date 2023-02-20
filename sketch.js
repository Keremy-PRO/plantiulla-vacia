var player;
var playerImg,pcaminandoR,pcaminandoL,pIndel;
var fondo, fondoImg;
function preload(){
    pIndel=loadAnimation("assets/p_indel1.png","assets/p_indel2.png","assets/p_indel3.png","assets/p_indel4.png");
    fondoImg=loadImage("assets/fondo.jpg");
    pcaminandoR=loadAnimation("assets/p_walk1.png","assets/p_walk2.png","assets/p_walk3.png","assets/p_walk4.png","assets/p_walk5.png","assets/p_walk6.png");
    pcaminandoL=loadAnimation("assets/p_walk1_L.png","assets/p_walk2_L.png","assets/p_walk3_L.png","assets/p_walk4_L.png","assets/p_walk5_L.png","assets/p_walk6_L.png");
    psaltar=loadAnimation("assets/jump1.png","assets/jump2.png","assets/jump3.png","assets/jump4.png","assets/jump5.png","assets/jump6.png");
}

function setup(){
    canvas = createCanvas(windowWidth, windowHeight);
    canvas.position(CENTER);

    fondo=createSprite(width/3,height/2,400, 400);
    fondo.addImage(fondoImg);
    fondo.scale=0.6;

    player=createSprite(30,800,10,10);//x,y,w,h
    player.addAnimation("quieto",pIndel);
    player.addAnimation("caminandoR",pcaminandoR);
    player.addAnimation("caminandoL",pcaminandoL);
    player.addAnimation("saltando",psaltar);
    player.shapeColor="white";//color

    piso=createSprite(2,800,500,10);
    piso.shapeColor="green";
    piso.visible=false;
    
}

function draw(){// dibujo o movimiento
    background("#081C23");
    fill("yellow");
    
    player.changeAnimation("quieto");
    if(keyDown(UP_ARROW)){   
        player.changeAnimation("caminando");  
        changePosition(player,0,-1);
    }
    if(keyDown(DOWN_ARROW)){
        player.changeAnimation("caminando");
        changePosition(player,0,+1);
    }
    if(keyDown(RIGHT_ARROW)){
        player.changeAnimation("caminandoR");
        changePosition(fondo,-3,0);
        changePosition(player,3,0);
    }
    if(keyDown(LEFT_ARROW)){
        changePosition(fondo,3,0);
        player.changeAnimation("caminandoL");
        changePosition(player,-3,0);
    }
    if(keyDown("space")){
        player.changeAnimation("saltando");
        changePosition(player,5,-5);
    }

  
    player.collide(piso);
    player.velocityY+=0.1;
    drawSprites();// Dibuja los sprites
    text(mouseX+"-"+mouseY,mouseX,mouseY);
    if(player.y>900){
        text("FIN",200,200);
        
    }
}

function changePosition(sprite,x,y){
    sprite.x = sprite.x + x;
    sprite.y = sprite.y + y;
}