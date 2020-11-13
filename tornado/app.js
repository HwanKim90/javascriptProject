let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');
let centerX = canvas.clientWidth / 2;
let centerY = canvas.clientHeight / 2;
let radius = 20;
let speed = 2;
let vx = speed;
let vy = speed;

function ball() {
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, 0, Math.PI*2, false);
    ctx.fillStyle = "black";
    ctx.fill();
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ball();
}

setInterval(draw, 10);
    






