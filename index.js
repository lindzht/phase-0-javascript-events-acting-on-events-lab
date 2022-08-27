// Your code here
const dodger = document.getElementById("dodger");

dodger.style.backgroundColor = "#FF69B4";
// dodger.style.left = "0px";
// dodger.style.bottom = "0px";

function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
    if (left > 0) {
      dodger.style.left = `${left - 1}px`;
    }
  };

function moveDodgerRight (){
    const currentPosition = dodger.style.left.replace("px", "");
    const moveAwayFromLeft = parseInt(currentPosition, 10);
    if (moveAwayFromLeft < 360){
        dodger.style.left = `${moveAwayFromLeft + 1}px`;
    }
};

document.addEventListener("keydown", function(e){
    if (e.key === "ArrowLeft"){
        moveDodgerLeft();
    } else if (e.key === "ArrowRight"){
        moveDodgerRight();
    }
});


