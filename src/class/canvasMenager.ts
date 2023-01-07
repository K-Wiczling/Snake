import Point from "./point";

class CanvasMenager {
  canvas: any;
  canvasContext: any;
  canvasHolder: HTMLElement = document.createElement('div');

  resize: any = addEventListener("resize", () => {
    this.calculateCanvas(this.canvas);
  });
  width: number;
  height: number;
  gridSize: number = 15;

  gameWidth: number = 40;
  gameHeight: number = 60;

  colorClear: string = '#fff';
  colorMain: string = '#000';

  constructor(canvas: HTMLElement) {
    this.setupCanvas(canvas);
    this.calculateCanvas();

  }

  // Draw all the nessesery points on the canvas
  drawUpdate(points: Array<Point>): void {
    this.clearCanvas();
    this.useColorMain();
    for (const point of points) {
      this.drawSquare(point);
    }
  }
  // Cleaar canvas, to draw next update on the clean one
  clearCanvas() {
    this.canvasContext.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }

  // Change drawing color to the main
  useColorMain() {
    this.canvasContext.fillStyle = this.colorMain;
  }
  // Draw rect on the given position,
  // with width & height equal to the grid size
  drawSquare(p: Point) {
    const g = this.gridSize;
    this.canvasContext.fillRect(p.x * g, p.y * g, g, g);
    
  }
  // Calculate canvas dimentions & grid size base on the viewport 
  calculateCanvas(canvas? : any) {
    if( this.canvas === null || this.canvas === undefined){
      this.canvas = canvas;
    }
    // Get current canvasHolder dimentions
    const width = this.canvasHolder.clientWidth;
    const height = this.canvasHolder.clientHeight;
    
    // Tmp variables widht & height
    let w: number;
    let h: number;

    // Reverse game width & height depending on the available space
    if( (width/height) < 1 ){
      w = this.gameWidth;
      h = this.gameHeight;
    }else {
      w = this.gameHeight;
      h = this.gameWidth;
    } 
    this.gridSize = Math.floor(width / this.gameHeight);
    
    this.canvas.height = this.gridSize * h;
    this.canvas.width = this.gridSize * w;
  
    this.drawSquare(new Point( 0,0))
    this.drawSquare(new Point( 10,10))
    this.drawSquare(new Point( 20,20))
    this.drawSquare(new Point( 30,30))
    this.drawSquare(new Point( 39,39))


  }
  
  // Initialize canvas holder with the div element on the page
  // in which the canvas will be append in
  setupCanvas(canvasHolder: HTMLElement) {
    this.canvas = document.createElement('canvas');
    this.canvasContext = this.canvas.getContext("2d");
    this.canvasHolder = canvasHolder;
    this.createCanvas();
  }

  // Append the canvas in the canvasHolder
  createCanvas() {
    this.canvasHolder.appendChild(this.canvas);
    
  }

}
export default CanvasMenager;