function setup() {
  // put setup code here
  createCanvas(600, 400);
  background(0);
  let button = createButton('press');
  // button.mousePressed(changeBackground);
  button.mousePressed(() => {
    background(random(255), random(255), random(255));
  });
}


function draw() {
  // put drawing code here
}

// function changeBackground(){
//   background(random(255), random(255), random(255));
// }

class Counter {
  
  constructor(){
    this.count = 0;
    this.p = createP('');
  }

  countIt(){
    this.count++;
    this.p.html(this.count);
  }
}