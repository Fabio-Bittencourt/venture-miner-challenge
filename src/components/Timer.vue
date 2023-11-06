<template>
  <div class="font-bold text-9xl">{{ (elapsed / 1000).toFixed(1) }}s</div>
  <div class="grid grid-rows-2 gap-4">
    <div>
      <label>Elapsed Time: <progress :value="progressRate"></progress>
      </label>
    </div>

    <div>
      Duration: <input type="range" v-model="duration" min="1" max="30000">
      {{ (duration / 1000).toFixed(1) }}s
    </div>
  </div>
  <button class="button-primary" @click="reset">Reset</button>
</template>

<script setup>
import { ref, onUnmounted, computed } from 'vue'
const duration = ref(15 * 1000)
const elapsed = ref(0)

let lastTime
let handle

const update = () => {
  elapsed.value = performance.now() - lastTime
  if (elapsed.value >= duration.value) {
    cancelAnimationFrame(handle)
  } else {
    handle = requestAnimationFrame(update)
  }
}

const reset = () => {
  elapsed.value = 0
  lastTime = performance.now()
  update()
}

const progressRate = computed(() =>
  Math.min(elapsed.value / duration.value, 1)
)

reset()

onUnmounted(() => {
  cancelAnimationFrame(handle)
})
</script>