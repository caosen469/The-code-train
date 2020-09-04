let r, g, b;
let database;

function pickColor(){
  r = floor(random(256));
  g = floor(random(256));
  b = floor(random(256));
  background(r, g, b);
}

function setup() {
  // put setup code here

  var firebaseConfig = {
    apiKey: "AIzaSyCDmeA5HixQjx9USgsI42BySqwm0oT596U",
    authDomain: "justfirsttest-ecc83.firebaseapp.com",
    databaseURL: "https://justfirsttest-ecc83.firebaseio.com",
    projectId: "justfirsttest-ecc83",
    storageBucket: "justfirsttest-ecc83.appspot.com",
    messagingSenderId: "40311526702",
    appId: "1:40311526702:web:2d470520c9dc21f5d996bf",
    measurementId: "G-R7PEKLXBVK"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  database = firebase.database();
  //firebase.analytics();

  createCanvas(200, 200);
  pickColor();



  // let radioButton = createRadio();
  // radioButton.option('red-ish');
  // radioButton.option('green-ish');
  // radioButton.option('blue-ish');

  let buttons = [];
  buttons.push(createButton('red-ish'));
  buttons.push(createButton('green-ish'));
  buttons.push(createButton('blue-ish'));
  buttons.push(createButton('orange-ish'));
  buttons.push(createButton('yellow-ish'));
  buttons.push(createButton('pink-ish'));
  buttons.push(createButton('purple-ish'));
  buttons.push(createButton('brown-ish'));
  buttons.push(createButton('grey-ish'));

  for (let i = 0; i < buttons.length; i++){
    buttons[i].mousePressed(sendData);
  }

//   let submit = createButton('submit');
//   submit.mousePressed(sendData);
// }
}

function sendData(){
  // send this data to something
  // send the data to firebase
  // console.log(this.html());
  let colorDatabase = database.ref('colors');

  // The data I want to send
  var data = {
    r: r,
    g: g,
    b: b,
    label: this.html()
  }
  
  let color = colorDatabase.push(data, finished);

  function finished(err){
    if (err){
      console.log("oops, something went wrong");
      console.log(err);
    }else {
      console.log('Data Saved successfully');
    }

    pickColor();
  }
}

function draw() {
  // put drawing code here
}