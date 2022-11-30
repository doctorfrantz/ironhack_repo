<script setup>
import navbar from './components/navbar.vue'
import linksfooter from './components/linksfooter.vue'
import printNumber from './components/printNumber.vue'
import printString from './components/printString.vue'
import showWhenTrue from './components/showWhenTrue.vue'
import showListElements from './components/showListElements.vue'
import changeClass from './components/changeClass.vue'
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <navbar />
    </div>
  </header>

  <div>
    <printNumber />
  </div>
 <div>
  <printString />
 </div>
 <div>
  <showWhenTrue />
 </div>
 <div>
  <showListElements />
 </div>
 <div>
  <changeClass />
 </div>
  <linksfooter />

</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
