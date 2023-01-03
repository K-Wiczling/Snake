export default class Point {
  x: number;
  y: number;
  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
  isEquel(point: Point): boolean {
    if (this.x === point.x && this.y === point.y) {
      return true
    }
    return false;
  }
  addTo(addingPoint: Point) {
    this.x += addingPoint.x;
    this.y += addingPoint.y;
  }
  changePoint(x: number, y: number) {
    this.x = y;
    this.y = y;
  }
}