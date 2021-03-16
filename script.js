// Size of the game area (in px)
const GAME_AREA_WIDTH = 700;
const GAME_AREA_HEIGHT = 500;

// Size of the paddles (in px)
const PADDLE_HEIGHT = 100;
const PADDLE_WIDTH = 20;

// Size of the ball (in px)
const BALL_SIZE = 20;

// Get the computer paddle element
const computerPaddle = document.querySelector('.computer-paddle');

// Initial computer paddle y-position and y-velocity
let computerPaddleYPosition = 0;
let computerPaddleYVelocity = 0;

// Update the pong world
function update() {

    // Update the computer paddle's position
    computerPaddleY = computerPaddleY + PADDLE_SPEED;

    // If the computer paddle goes off the edge of the screen, bring it back
    computerPaddleY = computerPaddleY % (GAME_AREA_HEIGHT - PADDLE_HEIGHT);

    // Apply the y-position 
    computerPaddle.style.top = `${computerPaddleY}px`;
}

// Call the update() function everytime the browser is ready to re-render its content
function loop() {
    update();
    window.requestAnimationFrame(loop);
}
window.requestAnimationFrame(loop);