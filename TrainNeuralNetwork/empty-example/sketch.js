let model;

function setup() {
  // put setup code here
  createCanvas(400, 400);

  let options = {
    inputs: ['x', 'y'],
    outputs: ['label'],
    task: 'classification'
  };
  model = m5.neuralNetwork(options);
}

function draw() {
  // put drawing code here
  background(255);
}