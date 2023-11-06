<template>
  <section class="grid gap-4 md:grid-cols-2">
    <div class="">
      <label for="celsius">Celsius</label>
      <input id="celsius" class="input-default" type="number" :value="c" @change="setC">
    </div>
    <div class="">
      <label for="fahrenheit">Fahrenheit</label>
      <input id="fahrenheit" class="input-default" type="number" :value="f" @change="setF">
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const c = ref(0)
const f = ref(32)

function setC(e, v = +e.target.value) {
  c.value = v
  f.value = v * (9 / 5) + 32
}

function setF(e, v = +e.target.value) {
  f.value = v
  c.value = (v - 32) * (5 / 9)
}

</script>