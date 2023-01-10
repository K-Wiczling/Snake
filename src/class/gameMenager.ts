import Snake from "./snake";
import CanvasMenager from "./canvasMenager";
import ControlsMenager from "./controlsMenager";
import Food from "./food";
import Score from "./score";

import { direction } from "@/global/events";

// Control the whole game
export default class GameMenager {

  snake: Snake;
  food: Food;
  canvas: CanvasMenager;
  controls: ControlsMenager;

  // Initialize score here so it can be accesed in the rendering of the component
  score: Score = new Score();

  // Simple Variables
  updateing: any;
  controlsListener: any;
  gameSize: number = 40;

  // Initialize everything
  init(canvasRef: any) {

    this.canvas = new CanvasMenager(canvasRef, this.gameSize);
    this.controls = new ControlsMenager();
    this.snake = new Snake(this.gameSize)
    this.food = new Food(this.gameSize);
    this.score = new Score();

    // Listens to the controls to chagne direction of the snake
    this.controlsListener = addEventListener('direction', (e) => {
      const ev = e as CustomEvent;
      this.snake.changeDirection(ev.detail.dir);
    });

    this.setup();
  }

  // Reset or setup all systems
  setup() {
    clearInterval(this.updateing);
    this.snake.setup();
    this.food.generatePosition();
    this.score.reset();
  }
  gameLoop() {
    if (this.snake.isSnakeAlive) {
      this.snake.update()
      this.canvas.drawUpdate(this.snake.body, this.food.position);

      if (this.snake.body[0].isEquel(this.food.position)) {
        this.score.addPoints();
        this.food.generatePosition();
        this.snake.hungry();
      }
    }
  }

  // Start playing the game
  start() {
    this.setup();
    this.updateing = setInterval(() => { this.gameLoop() }, 1000 / 4);
  }

  // Call whene Snake will hit the wall or tail
  endGame() {
    clearInterval(this.updateing);
  }


}