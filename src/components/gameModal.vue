<template>
    <div id="game-modal" >
        <button @click="startGame">startGame</button>
    </div>
</template>

<script lang="ts">

import { defineComponent } from "vue";

export default defineComponent({
    name: 'gameModal',
    methods: {
        startGame() {
            this.$emit('startGame');
        }
    },

})
</script>

<style>
#game-modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 10;
    background-color: rgba(0, 0, 0, 0.7);
    padding-top: 45vh;
}
button{
    width: 40vw;
    height: 50px;

    margin: auto;

}
</style>
