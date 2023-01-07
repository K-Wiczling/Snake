import {direction} from '../global/events';
export default class ControlsMenager {


  currentDirection: direction = "left";
  constructor() {
    // const touchStart: any = addEventListener()
    // const touchEnd: any = addEventListener()
    // this.left();
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

  checkSwipe() {

  }
  checkKeys() {

  }
  emitKeyOk() {

  }

}