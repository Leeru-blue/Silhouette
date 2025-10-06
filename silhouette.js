var images = ["botella", "concha", "concha2", "delfin", "estrella", "medusa", "perla", "pez"];

var rows = 2;
var columns = 4;

var selectedImg;
var currentImg;

var time = 0;
var score = 0;

window.onload = function() {
    randomImg();
    startGame();
    //timer();

}

const randomImage = Math.floor(Math.random()* images.length);

//Aparece una silueta al azar
function randomImg() {   
    const image = document.getElementById("image");
    image.src = images[randomImage] + ".png";
}

//Aparecen todas las imágenes disponibles
function startGame() {
    for (let r = 0; r < rows; r++){

        let row = [];

        for (let c = 0; c < columns; c++) {

            let pieceImg = images.pop();
            row.push(pieceImg);
            
            //<img>
            let tile = document.createElement("img");
            tile.src = pieceImg + ".png";
            document.getElementById("board").append(tile);
            tile.addEventListener("click", compare);
            
        }
    }

}

function compare() {

    currentImg;
    selectedImg;

    if (selectedImg.src == currentImg.src){
        score += 10;
        let audioCorrecto = new Audio("");
    }
    else { 
        let audioIncorrecto = new Audio("");
    }
}

function timer() {
    time = document.querySelector("span");
}

function reiniciar() {
    document.getElementById("reiniciar");
}