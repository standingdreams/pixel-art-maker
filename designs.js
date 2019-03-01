// Select color input
const colorPicker = document.getElementById('colorPicker');
// Select size input
const gridHeight = document.getElementById('inputHeight');
const gridWidth = document.getElementById('inputWidth');
const pixelCanvas = document.getElementById('pixelCanvas');

// When size is submitted by the user, call makeGrid()

function makeGrid() {
  pixelCanvas.style.height = `${gridHeight.value}px`;
  pixelCanvas.style.width = `${gridWidth.value}px`;
  pixelCanvas.style.backgroundColor = `${colorPicker.value}`;
}


document.getElementById('sizePicker').addEventListener('submit', (e) => {
  e.preventDefault();
  makeGrid();
});