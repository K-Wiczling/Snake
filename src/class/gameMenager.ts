import Snake from "./snake";
import CanvasMenager from "./canvasMenager";
import ControlsMenager from "./controlsMenager";
import { direction } from "@/global/events";
import Food from "./food";
import Points from "./points";

// Control the whole game
export default class GameMenager {
  snake: Snake;
  food: Food = new Food();
  canvas: CanvasMenager;
  controls: ControlsMenager = new ControlsMenager();
  updateing: any;
  controlsListener: any;
  gameSize: number = 40;
  points: Points = new Points();
  
  constructor() {
    this.controlsListener = addEventListener('direction', (e) => {
      const ev = e as CustomEvent;
      this.snake.changeDirection(ev.detail.dir);
    });
  }
  gameLoop() {
    if (this.snake.isSnakeAlive) {
      this.snake.update()
      this.canvas.drawUpdate(this.snake.body, this.food.position);
      
      if (this.snake.body[0].isEquel(this.food.position)) {
        this.points.addPoints();
        this.food.generatePosition(this.gameSize);
        this.snake.hungry();
      }
    }
  }

  setup() {
    this.updateing = setInterval(() => { this.gameLoop() }, 1000 / 2);
  }
  endGame() {
    clearInterval(this.updateing);
  }
  init(canvasRef: any) {
    this.canvas = new CanvasMenager(canvasRef, this.gameSize);
    this.snake = new Snake(this.gameSize);
  }

}