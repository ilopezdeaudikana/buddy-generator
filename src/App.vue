<script setup lang="ts">
import Buddies from './components/buddy-generator.vue'
</script>

<template>
  <div class="header-bar"></div>
  <div class="container">
    <h1 class="title">Onboarding Buddy Generator</h1>
    <main>
      <Buddies />
    </main>
  </div>
</template>

<style scoped>
.header-bar {
  height: 40px;
  background-color: #292962;
  width: 100%;
}
.container {
  max-width: 1280px;
  margin: 0 30px;
}
.title {
  display: block;
  font-size: 24px;
  padding-top: 16px;
  padding-bottom: 16px;
}

@media (max-width: 420px) {
  .container {
    margin: 0 10px;
  }
}
</style>
