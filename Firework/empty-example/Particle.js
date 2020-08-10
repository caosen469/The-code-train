function Particle(x, y, hu, firework) {
    this.pos = createVector(x, y);
    this.firework = firework;
    this.lifespan = 255;
    this.hu = hu;

    if (this.firework){
        this.vel = createVector(0, random(-12, -8));
    }
    else{
        this.vel = p5.Vector.random2D();
        this.vel = this.vel.mult(random(2, 10));
    }
    
    this.acc = createVector(0, 0);

    this.applyForce = function(force){
        this.acc.add(force);
    }

    this.update = function(){
        if (!this.firework){
            this.vel.mult(0.9);
            this.lifespan -= 4;
        }
        this.vel.add(this.acc);
        this.pos.add(this.vel); 
        this.acc.mult(0);

        // if (this.pos.y < 0){
        //     this.pos.y = height;
        //     this.pos.x = random(width);
        // }
    }

    this.done = function(){
        if (this.lifespan <= 0 ){
            return true;
        }
        else{
            return false;
        }
    }

    this.show = function(){
        //point(width/2, height/2);
        colorMode(HSB);
        if (!this.firework){
            stroke(hu, 255, 255, this.lifespan);
            strokeWeight(2);
        }
        else{     
            stroke(hu, 255, 255);
            strokeWeight(4);
        } 
        point(this.pos.x, this.pos.y);
    }
    console.log("the hu value is " + hu);
}