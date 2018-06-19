// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

const colorPicker =  document.getElementById('#colorPicker');
const sizePicker = document.getElementById('#sizePicker');
const table = document.getElementById('#pixelCanvas');

sizePicker.addEventListener('submit', (event) => {
    event.preventDefault();

const width = document.getElementById('#inputWidth').value;
const height = document.getElementById('#inputHeight').value;

makeGrid(width, height);
});

function makeGrid(width, height) {
    table.innerHTML = '';

    for (let row = 0; row < width; row++) {
        let newRow = table.insertRow();
  
        for (let cell = 0; cell < height; cell++) {

          let newCell = newRow.insertCell();
  
          newCell.onclick = changeColor;
          
        }
    }
}

function changeColor() {
    this.style.background = colorPicker.value;
  }
