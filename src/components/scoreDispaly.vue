<template>
    <div id="score-dispaly" >
        <span>Score: {{ score }}</span>
    </div>

</template>

<script lang="ts">
import { defineComponent } from "vue";


export default defineComponent({
    name: 'scoreDisplay',
    components: {
    },
    props: {
        score: Number,
        lvl: Number
    },
    methods: {
        
    },
})
</script>

<style>
    #score-dispaly {
        top: 150px;
        margin: auto;
        width: 200px;
        height: 50px;
        display: flex;
        justify-content: space-around;
    }
    p{
        font-size: 1.2rem;
    }
</style>
