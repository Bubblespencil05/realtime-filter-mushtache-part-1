function preload() {

}


function setup() {

    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 320);
    video.center();

    poseNet = ml5.poseNet(video, medelLoaded);
}

function gotPoses(results) {
    if (results.lenght > 0) {
        console.log(results);
        console.log("mustache x =" + results[0].pose.mustache.x);
        console.log("mustache y= " + results[0].pose.mustacche.y);
    }



}



function medelLoaded() {
    console.log('PoseNet Is INitialized')
}

function draw() {
    Image(video, 0, 0, 300, 300);
}

function takesnapshot() {
    save('myFiterImage.png');
}