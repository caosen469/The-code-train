// Feature extraction
// Transfer learning
let mobilenet;
let video;
let label = '';
let classifier;
let waterButton;
let phoneButton;
let trainButton;

function modelReady(){
  console.log('model is ready');
  // mobilenet.predict(gotResults);
}

function videoReady(){
  console.log('video is ready');
}

function gotResults(error, results){
  if (error){
    console.log(error);
  }
  else {
    // label = results[0].className;
    label = results;
    // console.log(results[0].className);
    classifier.classify(gotResults);
    // mobilenet.predict(gotResults); 

  }
}

function setup() {
  // put setup code here
  createCanvas(320, 270);
  video = createCapture(VIDEO);
  video.hide();
  background(0);

    // mobilenet = ml5.featureExtractor('MobileNet', video, modelReady);
  mobilenet = ml5.featureExtractor('MobileNet', modelReady);
  classifier = mobilenet.classification(video, videoReady);

  waterButton = createButton('ukelele');
  waterButton.mousePressed(function(){
    classifier.addImage('water');
  });

  phoneButton = createButton('phone');
  phoneButton.mousePressed(function(){
    classifier.addImage('phone');
  });

  trainButton = createButton('train');
  trainButton.mousePressed(function(){
    classifier.train(whileTraining);
  });
}

function whileTraining(loss){
  if (loss == null){
    console.log('Training Complete');
    classifier.classify(gotResults);
  }else{
    console.log(loss);
  }
}

function draw() {
  // put drawing code here
  background(0);
  image(video, 0, 0, 320, 240);
  fill(255);
  textSize(16);
  text(label, 10, height-10);

}