<template>
  <v-card
    class="smallDateWeather"
    v-bind="props"
    :elevation="isHovering ? 5 : 3"
    rounded="lg"
  >
    <template v-slot:title>
      <div>{{ item.day }}</div>
      <div>{{ item.date }}</div>
    </template>
    <v-divider></v-divider>

    <div class="smallDays">
      <v-list-item>{{ item.degree }}</v-list-item>
      <v-list-item
        ><v-icon :icon="item.icon"></v-icon>
        <Tooltip :text="item.disc"></Tooltip>
      </v-list-item>
    </div>
    <div></div>
  </v-card>
</template>
<script setup>
import Tooltip from './AppTooltip.vue'

defineProps({
  props: Object,
  isHovering: Boolean,
  item: Object,
})
</script>
