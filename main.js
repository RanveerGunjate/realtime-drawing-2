function setup()
{
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550, 500);
    canvas.position(950, 200);

    poseNet = ml5.poseNet(video, modalLoaded);
    poseNet.on('pose', gotPoses);
}
function draw() {
    background('#FF0000');
}
function modalLoaded(){
    console.log('PoseNet Is Initalized');
}
function gotPoses(results)
{
    if (results.lenght > 0)
    {
        console.log(results);
    }
}