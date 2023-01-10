class Score {
  score: number = 0;
  scoreMulitplayer: number = 1;
  levelingSchematics: Array < number >= [5, 10, 15, 20, 30, 40, 60, 80, 90, 100];

  addPoints() {
    this.points += (this.points * this.pointsMulitplayer);
    levelUp();
  }
  reset() {
    this.score = 0;
    this.scoreMulitplayer = 1;
  }
  levelUp() {
    if (this.score >= (this.levelingSchematics[this.scoreMulitplayer-1]))
      this.levelingSchematics++
  }
}