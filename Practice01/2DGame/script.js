const CANVAS_W = 800;
const CANVAS_H = 450;
const BALL_SPEED = 2;     // try 1.5–2.5
const PADDLE_SPEED = 4;   // try 3–5
const PADDLE_W = 120;     // wider paddle helps beginners
const PADDLE_H = 12;

let score = 0;
let running = true;

// Ball & paddle
const ball = { 
    x: CANVAS_W / 2, 
    y: CANVAS_H / 2, 
    r: 10, 
    dx: BALL_SPEED, 
    dy: BALL_SPEED 
};
console.log(ball);

const paddle = { 
    x: CANVAS_W / 2 - PADDLE_W / 2, 
    y: CANVAS_H - 40, 
    w: PADDLE_W, 
    h: PADDLE_H, 
    speed: PADDLE_SPEED, 
    dx: 0 
};
console.log(paddle);

// === We should have Global Variables
// === to keep all the reference objects. So what are the referenced objects we should have?
// 1. A canvas constant
const canvas = document.getElementById("game");
// 2. A canvas' 2D context constant
const ctx = canvas.getContext("2d");
// 3. A score element, so we can update the score
const scoreEl = document.getElementById("score");
// 4. A restart button, so we can apply click on it
const restartBtn = document.getElementById("restartBtn");

const startBtn = document.getElementById("startBtn");

// Ensure canvas matches tunables (if you change in HTML, these still enforce)
canvas.width = CANVAS_W;
canvas.height = CANVAS_H;

// === We should define functions as well
// 1. A function to draw the ball and the paddle - draw() { .... }
function draw() {
    // Clear screen, to make the canvas blank so we can draw something new on it.
    ctx.clearRect(0,0,canvas.width,canvas.height);

    // Ball
    ctx.beginPath();
    ctx.arc(ball.x, ball.y, ball.r, 0, Math.PI*2);
    ctx.fillStyle = ball.color || '#facc15';
    ctx.fill();

    // Paddle
    ctx.fillStyle = '#4ade80';
    ctx.fillRect(paddle.x, paddle.y, paddle.w, paddle.h);
    
    // If you lose the game, so message game over instead.
    if (!running) {
        ctx.fillStyle = 'white';
        ctx.font = '48px "Press Start 2P"';
        ctx.fillText('Game Over', CANVAS_W / 2 - 200, CANVAS_H / 2);
        ctx.font = '12px "Press Start 2P"';
        ctx.fillText('Click Restart to play again', CANVAS_W / 2 - 140, CANVAS_H / 2 + 30);
    }
}

// When a key is pressed
document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
        event.preventDefault(); 
    }

    if (event.key === 'ArrowLeft') {
        paddle.dx = -paddle.speed;
    } 
    else if (event.key === 'ArrowRight') {
        paddle.dx = paddle.speed;
    }
});

// When a key is released
document.addEventListener('keyup', (event) => {
    if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
        paddle.dx = 0;
    }
});

// 2. A function to move the paddle left/right - movePaddle() { .... }
function movePaddle() {
    // Make sure paddle stay in the same vertical position paddle.dx = 0;
    
    // If player press down on arrow left, move the paddle to the left
    // here is how you can move the paddle to the left: paddle.dx = -paddle.speed;
    
    // If player press down on arrow left, move the paddle to the left
    // here is how you can move the paddle to the left: paddle.dx =  paddle.speed;

    paddle.x += paddle.dx;

    // clamp, make sure you can't move paddle outside the canvas:
    if (paddle.x < 0) paddle.x = 0;
    if (paddle.x + paddle.w > canvas.width) paddle.x = canvas.width - paddle.w;
}
// 3. A function to move the ball, it bounces when touch the left/top/right wall of canvas - moveBall() { ..... }
function moveBall() {
    // These 2 lines of code are how your ball can be moved next
    // It depends on the value of dx and dy
    ball.x += ball.dx;
    ball.y += ball.dy;

    // left/right walls
    // Check if the ball reach the left/right wall, then ball.dx *= -1;

    // top wall
    // Check if the ball reach top wall, then ball.dy *= -1;

    // if the ball reach the top/left/right wall of the canvas
    if (ball.x + ball.r > CANVAS_W || ball.x - ball.r < 0) {
        ball.dx = -ball.dx;
    }
    if (ball.y - ball.r < 0) {
        ball.dy = -ball.dy;
    }

    // Increase speed based on score
    if (score >= 10) {
        ball.dx = BALL_SPEED * 2.5 * Math.sign(ball.dx);
        ball.dy = BALL_SPEED * 2.5 * Math.sign(ball.dy);
    } else if (score >= 5) {
        ball.dx = BALL_SPEED * 2 * Math.sign(ball.dx);
        ball.dy = BALL_SPEED * 2 * Math.sign(ball.dy);
    } else if (score >= 2) {
        ball.dx = BALL_SPEED * 1.5 * Math.sign(ball.dx);
        ball.dy = BALL_SPEED * 1.5 * Math.sign(ball.dy);
    } else {
        ball.dx = BALL_SPEED * Math.sign(ball.dx);
        ball.dy = BALL_SPEED * Math.sign(ball.dy);
    }
}
// 4. A function to check collision with the paddle or miss - checkCollision() { .... }
function checkCollision() {
    var ballColor = ['#f87171', '#34d399', '#60a5fa', '#fbbf24', '#a78bfa'
                    , '#f472b6', '#f97316', '#22d3ee', '#10b981', '#e879f9'
                    , '#3b82f6', '#8b5cf6', '#ec4899', '#14b8a6', '#f43f5e'
    ];
    const hitsPaddle =
        ball.y + ball.r >= paddle.y &&
        ball.x > paddle.x &&
        ball.x < paddle.x + paddle.w;

    if (hitsPaddle && ball.dy > 0) {
        ball.dy *= -1;
        const randomColor = ballColor[Math.floor(Math.random() * ballColor.length)];
        ball.color = randomColor;
        ctx.fillStyle = randomColor;
        score++;
        updateUI();
    }

    const inputUsername = document.getElementById("inputUsername");

    // Missed paddle → only stop when ball goes below the canvas
    if (ball.y - ball.r > CANVAS_H) {
        running = false;

        const playerName = inputUsername.value.trim();

        fetch("http://localhost:8080/api/scores", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                playerName: playerName,
                score: score
            })
        })
        .then(res => res.json())
        .then(data => console.log("Score saved to backend:", data))
        .catch(err => console.error("Error saving score:", err));
    }
}

// 5. A function to update the score - updateUI() { ..... }
function updateUI() {
    scoreEl.textContent = score;
}

restartBtn.addEventListener('click', () => {
    console.log('Restart button clicked');
    init();
})

// === And the loop, to keep the game running
function init() {
    score = 0;
    running = true;
    ball.x = CANVAS_W / 2; ball.y = CANVAS_H / 2; ball.dx = BALL_SPEED; ball.dy = BALL_SPEED;
    paddle.x = CANVAS_W / 2 - PADDLE_W / 2;
    updateUI();
}

// === Loop ===
function loop() {
    if (running) {
        movePaddle();
        moveBall();
        checkCollision();
    }
    draw();
    requestAnimationFrame(loop);
}

// So we initialize the value
startBtn.addEventListener('click', () => {
    if (inputUsername.value.trim() === "") {
        alert("Please enter your username to start the game.");
        return;
    }
    init();
    loop();
    inputUsername.style.display = 'none';
    startBtn.style.display = 'none';
});
