var height = 6;
var width = 5;

var row = 0;
var col = 0;

var gameOver = false;
var word = 'SQUID';

window.onload = function(){
    intialize();
}

function intialize(){
    for(let r = 0; r < height; r++){
        for(let c = 0; c < width; c++){
            let tile = document.createElement('span');
            tile.id = r.toString() + '-' + c.toString();
            tile.classList.add('tile');
            tile.innerText = "";
            document.getElementById('board').appendChild(tile);

        }
    }

//listen for keyup
document.addEventListener('keyup', (e) => {
    if(gameOver) return;
    //alert(e.code);
    if("KeyA" <= e.code & e.code <= 'KeyZ'){
        if(col < width){
            let currentTile = document.getElementById(row.toString() + "-" + col.toString());
            if(currentTile.innerText == ''){
                currentTile.innerText = e.code[3];
                col++;
            }    
            }
        }
        else if (e.code == "Backspace"){
            if(0 < col && col <= width){
                col --;
            }
            let currentTile = document.getElementById(row.toString() + "-" + col.toString());
            currentTile.innerText = "";
        }
        else if (e.code == "Enter"){
            update();
            row += 1;
            col = 0;
        }
        if (!gameOver && row == height){
            gameOver = true;
            document.getElementById('answer').innerText = word;
        }
    })
}

function update(){
    let correct = 0;
    for (let c = 0; c < width; c++){
        let cuurentTile = document.getElementById(row.toString() + '-' + col.toString());
        let letter = currentTile.innerText

        if (word[c] == letter){
            currentTile.classList
        }
    }
}