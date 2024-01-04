var gameOver=false;
var whosTurn="O"
board=[];

window.onload = function() {
    for(let i=0;i<9;i++) {
        document.getElementById(i).addEventListener('click',clicked);
    }
    board=[[document.getElementById('0'),document.getElementById('1'),document.getElementById('2')],
    [document.getElementById('3'),document.getElementById('4'),document.getElementById('5')],
    [document.getElementById('6'),document.getElementById('7'),document.getElementById('8')]]
    document.getElementById("butt").addEventListener('click',resetGame);
}

function clicked() {
    if(!gameOver) {
        thisBox=document.getElementById(this.id)
        if(thisBox.innerText==""){
            text="";
            if(whosTurn=="O") {
                whosTurn="X";
                text="It's X's turn"
                thisBox.innerText="O"
            }
            else {
                whosTurn="O"
                text="It's O's turn"
                thisBox.innerText="X"
            }
            document.getElementById("whosTurn").innerText=text;
            winner=returnWinner();
            if(winner=="O") {
                document.getElementById("whosTurn").innerText="O wins!"
                gameOver=true;
            }
            else if(winner=="X") {
                document.getElementById("whosTurn").innerText="X wins!"
                gameOver=true;
            }
            else if(winner=="cats") {
                document.getElementById("whosTurn").innerText="Cats Game!"
                gameOver=true;
            }
        }
    }
}

function returnWinner() {
    if(board[0][0].innerText==board[0][1].innerText && board[0][1].innerText==board[0][2].innerText) { //first row is the same
        if(board[0][0].innerText=="O" || board[0][0].innerText=="X") {
            board[0][0].classList.add('winning-box');
            board[0][1].classList.add('winning-box');
            board[0][2].classList.add('winning-box');
            return board[0][0].innerText;
        }
    }
    if(board[1][0].innerText==board[1][1].innerText && board[1][1].innerText==board[1][2].innerText) { //second row is the same
        if(board[1][0].innerText=="O" || board[1][0].innerText=="X") {
            board[1][0].classList.add('winning-box');
            board[1][1].classList.add('winning-box');
            board[1][2].classList.add('winning-box');
            return board[1][0].innerText;
        }
    }
    if(board[2][0].innerText==board[2][1].innerText && board[2][1].innerText==board[2][2].innerText) { //third row is the same
        if(board[2][0].innerText=="O" || board[2][0].innerText=="X") {
            board[2][0].classList.add('winning-box');
            board[2][1].classList.add('winning-box');
            board[2][2].classList.add('winning-box');
            return board[2][0].innerText;
        }
    }
    //cols
    if(board[0][0].innerText==board[1][0].innerText && board[1][0].innerText==board[2][0].innerText) { //first col is the same
        if(board[0][0].innerText=="O" || board[0][0].innerText=="X") {
            board[0][0].classList.add('winning-box');
            board[1][0].classList.add('winning-box');
            board[2][0].classList.add('winning-box');
            return board[0][0].innerText;
        }
    }
    if(board[0][1].innerText==board[1][1].innerText && board[1][1].innerText==board[2][1].innerText) { //second col is the same
        if(board[0][1].innerText=="O" || board[0][1].innerText=="X") {
            board[0][1].classList.add('winning-box');
            board[1][1].classList.add('winning-box');
            board[2][1].classList.add('winning-box');
            return board[0][1].innerText;
        }
    }
    if(board[0][2].innerText==board[1][2].innerText && board[1][2].innerText==board[2][2].innerText) { //third col is the same
        if(board[0][2].innerText=="O" || board[0][2].innerText=="X") {
            board[0][2].classList.add('winning-box');
            board[1][2].classList.add('winning-box');
            board[2][2].classList.add('winning-box');
            return board[0][2].innerText;
        }
    }
    //diagnols
    if(board[0][0].innerText==board[1][1].innerText && board[1][1].innerText==board[2][2].innerText) { //second col is the same
        if(board[0][0].innerText=="X" || board[0][0].innerText=="O") {
            board[0][0].classList.add('winning-box');
            board[1][1].classList.add('winning-box');
            board[2][2].classList.add('winning-box');
            return board[0][0].innerText;
        }
    }
    if(board[0][2].innerText==board[1][1].innerText && board[1][1].innerText==board[2][0].innerText) { //third col is the same
        if(board[0][2].innerText=="O" || board[0][2].innerText=="X") {
            board[0][2].classList.add('winning-box');
            board[1][1].classList.add('winning-box');
            board[2][0].classList.add('winning-box');
            return board[0][2].innerText;
        }
    }
    if(board[0][0].innerText!="" && board[0][1].innerText!="" && board[0][2].innerText!="" && board[1][0].innerText!="" && board[1][1].innerText!="" && board[1][2].innerText!="" && board[2][0].innerText!="" && board[2][1].innerText!="" && board[2][2].innerText!="") {
        return "cats"
    }
}

function resetGame() {
    //change colors to default of all boxes
    for(let i=0; i<board.length;i++) {
        for(let j=0;j<board[i].length; j++) {
            board[i][j].classList.remove("winning-box")
        }
    }
    whosTurn="O"
    gameOver=false;
    document.getElementById("whosTurn").innerText="It's O's turn"
    for(let i=0; i<board.length; i++) {
        for(let j=0; j<board[i].length;j++) {
            board[i][j].innerText='';
        }
    }
}