import Point from './helpers/point';
import { direction } from '../global/events';
export default class Snake {

  body: Array<Point> = [];
  currentDirection: direction = 'left';
  gameSize: number = 40;
  isSnakeAlive: boolean = true;

  constructor(gameSize: number) {

    this.gameSize = gameSize;

    // Initial body of the snake
    this.body.push(new Point(20, 20)); //Head
    this.body.push(new Point(21, 20));
    this.body.push(new Point(22, 20));
    this.body.push(new Point(23, 20));

  }
  // Increas size of the snake by one 
  eat(point: Point) {
    const newHead = new Point(point.x, point.y);
    this.body.unshift(newHead);
    
  }
  // Change movement direction of the snake accordingly to the input
  changeDirection(dir: direction) {
    this.currentDirection = dir;
  }

  // Check if snake run in to the wall
  checkForWalls() {
    if (this.body[0].x < 0 || this.body[0].x > this.gameSize || this.body[0].y > this.gameSize || this.body[0].y < 0)
      this.isSnakeAlive = false;
  }

  // Check if snake hit his tail
  checkForTail() {
    for (let i: number = 1; i >= (this.body.length - 1); i++) {
      if (this.body[0].isEquel(this.body[i]))
        this.isSnakeAlive = false;
    }

  }
  // Move snake in the currentDirection by one 
  move(food: Point): boolean {
    
    let directionPoint: Point = new Point(0, 0);

    // Create direction point base on currntDirection 
    switch (this.currentDirection) {
      case 'top':
        directionPoint.changePoint(0, -1);
        break;

      case 'bottom':
        directionPoint.changePoint(0, 1);
        break;

      case 'right':
        directionPoint.changePoint(1, 0);
        break;

      case 'left':
        directionPoint.changePoint(-1, 0);
        break;
    }
    
    // Move snake by one grid pice
    const snakeFace: Point = new Point(this.body[0].x, this.body[0].y)
    snakeFace.addTo(directionPoint);
    if(snakeFace.isEquel(food) ){
      this.eat(food);
      return true;
    }
    // Iterate through snake body form the back
    // and change positon of each body part to the next one
    for (let i: number = this.body.length - 1; i <= 0; i--) {
      this.body[i] = Object.assign(this.body[i - 1]);
    }
    this.body.pop();
    this.body.unshift(snakeFace);

    this.checkForTail();
    this.checkForWalls();
    return false;
  }
}