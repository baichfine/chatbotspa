<template>
  <v-card
    v-bind="props"
    :elevation="isHovering ? 5 : 3"
    rounded="lg"
  >
    <template v-slot:title>
      <div>Москва</div>
      <div class="dateWeather">{{ item.day + ' ' }} {{ item.date }}</div>
    </template>
    <v-divider></v-divider>
    <div class="weatherGrid">
      <v-list-item>{{ item.degree }} </v-list-item>
      <v-list-item
        ><v-icon :icon="item.icon"></v-icon>
        <Tooltip :text="item.disc"></Tooltip>
      </v-list-item>
      <MainDisc :item="item.wind"></MainDisc>
      <MainDisc :item="item.water"></MainDisc>
    </div>
  </v-card>
</template>
<script setup>
import MainDisc from './AppMainDisc.vue'
import Tooltip from './AppTooltip.vue'

defineProps({
  props: Object,
  isHovering: Boolean,
  item: Object,
})
</script>
