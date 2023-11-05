<template>
  <h2>{{ count }}</h2>
  <button @click="count++">contador</button>
</template>

<script setup>
import {ref} from 'vue';
const count = ref(0);
</script>
