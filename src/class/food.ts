import Point from "./helpers/point";
export default class Food {
      position: Point = new Point(15, 20);

  constructor() {
  }
  generatePosition(range: number) {
    let x = Math.floor(Math.random());
    let y = Math.floor(Math.random() );
    this.position.changePoint(x, y);
  }
}