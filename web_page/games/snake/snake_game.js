// Declare variables

let snake = [
    {x: 5, y: 10},
    {x: 4, y: 10},
    {x: 3, y: 10}
];
let snake_length = 3;

// Function to move the snake
function move_snake(direction) {
    switch (direction) {
        case "u":
            new_head = {x: snake[0].x, y: (snake[0].y + 1)};
            snake.unshift(new_head);
            snake.pop();
            break;
        case "d":
            new_head = {x: snake[0].x, y: (snake[0].y - 1)};
            snake.unshift(new_head);
            snake.pop();
            break;
        case "r":
            new_head = {x: (snake[0].x + 1), y: snake[0].y};
            snake.unshift(new_head);
            snake.pop();
            break;
        case "l":
            new_head = {x: (snake[0].x - 1), y: snake[0].y};
            snake.unshift(new_head);
            snake.pop();
            break;
    }
}

// Function to grow the snake
function grow_snake() {
    snake.unshift(newHead)
}

// Function to run the game
function run_snake() {

    // Event listener to track arrow keys
    document.addEventListener("keydown", (event) => {
        switch (event.key) {
            case "ArrowUp":
                move_snake("u");
                break;
            case "ArrowDown":
                move_snake("d");
                break;
            case "ArrowRight":
                move_snake("r");
                break;
            case "ArrowLeft":
                move_snake("l");
                break;
        }
    });
}