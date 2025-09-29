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
var time = 0;

window.onload = function() {
    startGame();
    randomImg();
    //timer();

}

function randomImg() {
    let random = document.createElement("img");
    let randomnumber = Math.floor(Math.random() * ImgSet.length);
    random = randomnumber;
    document.getElementById("silueta").append(random);

    random.src = ImgList.shift() + ".png";
}

function startGame() {
    for (let r = 0; r < rows; r++){
        for (let c = 0; c < columns; c++) {
            //<img>
            let tile = document.createElement("img");
            tile.id = r.toString() + "-" + c.toString();
            tile.src = ImgList.shift() + ".png";
            document.getElementById("board").append(tile);
            //tile.addEventListener("click", compare);
            
        }
    }

}

//function compare() {
//    if (selectedImg == currentImg){
//        time += 1;
//    }
//    else{

//    }
//}

//function timer() {
//    time = document.querySelector("span");
//}

//function reiniciarJuego() {
//    document.getElementById("restart");
//}