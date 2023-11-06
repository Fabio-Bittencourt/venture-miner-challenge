<template>
  <section class="grid grid-cols-1 justify-items-center">
    <div class="grid md:grid-cols-3 gap-10 justify-items-center">
      <select v-model="flightType">
        <option value="one-way flight">One-way Flight</option>
        <option value="return flight">Return Flight</option>
      </select>
      <input class="input-default" type="date" v-model="departureDate">
      <input class="input-default" type="date" v-model="returnDate" :disabled="!isReturn">
    </div>
    <div class="col-span-3 text-center font-semibold my-4 text-lime-700">
      <p>{{ canBook ? '' : 'Return date must be after departure date.' }}</p>
    </div>
    <div class="col-span-3">
      <button class="button-primary" :disabled="!canBook" @click="book">Book</button>
    </div>

  </section>
</template>

<script setup>
import { ref, computed } from 'vue'

const flightType = ref('one-way flight')
const departureDate = ref(dateToString(new Date()))
const returnDate = ref(departureDate.value)

const isReturn = computed(() => flightType.value === 'return flight')

const canBook = computed(
  () =>
    !isReturn.value ||
    stringToDate(returnDate.value) > stringToDate(departureDate.value)
)

function book() {
  alert(
    isReturn.value
      ? `You have booked a return flight leaving on ${departureDate.value} and returning on ${returnDate.value}.`
      : `You have booked a one-way flight leaving on ${departureDate.value}.`
  )
}

function stringToDate(str) {
  const [y, m, d] = str.split('-')
  return new Date(+y, m - 1, +d)
}

function dateToString(date) {
  return (
    date.getFullYear() +
    '-' +
    pad(date.getMonth() + 1) +
    '-' +
    pad(date.getDate())
  )
}

function pad(n, s = String(n)) {
  return s.length < 2 ? `0${s}` : s
}
</script>