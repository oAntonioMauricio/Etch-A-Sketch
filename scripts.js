// select the html elements
let squaresContainer = document.querySelector("#squaresContainer")

let clearButton = document.querySelector("#clearButton");

let containerChildren = document.querySelector("#squaresContainer").children

let slider = document.getElementById("myRange");
let sliderValue = document.getElementById("sliderValue");

//detect mousedown on the container
let holdingMouse = false;

squaresContainer.addEventListener("mousedown", () => {
    holdingMouse = !holdingMouse
})

squaresContainer.addEventListener("mouseup", () => {
    holdingMouse = false;
})

// loop will create the squares
let squareArray = [];

let numberOfSquares = 16;

for (let i = 0; i < (numberOfSquares * numberOfSquares); i++) {
    squareArray.push(`square${i}`);
}

squareArray.forEach(square => {
    square = document.createElement("div");
    square.classList.add('square');
    square.style.cssText = `width: ${480 / numberOfSquares}px; height: ${480 / numberOfSquares}px`;
    square.addEventListener("mousemove", () => {
        if (holdingMouse) { square.classList.add("squareOn") }
    });
    squaresContainer.appendChild(square);
})

//add functionality to the buttons
clearButton.addEventListener("click", () => { Array.from(containerChildren).forEach(children => children.classList.remove("squareOn")) })

// add functionality to the slider
sliderValue.innerText = slider.value;

slider.oninput = function () {
    sliderValue.innerText = this.value;
    numberOfSquares = this.value;
    console.log(numberOfSquares);
}