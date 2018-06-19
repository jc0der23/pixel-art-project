// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

const colorPicker =  document.querySelector('#colorPicker');
const sizePicker = document.querySelector('#sizePicker');
const table = document.querySelector('#pixelCanvas');

sizePicker.addEventListener('submit', (event) => {
    event.preventDefault();

const width = document.querySelector('#inputWidth').value;
const height = document.querySelector('#inputHeight').value;

makeGrid(height, width);
});

function makeGrid(height, width) {
    table.innerHTML = '';

    for (let cell = 0; cell < width; cell++) {
        let newCell = table.insertCell();
  
        for (let row = 0; row < height; row++) {

          let newRow = newCell.insertRow();
  
          newCell.onclick = changeColor;
          newCell.ondblclick = clearColor;
          
        }
    }
}

function changeColor() {
    this.style.background = colorPicker.value;
  }

  function clearColor() {
    this.style.background = '#fff';
  }
