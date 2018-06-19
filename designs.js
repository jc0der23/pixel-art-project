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

makeGrid(width, height);
});

function makeGrid(width, height) {
    table.innerHTML = '';

    for (let row = 0; row < width; row++) {
        let newRow = table.insertRow();
  
        for (let cell = 0; cell < height; cell++) {

          let newCell = newRow.insertCell();
  
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
