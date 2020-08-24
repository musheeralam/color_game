var numSquares = 6;
var colors = [];
var pickedColor;
var squares =document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("message");
var h1 = document.querySelector("h1");
var modeButton = document.querySelectorAll(".mode");
var resetButton=document.querySelector("#reset");

init();

function init(){
    //mode buttons event listener
    setupModeButtons();
    //square setup
    setupSquares();
    //reset screen
    reset();
}

function setupModeButtons(){
    for(var i=0;i<modeButton.length;i++){
        modeButton[i].addEventListener("click",function(){
            modeButton[0].classList.remove("selected");
            modeButton[1].classList.remove("selected");
            this.classList.add("selected");
            if(this.textContent === "Easy"){
                numSquares = 3;
            }else{
                numSquares = 6;
            }
            reset();
        });
    }
}

function setupSquares(){
    for(var i=0;i < squares.length;i++){
        squares[i].addEventListener("click",function(){
            var clickedColor = this.style.backgroundColor;
            if(clickedColor === pickedColor){
                messageDisplay.textContent="Correct";
                changeColors(clickedColor);
                h1.style.backgroundColor = clickedColor;
                resetButton.textContent="Play Again ?";
            }else{
                this.style.backgroundColor ="#232323";
                messageDisplay.textContent = "Try Again!!";
            }
         });
    }
}
function reset(){
    colors =generateRandomColors(numSquares);
     pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    resetButton.textContent = "New Colors";
    messageDisplay.textContent = "";
    for(var i=0;i<squares.length;i++){
        if(colors[i]){
            squares[i].style.display = "block";
            squares[i].style.backgroundColor=colors[i];
        }else{
            squares[i].style.display ="none";
        }
    }
    h1.style.backgroundColor ="steelblue"
}

resetButton.addEventListener("click",function(){
   reset();
});

function changeColors(color){
    for(var i=0;i < squares.length; i++){
        squares[i].style.backgroundColor = color;
    }
}

function pickColor(){
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num){
    arr = [];
    for(var i=0;i< num;i++){
        arr.push(ramdomColor());
    }
    return arr;
}

function ramdomColor(){
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    "rgb(r, g, b)"
    return "rgb("+r+", "+g+", "+b+")";
}

