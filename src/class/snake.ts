import Point from './point';
export default class Snake {
  body: Array<Point> = [];

  constructor() {
  }
  move(directionPoint: Point) {
    const snakeFace: Point = this.body[0];
    snakeFace.addTo(directionPoint);
    this.body.pop();
    this.body.unshift(snakeFace);
  }
}