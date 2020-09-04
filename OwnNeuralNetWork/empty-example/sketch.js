let model;
let targetLabel = 'C';
let trainData = [];

function setup() 
{
	createCanvas(400, 400);
	let options ={
		input: ['x', 'y'],
		output: ['label'],
		task :'classification',
		debug:true
	};
	model = ml5.neuralNetwork(options);
	
	background(240);
}

// Collect data from user interaction --- mousePressed
function mousePressed(){

	let inputs = {
		x: mouseX,
		y: mouseY
	};
	let target = {
		label: targetLabel
	};
	model.addData(inputs, target);

	stroke(0);
	noFill();
	ellipse(mouseX, mouseY, 24);
	fill(0);
	noStroke();
	textAlign(CENTER, CENTER);
	text(targetLabel, mouseX, mouseY);
}

function keyPressed(){
	if (key == 'T' || key == 't'){
		console.log('start training');
		model.normalizeData();
		let trainingOptions = {
			epochs: 100
		};

		// model.train(trainingOptions, whileTraining, finishedTraining);
		model.train(trainingOptions, finishedTraining);
	}
	else {
		targetLabel = key.toUpperCase();
	}
}

function whileTraining(epochs, loss){
	console.log(epoch);

}

function finishedTraining(){
	console.log('finished training');
}
// function draw()
// {
// 	background(0);
// }
