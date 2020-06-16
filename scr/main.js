//flags
let gamestate;

//images
let obj;
let gnd;
let s_titan;
let m_titan;
let l_titan;
let negisoba;

//timers
let objecttimer = 0;

//objects
let titan = {
    sx : 130,
    sy : 290,
    mx : 50,
    my : 130,
    lx : 0,
    ly : -10,
};

let soba_para = {
    x : 400,
    y : 290,
    vx : 10,
    vy : 10,
};

let rock_para = {
    x : 300,
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
    s_titan = obj.get(10, 370, 120, 130);
    m_titan = obj.get(160, 180, 250, 300);
    l_titan = obj.get(430, 40, 350, 430);

    gamestate = 1;

}


//main
function draw(){
    if(gamestate == 1){
	mainGame();
    }
}


//mainGame
function mainGame(){
    background(100, 150, 255);
    //background(obj);
    image(gnd, 0, 0);
    image(negisoba, soba_para.x, soba_para.y);
    image(rock, rock_para.x, rock_para.y);
    image(s_titan, titan.sx, titan.sy);
    image(m_titan, titan.mx, titan.my);
    image(l_titan, titan.lx, titan.ly)
}

function mousePressed(){

}
