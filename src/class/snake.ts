import Point from './point';
import {direction} from '../global/events';
export default class Snake {
  
  body: Array < Point > = [];

  constructor() {
    this.body[0] = new Point(1,1);
    let x : direction = 'left';
    this.move(x)
  }
  move(dir: direction) {
    let directionPoint: Point;
    directionPoint = new Point(1, 1);
    
    // Create direction point base on the input 
    switch (dir) {
      case 'top':
        //direcrionPoint = new Point();
        break;
      case 'bottom':
        //direcrionPoint = new Point();

        break;
      case 'right':
        //direcrionPoint = new Point();

        break;
      case 'left':
        //direcrionPoint = new Point();

        break;

    }
    // Move snake by one grid pice
    const snakeFace: Point = this.body[0];
    // snakeFace.addTo(directionPoint);
    this.body[0].addTo(directionPoint);

    this.body.pop();
    this.body.unshift(snakeFace);
    
  }
}