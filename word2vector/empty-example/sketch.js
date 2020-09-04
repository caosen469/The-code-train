let code;
let vectors;
let pos;

// A built in function, see the documentation of p5.js
function preload(){
  data = loadJSON('xkcd.json');
  //console.log(data);
}

function processData(data){
  let vectors = {};
  //console.log(data);
  let colors = data.colors;
  //console.log(colors);
  for (let i = 0; i < colors.length; i++){
    let label = colors[i].color;
    let rgb = color(colors[i].hex);
    vectors[label] = createVector(red(rgb), green(rgb), blue(rgb));
  }
  return vectors;
}

function setup() {
  // put setup code here
  //noCanvas();
  createCanvas(300, 300);
  vectors = processData(data);

  pos = createVector(random(255), random(255), random(255));
  findNearest(pos);
}

function draw() {
  // put drawing code here
  let colorName = findNearest(pos);
  let div = createDiv(colorName);
  let v = vectors[colorName];
  div.style('color', 'rgb(${v.x}, ${v.y}, ${v.z})');
  background(v.x, v.y, v.z);


  let r = p5.Vector.random3D();
  r.mult(50);
  pos.add(r);
  pos.x = constrain(pos.x, 0, 255);
  pos.y = constrain(pos.y, 0, 255);
  pos.z = constrain(pos.z, 0, 255);
  frameRate(2);
}

function findNearest(v){
  let keys = Object.keys(vectors);
  //console.log(keys);
  keys.sort((a ,b) => {
    let d1 = distance(v, vectors[a]);
    let d2 = distance(v, vectors[b]);
    return d1 - d2;
  });
  return keys[0];
}

function distance(v1, v2){
  return p5.Vector.dist(v1, v2);
}
