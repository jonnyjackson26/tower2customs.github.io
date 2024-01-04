function Point(x,y) {
    this.x=x;
    this.y=y;
}

var rows=5;
var cols=5;

var highScore=3;
var boxesShowing=3;
var correctBoxesCount=0;
var showingBoxes=generateShowingBoxes(boxesShowing);

var board = document.getElementById('board');
drawBoard();

drawShowingBoxes();


function generateShowingBoxes(numOfShowingBoxes) {
    var points=[];
    while(points.length<numOfShowingBoxes) {
        var randomPoint=new Point(Math.floor(Math.random()*rows),Math.floor(Math.random()*cols));
        let isUniquePoint=true;
        for(let i=0; i<points.length; i++) {
            if(points[i].x==randomPoint.x && points[i].y==randomPoint.y) {
                isUniquePoint=false;
                i=points.length;
            }
        }
        if(isUniquePoint) {
            points.push(randomPoint);
        }
    }
    return points;
}

function drawBoard() {
    for(let i=0; i<rows; i++) {
        let row = document.createElement('div');
        for(let j=0; j<cols; j++) {
            box = document.createElement('div');
            box.setAttribute("id", "box"+i+","+j);
            box.addEventListener('click',clickedBox);
            box.classList.add("boxClass");
            row.appendChild(box);
        }
        board.appendChild(row)
    }
}

function drawShowingBoxes() {
    //get rid of white boxes
    let allSquares = document.getElementsByClassName('boxClass');
    for(let i=0; i<allSquares.length;i++) {
        allSquares[i].style.backgroundColor='black';
    }
    //draw boxes to be shown
    for(let i=0; i<showingBoxes.length; i++) {
        var boxToBeShown=document.getElementById("box"+showingBoxes[i].x+","+showingBoxes[i].y);
        boxToBeShown.innerHTML="<p class='boxText'>"+(i+1)+"</p>";
    }
}

function resetGame() {
    correctBoxesCount=0;
    showingBoxes=generateShowingBoxes(boxesShowing);
    drawShowingBoxes();
}

function clickedBox() {
    //make box text disaprear
    for(let i=0; i<showingBoxes.length; i++) {
        var boxToBeShown=document.getElementById("box"+showingBoxes[i].x+","+showingBoxes[i].y);
        boxToBeShown.innerHTML="";
    }
    //make box white
    this.style.backgroundColor="white";
    
    var y=this.id.substring(5,6);
    var x=this.id.substring(3,4);
    if(showingBoxes[correctBoxesCount].x==x && showingBoxes[correctBoxesCount].y==y) {
        correctBoxesCount++;
        if(correctBoxesCount==showingBoxes.length) { //when you get all of them
            boxesShowing++;
            if(boxesShowing-1==rows*cols) {
                alert("Congratulations! You win! Press Enter to start again.");
                boxesShowing=3;
                resetGame()
            } else {
                alert("Great Job! Press enter to go to the next level!");
                resetGame()
            }
            if(boxesShowing>highScore) {
                highScore=boxesShowing;
            }
            document.getElementById('highScoreText').innerHTML='High Score: '+highScore;
        }
    }
    else {
        alert("Uh oh! You lost. Press enter to play again!");
        boxesShowing=3;
        resetGame()
    }
}




/*For Options*/
/* Grid Size */
document.getElementById('submitOptions').addEventListener('click',() => {
    let size=document.getElementById('gridSize').value;
    rows=size;
    cols=size;
    //clear board
    board.innerHTML='';
    drawBoard();
    boxesShowing=3;
    resetGame();
})

/* theme buttons */
document.getElementById('linenTheme').addEventListener('click',() => {
    document.querySelector('body').style.backgroundColor='linen';
    document.querySelector('h1').style.color='black';
    document.querySelector('h3').style.color='black';
    document.querySelector('p').style.color='black';
    for(let i=0; i<document.getElementsByClassName('boxClass').length; i++) {
        document.getElementsByClassName('boxClass')[i].style.backgroundColor='linen';
        document.getElementsByClassName('boxClass')[i].style.border='1px solid black';
    }
})
