// main.js
// main.js


const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');

const width = canvas.width;
const height = canvas.height;
const blockSize = 50;

const Player = new Character(0, 0);
const Treasure = new TreasureClass();
Treasure.setRandomPosition(); // load the Treasure

// Iteration 1
function clearAll() {
  context.clearRect(0, 0, width, height);
}

function drawGrid() {
  // TODO: write the code of the function
  context.strokeStyle = 'black';
  context.lineWidth = 2;
  for (let i = 0; i <= width / blockSize; i++) {
    context.beginPath();
    context.moveTo(i * blockSize, 0);
    context.lineTo(i * blockSize, width);
    context.closePath();
    context.stroke();
  }
  for (let i = 0; i <= height / blockSize; i++) {
    context.beginPath();
    context.moveTo(0, i * blockSize);
    context.lineTo(height, i * blockSize);
    context.closePath();
    context.stroke();
  }
}

function drawPlayer() {
  context.drawImage(Player.image, Player.col, Player.row);
  Player.image.addEventListener('load', () => {
  context.drawImage(Player.image, Player.col, Player.row);
 });
}

function drawTreasure() {
  context.drawImage(Treasure.image, Treasure.col, Treasure.row, 50, 50);
  Treasure.image.addEventListener('load', () => {
    context.drawImage(Treasure.image, Treasure.col, Treasure.row, 50, 50);
    console.log('test');
  });
}

function drawEverything() {
  clearAll();
  drawGrid();
  drawPlayer();
  drawTreasure();
  // drawTreasure()
}

drawEverything();

window.addEventListener('keydown', (event) => {
  // Stop the default behavior (moving the screen to the left/up/right/down)
  event.preventDefault();

  // React based on the key pressed

  switch (event.keyCode) {
    case 37: // arrow
    case 65: // A
      Player.moveLeft();

      drawEverything();
      console.log(Player.col, Player.row);
      break;

    case 38: // arrow
    case 87: // W
      Player.moveUp();
      console.log(Player.col, Player.row);
      drawEverything();
      //console.log('up');
      break;

    case 39: // arrow
    case 68: // D
      Player.moveRight();
      console.log(Player.col, Player.row);
      drawEverything();
      //console.log('right');
      break;

    case 40: // arrow
    case 83: // S
      Player.moveDown();
      console.log(Player.col, Player.row);
      drawEverything();
      break;

    default:
      drawEverything();
      break;
  }
});
