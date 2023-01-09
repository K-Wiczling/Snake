class Points {
  points: number = 0;
  pointsMulitplayer: number = 1;
  
  addPoints(){
    this.points += (this.points*this.pointsMulitplayer);
  }
}