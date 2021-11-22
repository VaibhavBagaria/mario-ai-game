RWristX=0
RWristY=0

function preload() {
	world_start = loadSound("world_start.wav");
	mario_jump= loadSound("jump.wav")
	mario_coin= loadSound("coin.wav")
	mario_gameOver=loadSound("gameover.wav")
	mario_kick=loadSound("kick.wav")
	mario_die=loadSound("mariodie.wav")
	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240,336);
	canvas.parent('canvas')
	video=createCapture(VIDEO)
	video.size(800,400)
	video.parent('game_console')
	
	posenet=ml5.poseNet(video,modelloaded)
	posenet.on('pose',gotResults)
	instializeInSetup(mario);
}

function draw() {
	game()
}

function modelloaded(){
	console.log("model loaded")
}


function gotResults(results){
	if(results.length>0){
		console.log(results)
		RWristX=results[0].pose.rightWrist.x;
		RWristY=results[0].pose.rightWrist.y;
	}
}