leftWristScore = "";
rightWristScore = "";
rightWristX = "";
rightWristY = "";
leftWristX = "";
leftWristY = "";
leftWristSong = "";
rightWristSong = "";

function preload(){
    leftWristSong = loadSound('The Search.mp3');
    rightWristSong = loadSound('alone.mp3');
}

function setup(){
    canvas = createCanvas(470,370);
    canvas.position(520,300);

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video , modelLoaded);
    poseNet.on('pose' , gotPoses);
}

function modelLoaded(){
    console.log('pose net works');
}

function draw(){
    image(video , 0 , 0 , 470 , 370);


}

function gotPoses(results){
    if(results.length > 0){
        rightWristX = results[0].pose.rightWrist.x;
        rightwristY = results[0].pose.rightWrist.y;
        leftWristX = results[0].pose.leftWrist.x
        lefttWristY = results[0].pose.leftWrist.y;
        console.log('left wrist x : ' + leftWristX + " and left wrist y : " + leftWristY);


        if( leftWrist> 0){
            leftWristSong.play();
        }

        if( rightWrist > 0){
            rightWristSong.play();
        }
    }
}