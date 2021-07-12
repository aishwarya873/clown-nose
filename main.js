noseX=0;
noseY=0;
function preload(){
clown_nose=loadImage("https://i.postimg.cc/j5gxcx7k/red-nose.png");
}
function setup(){
canvas=createCanvas(300,300);
canvas.center();
video=createCapture(300,300);
video.size(300,300);
video.hide();
poseNet=ml5.poseNet(video,modelLoaded);
poseNet.on('pose',gotPoses);
}
function modelLoaded(){
    console.log('poseNet is Intialized');
}
function gotPoses(results){
    if(results.length>0){
        console.log(results);

        noseX=results[0].pose.nose.x-20;
        noseY=results[0].pose.nose.y-20;
    }
}
function draw(){
image(video,0,0,300,300);
fill(255,0,0);
stroke(255,0,0);
image(clown_nose,noseX,noseY,30,30);

}
function take_snapshot(){
    save('myfilterImage.png')
};