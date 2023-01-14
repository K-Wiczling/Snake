import Point from './helpers/point';
import { direction } from '../global/events';
export default class Snake {

  body: Array<Point> = [];
  currentDirection: direction = 'left';
  gameSize: number = 40;
  isSnakeAlive: boolean = false;
  toGrow: boolean = false;

  constructor(gameSize: number) {

    this.gameSize = gameSize;
    this.setup();
  }

  // Setup function
  setup() {

    // Clear snake
    this.body = [];

    // Initial body of the snake
    this.body.push(new Point(20, 20)); //Head
    this.body.push(new Point(21, 20));
    this.body.push(new Point(22, 20));
    this.body.push(new Point(23, 20));

    this.currentDirection = 'left';
  }
  
  // Increas size of the snake by one 
  eat() {
    const newHead = new Point(this.body[0].x, this.body[0].y);
    newHead.addTo(this.createDirection());
    this.body.unshift(newHead);
    this.toGrow = false;
  }

  // Set toGrow true for snake to grow on the next  update
  hungry() {
    this.toGrow = true;
  }
  // Change movement direction of the snake accordingly to the input
  changeDirection(dir: direction) {
    if (dir === 'left' && this.currentDirection === 'right')
      return
    if (dir === 'right' && this.currentDirection === 'left')
      return
    if (dir === 'top' && this.currentDirection === 'bottom')
      return
    if (dir === 'bottom' && this.currentDirection === 'top')
      return

    this.currentDirection = dir;
  }

  // Check if snake run in to the wall
  checkForWalls() {
    if (this.body[0].x < 0 || this.body[0].x > this.gameSize || this.body[0].y > this.gameSize || this.body[0].y < 0)
      this.isSnakeAlive = false;
  }

  // Check if snake hit his tail
  checkForTail() {

    
    for (let i: number = 1; i <= (this.body.length - 1); i++) {
      if (this.body[0].isEquel(this.body[i])) 
        this.isSnakeAlive = false;
    }

  }
  // Move snake in the currentDirection by one & chack for colisions
  update() {
    if (this.toGrow) {
      this.eat()
    } else {
      this.move();
    }
    this.checkForTail();
    this.checkForWalls();
  }

  // Move snake by one grid pice
  move() {
    let directionPoint = this.createDirection();

    const snakeFace: Point = new Point(this.body[0].x, this.body[0].y)

    snakeFace.addTo(directionPoint);


    // Iterate through snake body form the back
    // and change positon of each body part to the next one
    for (let i: number = this.body.length - 1; i <= 1; i--) {
      this.body[i] = Object.assign(this.body[i - 1]);
    }
    this.body.pop();
    this.body.unshift(snakeFace);
  }
  // Create direction point base on currntDirectio
  createDirection(): Point {
    let directionPoint: Point = new Point(0, 0);

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
    return directionPoint;
  }
}