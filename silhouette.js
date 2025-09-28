var ImgList = [
    "botella",
    "concha",
    "concha2",
    "delfin",
    "estrella",
    "medusa",
    "perla",
    "pez"
]

var ImgSet;
var board = [];
var rows = 2;
var columns = 4;

var selectedImg;
var currentImg
var time;

window.onload = function() {
    startGame();
    randomImg();
    //timer();

}

function randomImg() {
    let random = Math.floor(Math.random() * ImgSet.length)
}

function startGame() {
    for (let r = 0; r < rows; r++){
        for (let c = 0; r < columns; c++) {
            let image = document.createElement("image");
            image.src = ImgList + ".jpg";
            document.getElementById("board");

            image.addEventListener("click", selectedImg);
        }
    }

}

function compare() {
    if (selectedImg == currentImg){
        time += 1;
    }
    else{

    }
}

//function timer() {
//    document.querySelector("span");
//}

//function reiniciarJuego() {
//    document.getElementById("restart");
//}