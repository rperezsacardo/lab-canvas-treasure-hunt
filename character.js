class Character {
  constructor(col, row) {
    this.col = col;
    this.row = row;
    this.image = new Image();
    this.image.src = 'images/character-down.png';
  }

  moveUp() {
    this.image.src = 'images/character-up.png'
    if (this.row > 0) {
      this.row -= 50;
    } else {
      this.row;
    }
  }
  moveDown() {
    this.image.src = 'images/character-down.png'
    if (this.row < width - blockSize) {
      this.row += 50;
    } else {
      this.row;
    }
  }
  moveRight() {
    this.image.src = 'images/character-right.png'
    
    if (this.col < height - blockSize) {
      this.col += 50;
    } else {
      this.col;
    }
  }

  moveLeft() {
    this.image.src = 'images/character-left.png'
    if (this.col > 0) {
      this.col -= 50;
    } else {
      this.col;
    }
  }
}
