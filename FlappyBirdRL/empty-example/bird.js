// constructor function
class Bird{
    
    constructor(brain){
    this.y = height / 2;
    this.x = 64;
    this.gravity = 0.6;
    this.lift = 15;
    this.velocity = 0;
    this.score = 0;
    this.fitness;
    
    if (brain){
        this.brain = brain.copy();
        }
    else{
        this.brain = new NeuralNetwork(4, 4, 1);
        }
    }

    think(pipes){
        
        // Find the closest pipe
        let closest = null;
        let closestD = Infinity;
        for (let i = 0; i < pipes.length; i++){
            let d = pipes[i].x - this.x;
            if (d < closestD && d > 0){
                closest = pipes[i];
                closestD = d;
            }
        }

        let inputs = [];
        inputs[0] = this.y / height;
        inputs[1] = closest.top / height;
        inputs[2] = closest.bottom / height;
        inputs[3] = closest.x / width;

        let output = this.brain.predict(inputs);
        if (output[0] > 0.5){
            this.up();
        }
    }

    show() {
        fill(255);
        ellipse(this.x, this.y,32,32);
        // console.log("Print the circle!");
    }

    up(){
        this.velocity += -this.lift;
        //console.log(this.velocity);
    }

    mutate(){
        this.brain.mutate(0.1);
    }

    update(){
        this.score++;
        // console.log(this.score);
        this.velocity += this.gravity;
        this.y += this.velocity;

        if (this.y > height){  
            this.y = height;
            this.velocity = 0;
        }

        if (this.y < 0){  
            this.y = 0;
            this.velocity = 0;
        }
    }
}