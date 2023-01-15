<template>
    <div id="control-buttons" >
        <button>left</button>
        <button>right</button>
        <button>top</button>
        <button>bottom</button>
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
    #control-buttons {
        position: sticky;
        bottom: 0px;
        margin: auto;
        width: 200px;
        height: 50px;
    }
    p{
        font-size: 1.2rem;
    }
</style>
