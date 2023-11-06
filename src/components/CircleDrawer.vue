<template>
  <svg @click="onClick">
    <foreignObject x="0" y="40%" width="100%" height="200">
      <p class="tip">
        Click on the canvas to draw a circle. Click on a circle to select it.
        Right-click on the canvas to adjust the radius of the selected circle.
      </p>
    </foreignObject>
    <circle
      v-for="circle in circles"
      :cx="circle.cx"
      :cy="circle.cy"
      :r="circle.r"
      :fill="circle === selected ? '#ccc' : '#fff'"
      @click="selected = circle"
      @contextmenu.prevent="adjust(circle)"
    ></circle>
  </svg>

  <div class="controls">
    <button class="button-primary" @click="undo" :disabled="index <= 0">Undo</button>
    <button class="button-primary" @click="redo" :disabled="index >= history.length - 1">Redo</button>
  </div>

  <div class="dialog" v-if="adjusting" @click.stop>
    <p>Adjust radius of circle at ({{ selected.cx }}, {{ selected.cy }})</p>
    <input type="range" v-model="selected.r" min="1" max="300">
  </div>
</template>

<script setup>
import { ref, shallowReactive, toRaw } from 'vue'

const history = shallowReactive([[]])
const index = ref(0)
const circles = ref([])
const selected = ref()
const adjusting = ref(false)

function onClick({ clientX: x, clientY: y }) {
  if (adjusting.value) {
    adjusting.value = false
    selected.value = null
    push()
    return
  }

  selected.value = [...circles.value].reverse().find(({ cx, cy, r }) => {
    const dx = cx - x
    const dy = cy - y
    return Math.sqrt(dx * dx + dy * dy) <= r
  })

  if (!selected.value) {
    circles.value.push({
      cx: x,
      cy: y,
      r: 50
    })
    push()
  }
}

function adjust(circle) {
  selected.value = circle
  adjusting.value = true
}

function push() {
  history.length = ++index.value
  history.push(clone(circles.value))
  console.log(toRaw(history))
}

function undo() {
  circles.value = clone(history[--index.value])
}

function redo() {
  circles.value = clone(history[++index.value])
}

function clone(circles) {
  return circles.map((c) => ({ ...c }))
}
</script>