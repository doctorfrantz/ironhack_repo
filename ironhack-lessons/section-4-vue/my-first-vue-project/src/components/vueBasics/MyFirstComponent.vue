<template>
    <h1>Mi nombre es Alexis y me gusta vue</h1>
    <p>My favorite food is {{ favoriteFood }}</p>
    <p> Hi, my name is {{ aboutMe.name }}, i am {{ aboutMe.age }} and my hobbies are {{ aboutMe.hobbies[0]}}, {{ aboutMe.hobbies[1]}} and {{ aboutMe.hobbies[2]}}</p>
</template>


<script setup>
import { reactive } from 'vue';
import { ref } from 'vue';

 const aboutMe = reactive({
     name: "Alexis",
     age: "34",
     dateOfBirth: "24/02",
      hobbies: [
          "WarHammer", "piano", "playing videogames"
     ],
 });

let favoriteMovie = ref("Grand Hotel Budapest");
let favoriteFood = ref("Pad Thai");
let howManyTimes = 6;

</script>


<style>

</style>