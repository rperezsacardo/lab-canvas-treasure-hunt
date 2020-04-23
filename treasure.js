
class TreasureClass {
  constructor() {
    this.col;
    this.row;
    this.image = new Image();
    this.image.src = 'images/treasure.png';
  }
  setRandomPosition() {
    //Random Number to Collum
    let randomNumCol = Math.floor(Math.random() * (width / blockSize) + 1 / (width / blockSize));
    this.col = randomNumCol * 50;
    //Random Number to Collum
    let randomNumRow = Math.floor(Math.random() * (height / blockSize) + 1 / (height / blockSize));
    this.row = randomNumRow * 50;
  }
}
