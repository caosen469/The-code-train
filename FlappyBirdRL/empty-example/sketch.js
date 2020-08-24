const TOTAL = 100;
var birds = [];
var pipes = [];
let savedBirds = [];

function setup() {
  // put setup code here
  createCanvas(400, 600);

  for (let i = 0; i < TOTAL; i++) {
    birds[i] = new Bird();
  }
  //pipes.push(new Pipe());
}

function draw() {
  // put drawing code here
  background(0);

  if (frameCount == 0){
    pipes.push(new Pipe());
  }

  if (frameCount % 100 == 0){
    pipes.push(new Pipe());
  }

  for (var i = pipes.length - 1; i >= 0; i--){
    pipes[i].show();
    pipes[i].update();

    for (let j = birds.length - 1; j >= 0; j--){
      if (pipes[i].hits(birds[j])){
          savedBirds.push(birds.splice(j, 1)[0]);
      }
    }

    if (pipes[i].offscreen()){
      pipes.splice(i, 1);
    }
  }

  if (birds.length == 0){
    nextGeneration();
  }

  for (let bird of birds){
    if (pipes[0] != null){
      bird.think(pipes);
      bird.update();
      bird.show();
    }
  }
}

// function keyPressed(){
//   if (key == ' '){
//     //console.log("SPACE");
//     bird.up(); 
//   }
// }
