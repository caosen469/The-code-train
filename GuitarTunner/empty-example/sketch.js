// Use Github repo in a CDN way
const model_url = 'https://github.com/ml5js/ml5-data-and-models/tree/master/models/pitch-detection/crepe';
let pitch;
let audioContext;
let mic;
let freq = 0;

function setup() {
  // put setup code here
  createCanvas(400, 400);
  audioContext = getAudioContext();
  mic = new p5.AudioIn();
  mic.start(listening);

}

function listening(){
  console.log('listening');
  pitch = ml5.pitchDetection(
    './model/',
    audioContext,
    mic.stream,
    modelLoaded,
  );
}

function modelLoaded(){
  console.log('model loaded!');
  pitch.getPitch(gotPitch);
}

function gotPitch(error, frequency){
  if (error) {
    console.error(error);
  }
  else {
    // console.log(frequency);
    if (frequency){
      freq = frequency;
      // console.log('freq' + 'is' + freq);
    }
  }
  pitch.getPitch(gotPitch);
}

function draw() {
  // put drawing code here
  background(0);
  textAlign(CENTER, CENTER);
  fill(255);
  textSize(64);
  text(freq.toFixed(2), width/2, height-100);
  let diff  =  freq - 440;
  rectMode(CENTER);
  fill(255, alpha);
  stroke(255);
  strokeWeight(1);
  rect(200, 100,200, 50);

  let alpha = map(abs(diff), 0, 100, 255, 0);
  let r = color(255, 0, 0);
  let g = color(0, 255, 0);
  let col = lerpColor(g, r, amount);
  fill(col);
  rect(200, 100, diff * 10, 50);
}