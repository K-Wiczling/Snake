<template>
  <div ref="canvasHolder" >
    
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
  }
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
