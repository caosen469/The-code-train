// add the dataset
let xs = [];
let ys = [];

function setup() {
  // put setup code here
  createCanvas(400, 400);
  background(0);
}

function mousePressed(){
  let x = map(mouseX, 0, width, 0, 1);
  let y = map(mouseY, 0, height, 1, 0); // change the direction of the y axis.
  xs.push(x);
  ys.push(y);
}

function draw() {
  // put drawing code here
  background(0);
  stroke(255);
  strokeWeight(4);
  
  for (let i = 0; i < xs.length; i++){
    let px = map(xs[i], 0, 1, 0, width);
    let py = map(ys[i], 0, 1, height, 0);
    point(px, py);
  }
}