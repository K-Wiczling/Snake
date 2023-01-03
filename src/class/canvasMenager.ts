import Point from "./point";
export default class CanvasMenager {
  viewportWidth: number;
  viewportHeight: number = 0;
  gridSize: number = 0;
  constructor(viewportWidth: number, viewportHeight: number, gridSize: number) {
    this.viewportWidth = viewportWidth;
    this.viewportHeight = viewportHeight;
    this.gridSize = gridSize;
  }

  drawUpdate(points: Array<Point>): void {

  }
  setupCanvas() {

  }
  clearCanvas() {

  }

}