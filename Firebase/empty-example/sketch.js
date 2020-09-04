let currentScore = 0;
let FinalScore = 0;
let button;
let timeLimit = 5;
let scoreArray = [];
let TimeLimitScore = 0;
let database;
let submit;

function setup() {
  // put setup code here
  createCanvas(200, 200);
  button = createButton("click");
  button.position(65, 200);
  button.mousePressed(PlayGame);

  var firebaseConfig = {
    apiKey: "AIzaSyCbkVaIBh9_8Q328ZwNyMcvMpuKm6jX6SU",
    authDomain: "stupidgame-7c70d.firebaseapp.com",
    databaseURL: "https://stupidgame-7c70d.firebaseio.com",
    projectId: "stupidgame-7c70d",
    storageBucket: "stupidgame-7c70d.appspot.com",
    messagingSenderId: "1006435840100",
    appId: "1:1006435840100:web:6125fa142980b896e9af71"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  database = firebase.database();
 

  submit = createButton("submit");
  submit.mousePressed(submitscore);
}

function PlayGame(){
  currentScore++;
  // console.log(currentScore);
  scoreArray.push(currentScore);
}

function submitscore(){
  let data = {
    name: 'CSH',
    score: FinalScore
  }
  ref = database.ref('scores');
  ref.push(data);
}

function draw() {
  // put drawing code here
  background(0);
  // for (let i = scoreArray.length-1; i>=scoreArray.length-1-timeLimit; i--){
  //   if (scoreArray[scoreArray.length-1] == scoreArray[i]){
  //     FinalScore = scoreArray[i-1];
  //     scoreArray = [];
  //     currentScore = 0;
  //   }
  // }
  // console.log(frameCount);
  if (frameCount % 10 == 0){
    TimeLimitScore = currentScore;
  }
  if(TimeLimitScore == currentScore && frameCount > 300){
    FinalScore = currentScore;
    console.log("Game is over");
    console.log("Your final score is" + FinalScore);
    noLoop();
  }
}