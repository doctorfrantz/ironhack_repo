<template>
    <div>
        <h3>My favorite all-time videogames are</h3>
        <ol v-for="(game, index) in showListElements" :key="index">
            {{(index + 1)}} {{game}}
        </ol>
    </div>
</template>
  
<script setup>
import { ref, reactive } from "vue";
const showListElements = reactive([
    "Final Fantasy VII", "Metal Gear Solid", "The Witcher III", "Pharaoh", "Age of Empires II"
])
</script>
  
<style scoped>
</style>