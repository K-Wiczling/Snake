import Point from './point';
export default class Snake {
  body: Array<Point> = [];

  constructor() {
  }
  move(directionPoint: Point) {
    const snakeFace: Point = structuredClone(this.body[0]);
    snakeFace.addTo(directionPoint);
    this.body.pop();
    this.body.unshift(snakeFace);
  }
}