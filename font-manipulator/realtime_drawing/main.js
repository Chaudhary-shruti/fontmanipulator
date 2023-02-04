function setup(){
    video=createCapture(VIDEO);
    video.size(550,600);

    canvas=createCanvas(550,600)
    canvas.position(600,100)

    poseNet=ml5.poseNet(video, modelLoaded)
    poseNet.on('pose',gotPoses)
    }
    function draw(){
background('#FFA500')

    }
    function modelLoaded(){
console.log("model is loaded")
    }
    function gotPoses(results){
if(results.length>0){
console.log(results)
}
    }