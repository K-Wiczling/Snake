import Point from "./helpers/point";
import Color from "./helpers/color";
class CanvasMenager {
  canvas: any;
  canvasContext: any;
  canvasHolder: HTMLElement = document.createElement('div');

  resize: any;
  width: number;
  height: number;
  gridSize: number = 15;

  gameSize: number = 40;

  // colorBackground: Color = new Color(255,255,255);
  // colorMain: Color = new Color(0,0,0);
  colorBackground: Color = new Color(93,50,0);
  colorMain: Color = new Color(30,225,0);

  constructor(canvas: HTMLElement, gameSize: number) {
    this.resize = addEventListener("resize", () => {
      this.calculateCanvas(this.canvas);
    });

    this.gameSize = gameSize;
    this.setupCanvas(canvas);
    this.calculateCanvas();
  }

  // Draw all the nessesery points on the canvas
  drawUpdate(snake: Array<Point>, food: Point): void {
    this.clearCanvas();
    this.useColorMain();
    this.drawSquare(food)
    for (const point of snake) {
      this.drawSquare(point);
    }
  }
  // Cleaar canvas, to draw next update on the clean one
  clearCanvas() {
    this.useColorBakcground();
    this.canvasContext.fillRect(0, 0, this.canvas.width, this.canvas.height);
  }

  // Change drawing color to the background 
  useColorBakcground(){
    this.canvasContext.fillStyle = this.colorBackground.getColorHash();
    
  }
  // Change drawing color to the main
  useColorMain() {
    this.canvasContext.fillStyle = this.colorMain.getColorHash();
    this.canvasContext.fillStyle = '#00ff00';
    
  }
  // Draw rect on the given position,
  // with width & height equal to the grid size
  drawSquare(p: Point) {
    const g = this.gridSize;
    this.canvasContext.fillRect(p.x * g, p.y * g, g, g);

  }
  // Calculate canvas dimentions & grid size base on the viewport 
  calculateCanvas(canvas?: any) {
    if (this.canvas === null || this.canvas === undefined) {
      this.canvas = canvas;
    }
    // Get current canvasHolder dimentions
    const width = this.canvasHolder.clientWidth;
    const height = this.canvasHolder.clientHeight;

    // Tmp variables widht & height
    let w: number;
    let h: number;

    // Chack Ratio of the canvasHolder and set grid size accordingly
    if ((width / height) < 1) {
      this.gridSize = Math.floor(width / this.gameSize);
    } else {
      this.gridSize = Math.floor(height / this.gameSize);
    }

    let tmpSize = (this.gridSize * this.gameSize) - 1
    this.canvas.height = tmpSize;
    this.canvas.width = tmpSize;

  }

  // Initialize canvas holder with the div element on the page
  // in which the canvas will be append in
  setupCanvas(canvasHolder: HTMLElement) {
    this.canvas = document.createElement('canvas');
    this.canvasContext = this.canvas.getContext("2d");
    this.canvasHolder = canvasHolder;
    this.createCanvas();
  }
  setCanvasColors(main: Color, background: Color) {
    this.colorMain = main;
    this.colorBackground = background;
  }

  // Append the canvas in the canvasHolder
  createCanvas() {
    this.canvasHolder.appendChild(this.canvas);
  }

}
export default CanvasMenager;