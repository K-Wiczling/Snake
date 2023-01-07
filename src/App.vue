<template>
  <div ref="canvasHolder" id="canvasHolder">
    
  </div>
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
  },
  mounted () {
    this.gm.init(this.$refs.canvasHolder);
    this.gm.test();
  }
})
</script>

<style>
canvas {
  border: 1px solid black;
}
#canvasHolder {
  /* border: 1px solid red; */

  width: 90vw;
  height: 90vh;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
