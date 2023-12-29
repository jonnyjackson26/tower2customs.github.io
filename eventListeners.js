window.addEventListener('keydown', function(event) {
    switch(event.key){
        case(' '):
            if(!gameOver) {
                player.jump();
            } else {
                gameOver=false;
            }
            break;
        case('r'):
            resetGame();
            break;
    }
});