import Snake from "./snake";
import CanvasMenager from "./canvasMenager";
import ControlsMenager from "./controlsMenager";

// Control the whole game
export default class GameMenager {
  snake: Snake = new Snake();
  canvas: CanvasMenager;
  controls: ControlsMenager = new ControlsMenager();
  updateing: any;
  controlsListener: any;

  constructor() {
    
    this.controlsListener = addEventListener('direction', (e) => {
      const ev = e as CustomEvent;
      
      this.snake.move(ev.detail.dir);
    });

  }
  gameLoop() { }
  
  setup() {
    this.updateing = setInterval(this.gameLoop, 1000 / 30);
  }
  endGame() {
    clearInterval(this.updateing);
  }
  init(canvasRef: any) {
    this.canvas = new CanvasMenager();
    this.canvas.setupCanvas(canvasRef);
  }
}