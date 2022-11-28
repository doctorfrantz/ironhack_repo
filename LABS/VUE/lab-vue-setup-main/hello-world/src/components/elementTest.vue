<template>
  <p> Ok this is some text {{ userContent }} </p>
  <button @click="consoleLog">Hello!</button>
</template>

<script setup>
import {ref, reactive} from 'vue';
let userContent = ref("lorem ipsum dolor sit amet, this is some content");
const consoleLog = reactive(() => {
    console.log("hello world")
});
</script>

<style>

</style>