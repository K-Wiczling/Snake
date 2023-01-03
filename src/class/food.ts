class Food {
      position: Point = new Point(0, 0);

  constructor() {
  }
  generatePosition(xRange, yRange) {
    let x = Math.floor(Math.random() * xRange);
    let y = Math.floor(Math.random() * yRange);
    this.position.changePoint(x, y);
  }
}