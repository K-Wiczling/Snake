<template>
  <div ref="canvasHolder" id="canvasHolder">
    <ScoreDispaly :score="gm.score.score" :lvl="gm.score.scorePerEat" />
  </div>
  <gameModal @startGame="startGame()" v-if="!gameRun" :message="gm.message"/>
</template>

<script lang="ts">

import { defineComponent } from "vue";
import GameMenager from './class/gameMenager';
import ScoreDispaly from "./components/scoreDispaly.vue";
import gameModal from "./components/gameModal.vue";

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
      this.gm.start();
    }
  },
  mounted() {
    this.gm.init(this.$refs.canvasHolder);
    let gameEnd = addEventListener('endGame', () => {
      this.gameRun = false;
    });
    let gameStart = addEventListener('startGame', () => {
      this.gameRun = true;
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
html{
  background-color: #2c3e50;

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
