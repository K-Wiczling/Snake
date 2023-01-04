import direction from '../global/direction';
export default class ControlsMenager {

  //touchStart: any = addEventListener()
  //touchEnd: any = addEventListener()
  currentDirection: direction = "left";

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

  emitDirection(newDirection: direction) {

    // add an appropriate event listener
    //obj.addEventListener('animalfound', (e) => console.log(e.detail.name);

  }
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