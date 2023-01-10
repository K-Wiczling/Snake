export default class Point {
  x: number;
  y: number;
  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  // Check if this point is eaquel to one passed in the argument
  isEquel(point: Point): boolean {
    if (this.x === point.x && this.y === point.y) {
      return true
    }
    return false;
  }

  // Add argumented point to this one
  addTo(addingPoint: Point) {
    this.x += addingPoint.x;
    this.y += addingPoint.y;
  }

  // Change values of the x & y based on the arguments
  changePoint(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
}