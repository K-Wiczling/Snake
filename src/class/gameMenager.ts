import Snake from "./snake";
import CanvasMenager from "./canvasMenager";
import ControlsMenager from "./controlsMenager";

// Control the whole game
export default class GameMenager {
  snake: Snake = new Snake();
  canvas: CanvasMenager = new CanvasMenager(1,1,1);
  controls: ControlsMenager = new ControlsMenager();
  
  constructor() {
    controls.addEventListener('direction', (e) => console.log(e));

  }
}