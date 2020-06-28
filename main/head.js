class Head{
    constructor(){
        this.x = width/2;
        this.y = height/2;
        this.vel = 3;
        this.headSize=20;
    }

    show(){
        rectMode(CENTER);
        rect(this.x, this.y, this.headSize, this.headSize);
    }

    left(){
        this.x = this.x - this.vel;
        if(this.x < this.headSize/2){
            this.x = this.headSize/2;
        }
    }

    right(){
        this.x = this.x + this.vel;
        if(this.x > width-(1+this.headSize/2)){
            this.x = width-(1+this.headSize/2);
        }
    }

    up(){
        this.y = this.y - this.vel;
        if(this.y < this.headSize/2){
            this.y = this.headSize/2;
        }
    }

    down(){
        this.y = this.y + this.vel;
        if(this.y > height-(1+this.headSize/2)){
            this.y = height-(1+this.headSize/2);
        }
    }
}
