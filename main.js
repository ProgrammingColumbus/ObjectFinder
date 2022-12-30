//Start

status1 = "";
objects = [];
object_name = document.getElementById("textbox").value;


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
    if(error){
        console.log(error);
    }
    console.log(results);
    objects = results;
}


//Draw
function draw(){
    if(status1 != ""){
        objectDetector.detect(video,gotResult);
        for(i = 0; i< objects.length; i++){
            document.getElementById("status").innerHTML = "Status : Objects Detected.";
            document.getElementById("numberObjects").innerHTML = "Number of Objects Detected: " + objects.length;

            fill("#A097FF");
            percent = floor(objects[i].confidence * 100);
            text(objetcs[i].label + " " + percent + "% ", objects[i].x, objects[i].y);
            noFill();
            stroke("#86DA09");
            rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
        }
        if(objects[i].label == object_name){
            document.getElementById("objectStatus").innerHTML = "Object Found!";
        }
        else{
            document.getElementById("objectStatus").innerHTML = "Object Not Found!";
        }
    }
}


//Start
function start(){
    objectDetector = ml5.objectDetector("cocossd", modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects...";
}