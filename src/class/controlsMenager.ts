import { direction } from '../global/events';

class ControlsMenager {

  currentDirection: direction = "left";
  keysPress: any = addEventListener('keyup', (e) => {
    this.checkKeys(e);
  });
  touchStart: any = addEventListener('touchstart', (e) => {
    this.chceckSwipeStart(e);
  });
  touchEnd: any = addEventListener('touchend', (e) => {
    this.checkSwipeEnd(e);
  });
  constructor() {
    // const touchStart: any = addEventListener()
    // const touchEnd: any = addEventListener()

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

  checkSwipeStart() {

  }
  checkSwipeEnd() {
    
  }
  checkKeys() {

  }
  emitKeyOk() {

  }

}
export default ControlsMenager;