<template>
  <v-card
    class="clock"
    rounded="lg"
    elevation="4"
  >
    <div class="clockHeader"><div>Будильник</div></div>
    <AppDays :textAria="textAria"></AppDays>
    <ClockArrow :textAria="textAria"></ClockArrow>
  </v-card>
</template>

<script setup>
import ClockArrow from './AppClockArrow.vue'
import AppDays from './AppDays.vue'

defineProps({
  items: Object,
  textAria: Object,
})
</script>
