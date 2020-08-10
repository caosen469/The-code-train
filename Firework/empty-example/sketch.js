var fireworks = [];
var gravity;

var testForFirework;

function setup() {
  // put setup code here
  // stroke(199, 237, 204);
  // strokeWeight(4);
  createCanvas(600, 400);
  colorMode(HSB);
  gravity = createVector(0, 0.2);
  background(0);
}

function draw() {
  // put drawing code here
  colorMode(RGB);
  background(0, 0, 0, 25);
  stroke(255);
  strokeWeight(4);

  if (random(1) < 0.03) {
    fireworks.push(new Firework());
  }
  
  for (var i = fireworks.length - 1; i >= 0; i--){
    fireworks[i].update();
    fireworks[i].show();
    if (fireworks[i].done()){
      fireworks.splice(i, 1);
    }
  }
  console.log(fireworks.length);
  
}