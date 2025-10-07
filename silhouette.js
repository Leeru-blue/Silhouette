var images = ["botella", "concha", "concha2", "delfin", "estrella", "medusa", "perla", "pez"];

var rows = 2;
var columns = 4;

var addImg = 0;
var selectedImg;
var currentImg;

var time = 0;
var score = 0;

window.onload = function() {
    randomImg();
    startGame();
    //timer();
    //reload();
}

//Aparece una silueta al azar
function randomImg() {
    var image = document.getElementById("image");
    var randomImage = Math.floor(Math.random()* images.length);
    image.src = images[randomImage] + ".png";
    console.log("Hiciste click a una de las imágenes");
}

//Aparecen todas las imágenes en el tablero
function startGame() {
    for (let r = 0; r < rows; r++){
        for (let c = 0; c < columns; c++) {

            let pieceImg = images[addImg];
            addImg ++;

            //<img>
            let tile = document.createElement("img");
            tile.src = pieceImg + ".png";
            document.getElementById("board").append(tile);
            tile.addEventListener("click", compare);
            
        }
    }
}

// Se compara si la silueta y la imagen seleccionada son iguales
function compare() {

/*  if (selectedImg.src == currentImg.src){
        score += 10;
        document.getElementById("score").innerHTML = score;
        var audioCorrecto = new Audio("./beep-6-96243.mp3");
        audioCorrecto.play();
    }
    else { 
        var audioIncorrecto = new Audio("./error-002-337159.mp3");
        audioIncorrecto.play();
    }

    setTimeout(wait, 1000); */

    randomImg();
}

function timer() {
    time = document.querySelector("span");
}

function reload() {
    document.getElementById("reiniciar");
}