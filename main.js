//Start

status1 = "";



//Preload
function preload(){
}


//Setup
function setup(){
    canvas = createCanvas(480, 380);
    canvas.center();

}


//Model Loaded
function modelLoaded(){
    console.log("CocoSSD: Model Loaded!");
    status1 = true;

}


//Got Result
function gotResult(){

}


//Draw
function draw(){
}


//Start
function start(){
    objectDetector = ml5.objectDetector("cocossd", modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects...";
}