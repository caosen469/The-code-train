function Particle(x, y, firework) {
    this.pos = createVector(x, y);
    // this.firework = !exploder;

    if (firework){
        this.vel = createVector(0, random(-12, -8));
    }
    else{
        this.vel = p5.Vector.random2D();
        //this.vel = this.vel.mult(random(1, 6));
    }
    
    this.acc = createVector(0, 0);

    this.applyForce = function(force){
        this.acc.add(force);
    }

    this.update = function(){
        // if (!this.firework){
        //     this.vel.mult(0.85);
        // }
        this.vel.add(this.acc);
        this.pos.add(this.vel); 
        this.acc.mult(0);

        // if (this.pos.y < 0){
        //     this.pos.y = height;
        //     this.pos.x = random(width);
        // }
    }
    this.show = function(){
        //point(width/2, height/2);
        point(this.pos.x, this.pos.y);     
    }
}