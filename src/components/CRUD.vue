<template>
  <section class="grid gap-4">
    <div class="grid grid-rows-2 gap-2">
      <input v-model="prefix" class="input-default" placeholder="Filter prefix">

      <div>
        <label for="name">Name:</label>
        <input id="name" class="input-default" v-model="first" />

        <label for="surname">Surname:</label>
        <input id="surname" class="input-default" v-model="last" />
      </div>
    </div>

    <div class="">
      <select size="5" v-model="selected" class="input-default w-full">
        <option v-for="name in filteredNames" :key="name">{{ name }}</option>
      </select>
    </div>

    <div class="buttons grid sm:grid-cols-3 justify-items-center">
      <button @click="create" class="button-primary">Create</button>
      <button @click="update" class="button-primary">Update</button>
      <button @click="del" class="button-primary">Delete</button>
    </div>
  </section>
</template>

<script setup>
import { ref, reactive, computed, watch } from 'vue'

const names = reactive(['Emil, Hans', 'Mustermann, Max', 'Tisch, Roman'])
const selected = ref('')
const prefix = ref('')
const first = ref('')
const last = ref('')

const filteredNames = computed(() =>
  names.filter((n) =>
    n.toLowerCase().startsWith(prefix.value.toLowerCase())
  )
)

watch(selected, (name) => {
  ;[last.value, first.value] = name.split(', ')
})

function create() {
  if (hasValidInput()) {
    const fullName = `${last.value}, ${first.value}`
    if (!names.includes(fullName)) {
      names.push(fullName)
      first.value = last.value = ''
    }
  }
}

function update() {
  if (hasValidInput() && selected.value) {
    const i = names.indexOf(selected.value)
    names[i] = selected.value = `${last.value}, ${first.value}`
  }
}

function del() {
  if (selected.value) {
    const i = names.indexOf(selected.value)
    names.splice(i, 1)
    selected.value = first.value = last.value = ''
  }
}

function hasValidInput() {
  return first.value.trim() && last.value.trim()
}
</script>