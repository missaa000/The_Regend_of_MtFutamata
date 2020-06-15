let gamestate;
let obj;
let gnd;
let negisoba;
let s_titan;
let m_titan;
let b_titan;

function preload(){
    obj = loadImage('../image/objects.png');
    gnd = loadImage('../image/ground.png');
}

function setup(){
    createCanvas(800, 500);
    obj.loadPixels();
    gnd.loadPixels();
    negisoba = obj.get(30, 10, 130, 130);

}

function draw(){
    background(100, 150, 255);
    image(gnd, 0, 0);
    image(negisoba, 25, 25);
}
