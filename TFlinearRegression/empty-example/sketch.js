// add the dataset
let x_vals = [];
let y_vals = [];

let m, b; // parameter for the linear regression.

const learningRate = 0.2;
const optimizer = tf.train.sgd(learningRate);

function loss(pred, labels){
  return pred.sub(labels).square().mean();
}

function setup() {
  // put setup code here
  createCanvas(400, 400);
  background(0);

  m = tf.variable(tf.scalar(random(1)));
  b = tf.variable(tf.scalar(random(1)));
}

function predict(x){
    const xs = tf.tensor1d(x);
    // y = mx + b
    const ys = xs.mul(m).add(b);

    return ys;
}

function mousePressed(){
  let x = map(mouseX, 0, width, 0, 1);
  let y = map(mouseY, 0, height, 1, 0); // change the direction of the y axis.
  x_vals.push(x);
  y_vals.push(y);
}

function draw() {
  // put drawing code here
 
  // train the model each frame
  // optimizer.minimize(() => loss(f(xs), ys));
  if (x_vals.length > 0){
    const ys = tf.tensor1d(y_vals);
    optimizer.minimize(() => loss(predict(x_vals), ys));  
  }
  


  background(0);
  stroke(255);
  strokeWeight(8);
  
  for (let i = 0; i < x_vals.length; i++){
    let px = map(x_vals[i], 0, 1, 0, width);
    let py = map(y_vals[i], 0, 1, height, 0);
    point(px, py);
  }
}