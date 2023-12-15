<template>
  <v-list-item>
    <v-btn
      icon="$iconChevronUp"
      elevation="0"
      @click="textAria.msg.onChangeTime(time, 'incr')"
    ></v-btn>
    <span class="time"
      >{{ textAria.msg.showTime(time) }}
      <p>ч</p></span
    >

    <v-btn
      icon="$iconChevronDown"
      @click="textAria.msg.onChangeTime(time, 'decr')"
      elevation="0"
    ></v-btn>
  </v-list-item>
</template>

<script setup>
defineProps({
  time: String,
  textAria: Object,
})
</script>
