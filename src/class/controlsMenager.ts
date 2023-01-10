import { direction } from '../global/events';

class ControlsMenager {

  currentDirection: direction = "left";

  keysPress: any;
  touchStart: any;
  touchEnd: any;

  StartTouchPosX: any = null;
  StartTouchPosY: any = null;

  constructor() {
    this.init();
  }

  // Initialize 
  init() {
    this.keysPress = addEventListener('keyup', (e) => {
      this.checkKeys(e.code);
    });
    this.touchStart = addEventListener('touchstart', (e) => {
      this.checkSwipeStart(e);
    });
    this.touchEnd = addEventListener('touchend', (e) => {
      this.checkSwipeEnd(e);
    });
  }

  leftEvent = new CustomEvent('direction', {
    detail: {
      dir: 'left'
    }
  });
  rightEvent = new CustomEvent('direction', {
    detail: {
      dir: 'right'
    }
  });
  topEvent = new CustomEvent('direction', {
    detail: {
      dir: 'top'
    }
  });
  bottomEvent = new CustomEvent('direction', {
    detail: {
      dir: 'bottom'
    }
  });

  // Dispatch events base one the calculated input from touchscreen or keys pressed
  left() {
    dispatchEvent(this.leftEvent);
  }

  right() {
    dispatchEvent(this.rightEvent);

  }

  top() {
    dispatchEvent(this.topEvent);
  }

  bottom() {
    dispatchEvent(this.bottomEvent);
  }

  // Calculate swipeing
  //Get the strat position of the touch and store it to later use
  checkSwipeStart (e: any) {
    this.StartTouchPosX = e.touches[0].clientX;
    this.StartTouchPosY = e.touches[0].clientY;
  }
  //Get the end position of the touch
  checkSwipeEnd (e: any) {
    const x = e.changedTouches[0].clientX;
    const y = e.changedTouches[0].clientY;
    this.calcSwipeDirection(x - this.StartTouchPosX, y - this.StartTouchPosY);
  }
  //Calculate swipe direction
  calcSwipeDirection (x:number, y: number) {
    let nx = Math.abs(x);
    let ny = Math.abs(y);

    if (nx >= ny) {
      if (x > 0) {
        //Swipe right
        this.right();
      } else {
        //Swipe left
        this.left();
      }
    } else {
      if (y > 0) {
        //Swipe down
        this.bottom();
      } else {
        //Swipe top
        this.top();
      }
    }
  }


  // Check witch key has been pressed
  checkKeys(key: string) {
    switch (key) {
      case 'ArrowUp': this.top();
        break;
      case 'ArrowDown': this.bottom();
        break;
      case 'ArrowRight': this.right();
        break;
      case 'ArroeLeft': this.left();
        break;

      default: this.left();
        break;
    }
  }

}
export default ControlsMenager;