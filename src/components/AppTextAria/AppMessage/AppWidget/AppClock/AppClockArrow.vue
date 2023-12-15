<template>
  <v-list class="timeList">
    <Arrow
      :textAria="textAria"
      time="hour"
    ></Arrow>
    <v-list-item class="timeMiddle">
      <span>:</span>
    </v-list-item>
    <Arrow
      :textAria="textAria"
      time="minute"
    ></Arrow>
  </v-list>
</template>

<script setup>
import Arrow from './AppArrow.vue'

defineProps({
  textAria: Object,
})
</script>
