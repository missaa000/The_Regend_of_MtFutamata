//flags
let gamestate;
let point;
let level;
let sobai;
let rocki;

//images
let obj;
let gnd;
let negisoba;
let rock;

//timers
let objecttimer = 0;

//objects
let soba_arr = [800, 900, 1000, 800, 1200, 800, 900, 1000, 800, 1200, 800, 900, 1000, 800, 1200];
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
    point = 0;
    sobai = 0;

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
}


//mainGame
function mainGame(){
    background(100, 150, 255);
    image(gnd, 0, 0);
    image(negisoba, soba_arr[sobai], soba_para.y);
    image(rock, rock_para.x, rock_para.y);

    //titan size
    if(point < 50){
	image(s_titan.img, s_titan.x, s_titan.y);
	if(soba_arr[sobai] == 200 && soba_para.y <= s_titan.y){
	    point += 10;
	    sobai++;
	}
	
    }

    else if(point < 100){
	image(m_titan.img, m_titan.x, m_titan.y);
	if(soba_para.x == 200 && soba_para.y <= (m_titan.y + m_titan.imgy)){
	    point += 10;
	    soba_para.x = 800;
	}
    }
    
    else{
	image(l_titan.img, l_titan.x, l_titan.y);
	if(soba_para.x == 200 && soba_para.y <= (l_titan.y + l_titan.imgy)){
	    point += 10;
	    soba_para.x = 800;
	}

	if(point >= 150) gamestate = 3;
    }

    //move objects
    soba_arr[sobai] -= 10;
    rock_para.x -= 10;

    if(soba_arr[sobai] < 0) sobai++;
    //if(rock_para.x == 0) rock_para.x = 800;

}

function gameOver(){
    background(100, 150, 255);

}

function happyEnd(){
    background(10, 10, 10);
}

function mousePressed(){
    if(point < 50){
	s_titan.y -= 150;
    }
    
    if(point < 100){
	m_titan.y -= 150;
    }
    
    if(point < 150){
	    l_titan.y -= 150;
    }
}

function mouseReleased(){
  if(point < 50){
	s_titan.y += 150;
    }

    if(point < 100){
	m_titan.y += 150;
    }
    
    if(point < 150){
	l_titan.y += 150;
    }
}

// function keyPressed() {
//     console.log(keyCode);
//     if (keyCode === ENTER) {
// 	if(point < 50){
// 	    s_titan.y -= 150;
// 	}
	
// 	if(point < 100){
// 	    m_titan.y -= 150;
// 	}

// 	if(point < 150){
// 	    l_titan.y -= 150;
// 	}
//   }
    
//     return false;
    
// }

// function keyReleased() {
//     if(point < 50){
// 	s_titan.y += 150;
//     }

//     if(point < 100){
// 	m_titan.y += 150;
//     }
    
//     if(point < 150){
// 	l_titan.y += 150;
//     }
  
// }
