function preload(){

}

function setup(){
    canvas=createCanvas(640,470);
    canvas.position(110,200);
    video=createCapture(VIDEO);
    video.hide();

}
function draw() {
    image(video,170,85,290,310);

    fill(2, 36, 251  );
    stroke(2, 36, 251);
    circle(50, 426, 80);
    circle(590, 50, 80);
    circle(50, 50, 80); 
    circle(590, 426, 80);

    fill(2, 191, 251);
    stroke(2, 191, 251);
    rect(90, 40, 460, 20);
    rect(90, 420, 460, 20);
    rect(40, 90, 25, 295);
    rect(580, 90, 25, 295);
}

function take_snapshot(){
save("image.png");
}
