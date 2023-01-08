<template>
  <div ref="canvasHolder" id="canvasHolder">
    
  </div>
  <button @click="move">move</button>
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
      gm: new GameMenager()
    }
  },
  methods: {
    move(){
      this.gm.gameLoop();
    }
  },
  mounted () {
    this.gm.init(this.$refs.canvasHolder);
    this.gm.setup();
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
