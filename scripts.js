// select the html elements
let squaresContainer = document.querySelector("#squaresContainer")

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
    squaresContainer.appendChild(square);
})
