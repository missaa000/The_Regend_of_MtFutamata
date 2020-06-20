//flags
let gamestate;
let score;
let level;
let soba_i;
let rock_i;
let powerUp;
let maxFlowing;
let angle;

//images
let obj;
let gnd;
let negisoba;
let rock;
let ending = [];

//objects
let nowImg;
let titanx;
let titany;
let nowImgy;

//Flowing items x coordenate
let soba_arr = [800, 900, 1000, 800, 1200, 800, 900, 1000, 800, 1200, 800, 900, 1000, 800, 1200, 1000];
let rock_arr = [1000, 900, 1000, 1300, 1500, 1000, 1400, 1200, 1000, 1300, 1000, 1400, 1200, 1000, 1300, 0]
let s_titan = {
    x : 130,
    y : 290,
    img : 0,
    imgx : 120,
    imgy : 130,
    score : 80,
};

let m_titan = {
    x : 50,
    y : 130,
    img : 0,
    imgx : 250,
    imgy : 300,
    score : 120,
};

let l_titan = {
    x : 0,
    y : -10,
    img : 0,
    imgx : 350,
    imgy : 430,
    score : 150,
};

let soba_para = {
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

// loading images
function preload(){
    obj = loadImage('../image/objects.png');
    gnd = loadImage('../image/ground.png');
    ending[0] = loadImage('../image/happyend.png');
  //  ending[1] = loadImage('../image/trueend.png');
    ending[2] = loadImage('../image/happyend.png');
//    ending[3] = loadImage('../image/gameover.png');
}

//setup
function setup(){
    createCanvas(800, 500);

    //images
    obj.loadPixels();
    gnd.loadPixels();
    for(let i = 0; i < 3; i++){
//	ending[i].loadPixels();
    }
    
    negisoba = obj.get(30, 10, 130, 130);
    rock = obj.get(240, 30, 130, 110);
    s_titan.img = obj.get(10, 370, s_titan.imgx, s_titan.imgy);
    m_titan.img = obj.get(160, 180, m_titan.imgx, m_titan.imgy);
    l_titan.img = obj.get(430, 40, l_titan.imgx, l_titan.imgy);

    nowImg = s_titan.img;
    titanx = s_titan.x;
    titany = s_titan.y;
    nowImgy = 0;
    maxFlowing = 20;
    
    gamestate = 1;
    score = 0;
    soba_i = 0;
    rock_i = 0;
    powerUp = true;
    angle = 0;
}


//main
function draw(){
    if(gamestate == 1){
	mainGame();
    }

    if(gamestate == 2){
	gameOver();
    }

    if(gamestate == 3){
	happyEnd();
    }

    if(gamestate == 4){
	trueEnd();
    }

    if(gamestate == 5){
	badEnd();
    }
}


//mainGame
function mainGame(){
    imgShow(0);
    
    //titan size controll
    //small
    if(score <= s_titan.score){
	if(soba_i >= maxFlowing) endRun(5);
	if(score == s_titan.score && powerUp){
	    setData(m_titan.img, m_titan.imgy, m_titan.x, m_titan.y);
	}
    }

    //mideum 
    else if(score <= m_titan.score){
	if(soba_i >= maxFlowing) endRun(4);
	if(score < m_titan.score) powerUp = true;
	if(score == m_titan.score && powerUp){
	    setData(l_titan.img, l_titan.imgy, l_titan.x, l_titan.y);
	}
    }

    //large
    else{
	if(score >= l_titan.score) endRun(3);
	else if(soba_i >= maxFlowing) endRun(4);
    }
  
    //increase point
    if(soba_arr[soba_i] <= 200 && soba_para.y <= (titany + nowImgy)){
    	score += 10;
    	console.log(score);
    	soba_i++;
    }

    //moving objects
    soba_arr[soba_i] -= 10;
    rock_arr[rock_i] -= 10;
    if(soba_arr[soba_i] < -30) soba_i++;
    if(rock_arr[rock_i] < -30) rock_i++;

    //gameOver
    if(rock_arr[rock_i] == 200 && !keyIsPressed){
	gamestate = 2;
    }
}

function setData(img, imgy, x, y){
    nowImg = img;
    nowImgy = imgy;
    titanx = x;
    titany = y;
    powerUp = false;
}

function imgShow(flag){
    background(100, 150, 255);
    image(gnd, 0, 0);
    image(negisoba, soba_arr[soba_i], soba_para.y);
    image(rock, rock_arr[rock_i], rock_para.y);
    translate(titanx, titany);
    if(flag == 1){
	rotate(radians(angle));
	angle += 4;
    }
    image(nowImg, 0, 0);
}

function gameOver(){
    titanx += 20;
    titany -= 10;
    imgShow(1);

    if(titany < -500){
	//image(ending[3], 0, 0);
	titany = -500;
	background(100, 200, 300);
    }
}

function endRun(state){
    gamestate = state;
}

//3
function happyEnd(){
    image(ending[0], 0, 0);
}

//4
function trueEnd(){
    //image(ending[1], 0, 0);
}

//5
function badEnd(){
    //image(ending[2], 0, 0);
}

function keyPressed() {
    if (keyCode === UP_ARROW) {
	titany -= 150;
    }
}

function keyReleased() {
    titany += 150;
}

// function mousePressed(){
//     titany -= 150;
// }

// function mouseReleased(){
//     titany += 150;
// }
