import Point from "./point";

class CanvasMenager {
  
  // dimentions of the viewport
  width = document.documentElement.clientWidth;
  height = document.documentElement.clientHeight;

  canvas = document.createElement('canvas');
  canvasHolder: any ;

  viewportWidth: number = document.documentElement.clientWidth;
  viewportHeight: number = document.documentElement.clientHeight;
  gridSize: number = 1;
  
  constructor( ) {
    
  }

  drawUpdate(points: Array<Point>): void {

  }
  setupCanvas(canvas: HTMLElement) {
    this.canvasHolder = canvas;
    this.createCanvas();
  }
  clearCanvas() {

  }
  // Calculate canvas dimentions & grid size base on the viewport 
  calculateCanvas () {
  }

  createCanvas() {
    this.canvasHolder.appendChild(this.canvas);
    let ctx: any  = this.canvas.getContext("2d");
    ctx.moveTo(0, 0);
    ctx.lineTo(150, 100);
    ctx.stroke();
  }

}
export default CanvasMenager;