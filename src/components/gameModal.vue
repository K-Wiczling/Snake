<template>
    <div id="game-modal" >
        <p>{{ message }}</p>
        <button @click="startGame">Start Game</button>
    </div>
</template>

<script lang="ts">

import { defineComponent } from "vue";

export default defineComponent({
    name: 'gameModal',
    props: {
        message: String
    },
    methods: {
        startGame() {
            this.$emit('startGame');
        }
    },

})
</script>

<style>
#game-modal {
    color: White;
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 10;
    background-color: rgba(0, 0, 0, 0.7);
    padding-top: 40vh;
}
p{
    font-size: 2rem;
    padding-bottom: 20px
}
button{
    width: 30vw;
    height: 50px;
    background-color: #11f100;
    margin: auto;
    font-size: 1.5rem;
}
button:hover{
    background-color: #0b9743;
}
@media (max-width: 850px){
    button{
        width: 80%;
    }
}
</style>
