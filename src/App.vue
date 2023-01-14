<template>
  <div ref="canvasHolder" id="canvasHolder">
    <ScoreDispaly :score="gm.score.score" :lvl="gm.score.scorePerEat" />
  </div>
  <gameModal @startGame="startGame()" v-if="!gameRun" />
</template>

<script lang="ts">

import { defineComponent } from "vue";
import GameMenager from './class/gameMenager';
import ScoreDispaly from "./components/scoreDispaly.vue";
import gameModal from "./components/gameModal.vue";

let gmL: any;
export default defineComponent({
  name: 'App',
  components: {
    ScoreDispaly,
    gameModal
  },
  data() {
    return {
      gm: new GameMenager(),
      gameRun: false
    }
  },
  methods: {
    startGame() {
      this.gameRun = this.gm.snake.isSnakeAlive;
      this.gm.start();
    }
  },
  mounted() {
    this.gm.init(this.$refs.canvasHolder);
    gmL = addEventListener('endGame', () => {
      this.gameRun = this.gm.snake.isSnakeAlive;
    });
  }
})
</script>

<style>
* {
  padding: 0;
  margin: 0;
  outline: 0;
}

canvas {
  border: 1px solid black;
  margin: auto;
}

#canvasHolder {
  margin: auto;
  width: 90vw;
  height: 90vh;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
