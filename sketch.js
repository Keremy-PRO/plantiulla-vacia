var player;
function preload(){

}

function setup(){
    canvas = createCanvas(windowWidth, windowHeight);
    player=createSprite(50,50,30,30);//x,y,w,h
    player.shapeColor="white";//color
}

function draw(){// dibujo o movimiento
    background("red");

    if(keyIsDown(UP_ARROW)){
        player.y -=5;
    }
    if(keyIsDown(DOWN_ARROW)){
        player.y +=5;
    }
    if(keyIsDown(RIGHT_ARROW)){
        player.x +=5;
    }
    if(keyIsDown(LEFT_ARROW)){
        player.x -=5;
    }

    drawSprites();// Dibuja los sprites
}

function movimiento(){
    
}