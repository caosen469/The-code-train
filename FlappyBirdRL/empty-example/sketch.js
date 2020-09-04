const TOTAL = 350;
var birds = [];
var pipes = [];
let savedBirds = [];
let counter = 0;
let cycles = 100;
let slider;

function setup() {
  // put setup code here
  createCanvas(400, 600);
  slider = createSlider(1, 100, 1);

  for (let i = 0; i < TOTAL; i++) {
    birds[i] = new Bird();
  }
  //pipes.push(new Pipe());
}

function draw() {
  // put drawing code here
  for (let n = 0; n < slider.value(); n++){ 
    if (frameCount == 0){
      pipes.push(new Pipe());
    }

    if (counter % 100 == 0){
      pipes.push(new Pipe());
    }

    counter ++;

    for (var i = pipes.length - 1; i >= 0; i--){
      //pipes[i].show();
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
      counter = 0;
      nextGeneration();
      pipes = [];
    }

    for (let bird of birds){
      if (pipes[0] != null){
        bird.think(pipes);
        bird.update();
        //bird.show();
      } 
    }
  }

  // All the drawing stuff
  background(0);

  for (let bird of birds){
    bird.show();
  }
  for (let pipe of pipes){
    pipe.show();
  }


}

// function keyPressed(){
//   if (key == ' '){
//     //console.log("SPACE");
//     bird.up(); 
//   }
// }
