class Score {
  score: number = 0;
  levelScore: number = 0;
  scorePerEat: number = 1;

  // Add points to the score
  addPoints() {
    if(this.score === 0 ) {
      this.score = 1;
      this.levelScore = 1;
      return;
    }

    this.score += this.scorePerEat;
    this.levelScore += this.scorePerEat;

    this.levelUp();
  }

  // Set values to the initial
  reset() {
    this.score = 0;
    this.levelScore = 0;
    this.scorePerEat = 1;
  }

  // Check if player get enough points to speed up
  levelUp() {
    if (this.levelScore >= this.getNextPointToLevelUp(this.scorePerEat +4)){
      this.scorePerEat++;
      this.levelScore = 0;
    }
  }

  // Use Fibonacii sequence to define next points level to progress the game 
  getNextPointToLevelUp(n: number): any {

    if(n === 0 || n === 1) {
      return n;
    }    
    let sum = 0;
    let fib = 0;
    let fib2 = 1;
    for(let i: number = 1; i < n; i++) {
      sum = fib + fib2;
      fib = fib2;
      fib2 = sum;

    }
    return sum;
  }
}
export default Score;