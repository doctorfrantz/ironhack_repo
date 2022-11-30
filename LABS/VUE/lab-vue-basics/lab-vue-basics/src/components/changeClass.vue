<template>
    <div>
        <div @click="changeBackground">
            <h3 :class="isTrue ? 'red' : '' ">Click and this should be RED</h3>
            <h3 :class="isTrue ? 'yellow' : '' ">Click and this sould be YELLOW</h3>
        </div>
        <div class="changingColor" @click="changeBackgroundTwo">
            <h3 :class="isRed ? 'red' : 'yellow' ">Click and this should change from RED to YELLOW</h3>
        </div>
    </div>
    
</template>
  
<script setup>
import { ref, reactive } from "vue";
let isTrue = ref(false);
let isRed = ref(false);

const changeBackground = () => {
    isTrue.value = !isTrue.value;
    console.log(isTrue);
};
const changeBackgroundTwo = () => {
    isRed.value = !isRed.value;
    console.log(isRed);
};
</script>
  
<style scoped>
.red {
    background-color: red;
    color: black;
}
.yellow {
    background-color: yellow;
    color: black;
}
.changingColor {
    color: black;
}
</style>