const canvas = document.getElementById('canvas');
const decreaseBtn = document.getElementById('decrease');
const increaseBtn = document.getElementById('increase');
ctx = canvas.getContext('2d');

let paint = false;
let width = 5;

function reduce(){
    width -= 5;
}
function grow(){
    width += 5;
}

function startPosition(e){
    paint = true;
    draw(e);
}
function endPosition(){
    paint = false;
    ctx.beginPath();
}
function draw(e){
    if(!paint) return;
    reduce();
    grow();
    //clear();
    ctx.lineWidth = width;
    ctx.lineCap = 'round';
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(e.offsetX, e.offsetY);
    
}

// Adding event listeners
canvas.addEventListener('mousedown', startPosition);
canvas.addEventListener('mouseup', endPosition);
canvas.addEventListener('mousemove', draw);
decreaseBtn.addEventListener('click', reduce);
increaseBtn.addEventListener('click', grow);
