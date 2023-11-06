<template>
  <section class="grid grid-rows-2">
    <div class="font-bold text-center my-32">
      <h2 class="text-9xl">{{ count }}</h2>
    </div>
    <div class="font-bold text-center">
      <button type="button" class="button-primary"
        @click="count++">
        + 1
      </button>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';
const count = ref(0);
</script>
