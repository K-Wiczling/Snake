<template>
  <div ref="canvasHolder" id="canvasHolder">
    
  </div>
  <button @click="startGame">startGame</button>
  <span>{{gm.score.score}}</span>
</template>

<script lang="ts">

import { defineComponent } from "vue";
import GameMenager from './class/gameMenager';

export default defineComponent ({
  name: 'App',
  components: {
  },
  data() {
    return {
      gm: new GameMenager(),
      score: 0
    }
  },
  methods: {
    startGame(){
      this.gm.start();
    }
  },
  mounted () {
    this.gm.init(this.$refs.canvasHolder);
  }
})
</script>

<style>
*{
  padding: 0;
  margin: 0 ;
}
canvas {
  border: 1px solid black;
  margin: auto;
}
#canvasHolder {
  width: 90vw;
  height: 90vh;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 10px;
}

</style>
