"use strict";

drawSpaceInvader();

function drawSpaceInvader(){
    let canvas = document.querySelector("canvas");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    let context = canvas.getContext("2d");

window.onresize = drawSpaceInvader;

//#background
context.beginPath();
context.rect(300, 300 ,300, 300);
context.fillStyle = "#030303";
context.fill();
context.stroke();

//#square 1
context.beginPath();
context.rect(375, 375, 50, 50);
context.fillStyle = "#00FF00";
context.strokeStyle = "#00FF00";
context.stroke();
context.fill();

//#square 2
context.beginPath();
context.rect(375, 475, 50, 50);
context.fillStyle = "#00FF00";
context.strokeStyle = "#00FF00";
context.stroke();
context.fill();

//#square 3 
context.beginPath();
context.rect(425, 425, 50, 50);
context.fillStyle = "#00FF00";
context.strokeStyle = "#00FF00";
context.stroke();
context.fill();

//#square 4
context.beginPath();
context.rect(475,375, 50, 50);
context.fillStyle = "#00FF00";
context.strokeStyle = "#00FF00";
context.stroke();
context.fill();

//#square 5
context.beginPath();
context.rect(475, 475, 50, 50);
context.fillStyle = "#00FF00";
context.strokeStyle = "#00FF00";
context.stroke();
context.fill();

//#square 6
context.beginPath();
context.rect(325, 325,50, 50);
context.fillStyle = "#00FF00";
context.strokeStyle = "#00FF00";
context.lineWidth = 1;
context.stroke();
context.fill();

//square 7
context.beginPath();
context.rect(525, 325, 50, 50);
context.fillStyle = "#00FF00";
context.strokeStyle = "#00FF00";
context.stroke();
context.fill();

//#square 8
context.beginPath();
context.rect(325, 525, 50, 50);
context.fillStyle = "#00FF00";
context.strokeStyle = "#00FF00";
context.stroke();
context.fill();

//#square 9
context.beginPath();
context.rect(525, 525, 50, 50);
context.fillStyle = "#00FF00";
context.strokeStyle = "#00FF00";
context.stroke();
context.fill();

//square 10
context.beginPath();
context.rect(325, 425, 50, 50);
context.fillStyle = "#00FF00";
context.strokeStyle = "#00FF00";
context.stroke();
context.fill();

//#square 11
context.beginPath();
context.rect(525, 425, 50, 50);
context.fillStyle = "#00FF00";
context.strokeStyle = "#00FF00";
context.stroke();
context.fill();

//#square 12
context.beginPath();
context.rect(425, 325, 50, 50);
context.fillStyle = "#00FF00";
context.strokeStyle = "#00FF00";
context.stroke();
context.fill();

//#square 13
context.beginPath();
context.rect(425, 525, 50, 50);
context.fillStyle = "#00FF00";
context.strokeStyle = "#00FF00";
context.stroke();
context.fill();




}


