let mobilenet;
let puffin;
let results2;

function modelReady(){
  console.log("Model is Ready!!!");
  mobilenet.classify(puffin, (err, results) => {
    console.log(results);
    // results2 = results;

    let label = results[0].label;
    fill(0);
    textSize(64);
    text(label, 10, height-100);
  });

  // let label = results2[0].label;
  // fill(0);
  // textSize(64);
  // text(label, 10, height-100);
}

function imageReady(){
  image(puffin, 0, 0, width, height);
  console.log("The image is loaded");

}

function gotResults(error, results){
  if (error){
    console.error(error);
  }
  else {
    console.log(results);
  }
}

function setup() {
  // put setup code here
  createCanvas(640, 480);
  background(0);

  puffin = createImg('images/cat.jpg', imageReady);
  //puffin = createImg('images/puffin.jpg');

  puffin.hide();

  mobilenet = ml5.imageClassifier('MobileNet', modelReady);
  
  console.log("The program is done");
}

function draw() {
  // put drawing code here
}