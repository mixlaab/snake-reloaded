class Snake{
    constructor(){
        this.head = new Head();
        this.dir = "NONE";
    }

    show(){
        this.head.show();
    }

    left(){
        this.head.left();
        this.dir = "LEFT";
    }
    
    right(){
        this.head.right();
        this.dir = "RIGHT";
    }

    up(){
        this.head.up();
        this.dir = "UP";
    }

    down(){
        this.head.down();
        this.dir = "DOWN";
    }
}
