function setup() {
  // put setup code here
  noCanvas;
  // tf.tensor([1, 2, 3, 4]).print();
  const values = [];
  for (let i = 0; i < 30; i++){
    values[i] = random(0, 100);
  }
  const shape = [2, 5, 3];
  const tense = tf.tensor(values, shape, 'int32');


  // const data = tf.tensor([1, 2, 3, 4, 1, 2, 3, 4], [2, 2, 2]);
  // console.log(data.toString());
  // console.log(data);

  // tense.data().then(function(stuff){
  //   console.log(stuff);
  // })

//   tense.print();
//   console.log(tense.dataSync());

console.log(tense.get(29));
}

function draw() {
  // put drawing code here
}
