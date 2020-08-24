function Pipe() {
        
    this.spacing = 300;
    this.top = random(height / 6, (3 / 4) * height);
    this.bottom = height - (this.top + this.spacing);
    this.x = width;
    this.w = 20; // width of the rect
    this.speed = 1;

    this.highlight = false;

    this.show = function(){
        fill(255);
        if (this.highlight == true){
            fill(255, 0, 0);
        }   
        rect(this.x, 0, this.w, this.top);
        rect(this.x, height-this.bottom, this.w, this.bottom);
    }

    this.update = function(){
        this.x -= this.speed;
    }

    this.offscreen = function(){
        if (this.x < -this.w){
            return true;
        }
        else{
            return false;
        }
    }

    this.hits = function(bird){
        if (bird.y < this.top || bird.y > height - this.bottom){
            if(bird.x > this.x && bird.x < this.x + this.w){
                this.highlight = true;
                return true;    
            }    
        }
        else{
            this.highlight = false;
            return false;
        }
    }
}