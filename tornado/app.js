//spiral pattern 나선형 애니메이션 만들기
let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');
let x = canvas.clientWidth / 2;
let y = canvas.clientHeight / 2;
let radius = 20;
let speed = 2;
let angle = 0
let a = 1;
let b = 1;

function ball() {
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI*2, false);
    ctx.fillStyle = "black";
    ctx.fill();
}

//일단 나선형 그리기
function spiral() {
    
    ctx.moveTo(x, y);

    var STEPS_PER_ROTATION = 60;
    var increment = 2 * Math.PI / STEPS_PER_ROTATION;       
    var theta = increment;

    while( theta < 40 * Math.PI) {
      var newX = x + theta * Math.cos(theta); 
      var newY = y + theta * Math.sin(theta); 
      ctx.lineTo(newX, newY);
      theta = theta + increment;
    }
    ctx.stroke();
}

function draw() {
    // ctx.clearRect(0, 0, canvas.width, canvas.height);
    ball();
    spiral();
}

setInterval(draw, 10);
    






