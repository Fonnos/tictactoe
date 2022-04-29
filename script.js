


let fields = [];
let gameOver = false;
let winner;
AUDIO_GAME_OVER = new Audio('audio/gameOver.mp3');
currentShape = 'cross';



function fillShape(id) {
    if (!fields[id] && !gameOver) {
        if (currentShape == 'cross') {
            currentShape = 'circle';
            document.getElementById('player_1').classList.add('player-inactive');
            document.getElementById('player_2').classList.remove('player-inactive');
        }
        else {
            currentShape = 'cross';
            document.getElementById('player_2').classList.add('player-inactive');
            document.getElementById('player_1').classList.remove('player-inactive');
        }
        fields[id] = currentShape;
        draw();
        checkForWin();
    }
}



function draw() {
    for (let i = 0; i < fields.length; i++) {
        if (fields[i] == 'circle') {
            document.getElementById('circle_' + i).classList.remove('d-none');
        }

        if (fields[i] == 'cross') {
            document.getElementById('cross_' + i).classList.remove('d-none');
        }
    }
}



function checkForWin() {
    checkHorizontal();
    checkVertical();
    checkDiagonal();
    showEndsccreen();
}



function restart() {
    resetToMainscreen();
    resetVariables();
}



function checkHorizontal() {
    if (fields[0] == fields[1] && fields[1] == fields[2] && fields[0]) {
        winner = fields[0];
        document.getElementById('line_1').style.transform = 'scaleX(1)';
    }
    if (fields[3] == fields[4] && fields[4] == fields[5] && fields[3]) {
        winner = fields[3];
        document.getElementById('line_2').style.transform = 'scaleX(1)';
    }
    if (fields[6] == fields[7] && fields[7] == fields[8] && fields[6]) {
        winner = fields[6];
        document.getElementById('line_3').style.transform = 'scaleX(1)';
    }
}



function checkVertical() {
    if (fields[0] == fields[3] && fields[3] == fields[6] && fields[0]) {
        winner = fields[0];
        document.getElementById('line_4').style.transform = 'rotate(90deg) scaleX(1)';
    }
    if (fields[1] == fields[4] && fields[4] == fields[7] && fields[1]) {
        winner = fields[1];
        document.getElementById('line_5').style.transform = 'rotate(90deg) scaleX(1)';
    }
    if (fields[2] == fields[5] && fields[5] == fields[8] && fields[2]) {
        winner = fields[2];
        document.getElementById('line_6').style.transform = 'rotate(90deg) caleX(1)';
    }
}



function checkDiagonal() {
    if (fields[0] == fields[4] && fields[4] == fields[8] && fields[0]) {
        winner = fields[0];
        document.getElementById('line_7').style.transform = 'rotate(45deg) scaleX(1)';
    }
    if (fields[2] == fields[4] && fields[4] == fields[6] && fields[2]) {
        winner = fields[2];
        document.getElementById('line_8').style.transform = 'rotate(-45deg) scaleX(1)';
    }
}



function showEndsccreen() {
    if (winner) {
        console.log('Gewonnen!', winner)
        gameOver = true;
        setTimeout(function () {
            document.getElementById('game_over').classList.remove('d-none');
        }, 2000);
        AUDIO_GAME_OVER.play();
        setTimeout(function () {
            document.getElementById('restart_button').classList.remove('d-none');
        }, 4000);
    }
}



function resetToMainscreen() {
    document.getElementById('restart_button').classList.add('d-none');
    document.getElementById('game_over').classList.add('d-none');
    document.getElementById('player_1').classList.remove('player-inactive');
    document.getElementById('player_2').classList.add('player-inactive');
    for (let i = 1; i < 9; i++) {
        document.getElementById('line_' + i).style.transform = 'scaleX(0)';
    }
    for (let i = 0; i < 9; i++) {
        document.getElementById('cross_' + i).classList.add('d-none');
        document.getElementById('circle_' + i).classList.add('d-none');
    }
}



function resetVariables() {
    winner = '';
    gameOver = false;
    currentShape = 'cross';
    fields = [];
}