<template>
    <div>
        <div @click="showText">Click HERE to show some extra text
            <h3 v-show="isTrue">If you see this is because a function si working</h3>
        </div>
    </div>
    
</template>
  
<script setup>
import { ref, reactive } from "vue";
let isTrue = ref(false);

const showText = () => {
    isTrue.value = !isTrue.value;
    console.log(isTrue);
};
</script>
  
<style scoped>
</style>