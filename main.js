music1 = "";
music2 = "";
width_cam = "";
hight_cam = "";

function preload(){
    music1 = loadSound("music.mp3"); 
    music2 = loadSound("music.mp3");
    
}

function setup(){
    canvas = createCanvas(600, 500);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(video,0,0,300,300);
}

function image(canvas, x, y, width_cam, hight_cam){

}