var snake;
var lastKey;

function setup() {
	createCanvas(800, 550);
    snake = new Snake();
    lastKey = 0;
}

function draw() {
    background(0);
    snake.show();

    if(keyCode == LEFT_ARROW && snake.dir != "RIGHT"){
        lastKey = LEFT_ARROW;
    }

    if(keyCode == RIGHT_ARROW && snake.dir != "LEFT"){
        lastKey = RIGHT_ARROW;
    }

    if(keyCode == UP_ARROW && snake.dir != "DOWN"){
        lastKey = UP_ARROW;
    }

    if(keyCode == DOWN_ARROW && snake.dir != "UP"){
        lastKey = DOWN_ARROW;
    }

    if(lastKey == LEFT_ARROW){
        snake.left();
    }

    if(lastKey == RIGHT_ARROW){
        snake.right();
    }

    if(lastKey == UP_ARROW){
        snake.up();
    }

    if(lastKey == DOWN_ARROW){
        snake.down();
    }
}