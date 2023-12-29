var canvas = document.getElementById('myCanvas');
var c=canvas.getContext('2d');
canvas.height=window.innerHeight;
canvas.width=window.innerWidth;

var score=0;
var previousScore=0;
var bestScore=0;
var gameOver=true;
var distanceBetweenTubes=150;
var playerDistanceFromEdge=30;
var player = new Player(playerDistanceFromEdge,10,25,25);
player.draw();

var tubes=[];
generateTubes();


function animate() {
    window.requestAnimationFrame(animate);

    //clear then draw board
    c.clearRect(0,0,window.innerWidth,window.innerHeight);
    player.draw();
    for(let i=0; i<tubes.length; i++) {
        tubes[i].draw();
    }
    drawPreviousAndBestScores();

    if(!gameOver) {
        score=score+.025;
        //animation
        player.update();
        for(let i=0; i<tubes.length; i++) {
            tubes[i].update();
        }
        
        //delete old tubes and add a new one
        if(tubes[0].x+tubes[0].width<0) {
            tubes=tubes.slice(1,tubes.length);
            tubes.push(new Tube(tubes[tubes.length-1].x+distanceBetweenTubes,200,400));
        }

        //collision
        if(player.x+player.width>tubes[0].x && player.x-player.width<tubes[0].x) { //if inside the tube
            console.log("inside");
            if(player.y<tubes[0].topOpening || player.y+player.height>tubes[0].bottomOpening) {
                lose();
            }
        }

        //score
        let text="Score: "+Math.floor(score);
        c.font = "30px Comic Sans MS";
        c.fillStyle = "red";
        c.textAlign = "center";
        c.fillText(text, canvas.width/2, canvas.height/2);
        drawPreviousAndBestScores();
    } else {
        let text="Press space to start";
        c.font = "30px Comic Sans MS";
        c.fillStyle = "red";
        c.textAlign = "center";
        c.fillText(text, canvas.width/2, canvas.height/2);
    }
}
animate();




function lose() {
    gameOver=true;
    previousScore=score;
    if(score>bestScore) {
        bestScore=score;
    }
    score=0;
    generateTubes();
    player.y=10;
    player.velocityY=0;
}

function generateTubes() {
    tubes=[];
    for(let i=0; i<7; i++) {
        let topOpening=Math.random() * (300 - 10) + 10;
        let bottomOpening=Math.random() * (window.innerHeight - 400) + 400;
        tubes.push(new Tube(distanceBetweenTubes*i+200,topOpening,bottomOpening));
    }
}

function drawPreviousAndBestScores() {
    //previousScore
    let previousScoreText="Previous: "+Math.floor(previousScore);
    c.font = "30px Comic Sans MS";
    c.fillStyle = "black";
    c.textAlign = "center";
    c.fillText(previousScoreText, canvas.width-100, 50);
    // bestScore
    let bestScoreText="Best: "+Math.floor(bestScore);
    c.font = "30px Comic Sans MS";
    c.fillStyle = "black";
    c.textAlign = "center";
    c.fillText(bestScoreText, canvas.width-100, 100);
}
