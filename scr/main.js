//flags
let gamestate;
let level;

//images
let obj;
let gnd;
let negisoba;
let rock;

//timers
let objecttimer = 0;

//objects
let s_titan = {
    x : 130,
    y : 290,
    img : 0,
    imgx : 120,
    imgy : 130,
};

let m_titan = {
    x : 50,
    y : 130,
    img : 0,
    imgx : 250,
    imgy : 300,
};

let l_titan = {
    x : 0,
    y : -10,
    img : 0,
    imgx : 350,
    imgy : 430,
};

let soba_para = {
    x : 800,
    y : 290,
    vx : 10,
    vy : 10,
};

let rock_para = {
    x : 800,
    y : 320,
    vx : 10,
    vy : 10
};

// load images
function preload(){
    obj = loadImage('../image/objects.png');
    gnd = loadImage('../image/ground.png');
}


//setup
function setup(){
    createCanvas(800, 500);

    //images
    obj.loadPixels();
    gnd.loadPixels();
    negisoba = obj.get(30, 10, 130, 130);
    rock = obj.get(240, 30, 130, 110);
    s_titan.img = obj.get(10, 370, 120, 130);
    m_titan.img = obj.get(160, 180, 250, 300);
    l_titan.img = obj.get(430, 40, 350, 430);

    gamestate = 1;
    level = 0;

}


//main
function draw(){
    if(gamestate == 1){
	mainGame();
    }

    if(gamestate == 3){
	gameOver();
    }
}


//mainGame
function mainGame(){
    background(100, 150, 255);
    //background(obj);
    image(gnd, 0, 0);
    image(negisoba, soba_para.x, soba_para.y);
    //image(rock, rock_para.x, rock_para.y);

    //titan size
    if(level == 0){
	image(s_titan.img, s_titan.x, s_titan.y);

    }

    else if(level == 1){
	image(m_titan.img, m_titan.x, m_titan.y);

    }

    else{
	image(l_titan.img, l_titan.x, l_titan.y)

    }

    //move objects
    soba_para.x -= 10;
    rock_para.x -= 10;

    if(soba_para.x == 0) soba_para.x = 800;
    //if(rock_para.x == 0) rock_para.x = 800;

    //hit
    if(s_titan.x + 50 >= soba_para.x) gamestate = 3;
}

function gameOver(){
    background(100, 150, 255);

}

function mousePressed(){

}

function keyPressed() {
    console.log(keyCode);
  if (keyCode === ENTER) {
      s_titan.y = 200;
  }

    return false;
    
}

function keyReleased() {
    s_titan.y = 300;
  
}
