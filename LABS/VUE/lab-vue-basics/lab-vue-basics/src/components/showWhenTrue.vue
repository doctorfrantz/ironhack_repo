<template>
    <div>
        <h3>If you see the text below</h3>
        <h1 v-if="showWhenTrue">Is because the const "showWhenTrue" is set to true</h1>
    </div>
</template>
  
<script setup>
import { ref, reactive } from "vue";
const showWhenTrue = true;
</script>
  
<style scoped>
</style>