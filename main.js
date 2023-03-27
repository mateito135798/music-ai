var LX=0;
var LY=0;
var RX=0;
var RY=0;
var cansion="";

function preload() {

cansion=loadSound("musik.mp3");
}

function setup() {
canvas=createCanvas(600,500);
canvas.center();
video=createCapture(VIDEO);
video.hide();
pose=ml5.poseNet(video,modelolisto);
pose.on("pose",pose_obtain);
}

function draw() {
image(video,0,0,600,500);
fill("#ff1200");
stroke("ff1200");
circle(LX,LY,20);
circle(RX,RY,20);
if (RY<=100) {
cansion.rate(0.5);
document.getElementById("vel").innerHTML="vel: 0.5"
    

} else  if (RY>100&&RY<=200 ) {
    cansion.rate(1);
    document.getElementById("vel").innerHTML="vel: 1"
} else  if (RY>200&&RY<=300 ) {
    cansion.rate(1.5);
    document.getElementById("vel").innerHTML="vel: 1.5"
}
var NLY=Number(NY);
var NLYD=floor(NLY);
var NLYD5=NLYD/500;
cansion.setVolume(NLYD5);
document.getElementById("vol").innerHTML="volumen: "+ NLYD5
}
function musik() {
    cansion.play();
cansion.setVolume(1);
cansion.rate(1);

}

function pose_obtain(resultados) {
    if (resultados.length>0) {                                     
        console.log(resultados);
        
        LX=resultados[0].pose.leftWrist.x;
        LY=resultados[0].pose.leftWrist.y;
        RX=resultados[0].pose.rightWrist.x;
        RY=resultados[0].pose.rightWrist.y;
    }
}

function modelolisto() {
    console.log("modelolisto");
}