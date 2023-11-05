<template>
  <section>
    <div>
      <label for="">Celsius</label>
      <input type="number" :value="c" @change="setC">
    </div>
    <div>
      <label for="">Fahrenheit</label>
      <input type="number" :value="f" @change="setF">
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