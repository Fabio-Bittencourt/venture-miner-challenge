<script setup>
import { RouterView } from 'vue-router'
import Nav from './components/Nav.vue'
</script>

<template>
  <header class="p-4 mb-4 bg-lime-500 shadow">
    <Nav />
  </header>
  <RouterView />
</template>

<style scoped></style>
