var images = ["botella", "concha", "concha2", "delfin", "estrella", "medusa", "perla", "pez"];

var rows = 2;
var columns = 4;

var selectedImg;
var currentImg;
var addImg = 0;

var seconds = 30;
var score = 0;

window.onload = function() {
    randomImg();
    startGame();
    timer();
}

//Cambia la silueta al azar
function randomImg() {
    var image = document.getElementById("image");
    var randomImage = Math.floor(Math.random()* images.length);
    image.src = "./images/" + images[randomImage] + ".png";
}

//Agrega todas las imágenes en el tablero
function startGame() {

    for (let r = 0; r < rows; r++){
        for (let c = 0; c < columns; c++) {

            let pieceImg = images[addImg];
            addImg ++;

            //<img id= 0-0>
            let tile = document.createElement("img");
            tile.id = r.toString() + "-" + c.toString(); //Esto es para saber qué imagen fue clickeada
            tile.src = "./images/" + pieceImg + ".png";
            document.getElementById("board").append(tile);
            tile.addEventListener("click", compare);
            
        }
    }

    console.log("Juego iniciado correctamente");
}

// Se compara si la silueta y la imagen seleccionada son iguales
function compare() {

  /*if (selectedImg.src == currentImg.src){
        score += 10;
        document.getElementById("score").innerHTML = score;
        var audioCorrecto = new Audio("./beep-6-96243.mp3");
        audioCorrecto.play();
    }
    else { 
        var audioIncorrecto = new Audio("./error-002-337159.mp3");
        audioIncorrecto.play();
    }

    setTimeout(wait, 1000);*/

    randomImg();
}

//Temporizador
function timer() {
    let countdown = document.getElementById("countdown");

    if (seconds == 0) {
        alert("Time out!");
        return;
    }
    else {
        countdown.innerHTML = seconds;
        seconds--;
        setTimeout(timer, 1000); //1000 or 1E3
    }

    if (seconds < 10 && seconds >= 0) {
        countdown.innerHTML = "0" + seconds;
    }
}

function reload() {
    seconds = 30;
    score = 0;
    //document.querySelector(".score").textContent = "0";
}