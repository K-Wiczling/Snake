import Snake from "./snake";
import CanvasMenager from "./canvasMenager";
import ControlsMenager from "./controlsMenager";

// Control the whole game
export default class GameMenager {
  snake: Snake = new Snake();
  canvas: CanvasMenager = new CanvasMenager(1, 1, 1);
  controls: ControlsMenager = new ControlsMenager();
  updateing: any;

  constructor() {
    controls.addEventListener('direction', this.snake.move(e.dir.direcrion));
  }
  gameLoop() {}

  setup() {
    this.updateing = setInterval(gameLoop, 1000 / 30);
  }
  endGame() {
    clearInterval(this.updatein);
  }
}