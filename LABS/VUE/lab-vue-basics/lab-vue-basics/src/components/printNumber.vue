<template>
    <div>
        <h3>The result of multiplying {{numberOne}} by {{numberTwo}} is..... </h3>
        <h1>{{(numberOne * numberTwo)}}</h1>
    </div>
</template>
  
<script setup>
import { ref, reactive } from "vue";
let numberOne = ref(5);
let numberTwo = ref(8);
</script>
  
<style scoped>
</style>