<template>
  <v-expand-transition>
    <v-card
      class="widgets"
      rounded="0"
      elevation="0"
      v-show="textAria.msg.stWidgets"
    >
      <v-chip-group>
        <v-chip
          v-for="tag in textAria.msg.arrWidgets"
          :key="tag.name"
          elevation="3"
          size="large"
          density="compact"
          :prepend-icon="tag.icon"
          label
          @click="emit('click-widget', { command: tag.name, typeShow: 'show' })"
        >
          {{ tag.name }}
        </v-chip>
      </v-chip-group>
    </v-card>
  </v-expand-transition>
</template>

<script setup>
const emit = defineEmits(['click-widget'])
defineProps({
  textAria: Object,
})
</script>
