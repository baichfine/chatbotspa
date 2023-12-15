<template>
  <v-list-item
    density="compact"
    class="infoWeather"
  >
    <v-list-item-subtitle
      >{{ item.value }} {{ item.unit }}</v-list-item-subtitle
    >
    <template v-slot:prepend>
      <v-icon :icon="item.icon"></v-icon>
      <Tooltip :text="item.text"></Tooltip>
    </template>
  </v-list-item>
</template>

<script setup>
import Tooltip from './AppTooltip.vue'

defineProps({
  item: Object,
})
</script>
