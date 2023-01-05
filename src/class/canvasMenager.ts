import Point from "./point";

class CanvasMenager {
  
  viewportWidth: number = 0;
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
  // Calculate canvas dimentions & grid size base on the viewport 
  calculateCanvas () {
    
  }

}
export default Point;