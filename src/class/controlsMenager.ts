import direction from '../global/direction';
export default class ControlsMenager {


  currentDirection: direction = "left";
  constructor() {
    // const touchStart: any = addEventListener()
    // const touchEnd: any = addEventListener()
  }

  left = new CustomEvent('direction', {
    dir: ditection = 'left',
  });
  right = new CustomEvent('direction', {
    dir: ditection = 'right',
  });
  top = new CustomEvent('direction', {
    dir: ditection = 'top',
  });
  bottom = new CustomEvent('direction', {
    dir: ditection = 'bottom',
  });
  // Dispatch events base one the calculated input from touchscreen or keys pressed

  left() {
    this.dispatchEvent(left);
  }

  right() {
    this.dispatchEvent(right);

  }

  top() {
    this.dispatchEvent(top);
  }

  bottom() {
    this.dispatchEvent(bottom);
  }

  checkSwipe() {

  }
  checkKeys() {

  }
  emitKeyOk() {

  }

}