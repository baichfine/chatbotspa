<template>
  <v-card
    class="start"
    rounded="lg"
    elevation="7"
    link
    @click="emit('start-chat')"
  >
    <template v-slot:title>
      Чатти
      <v-icon icon="$iconRobot"></v-icon>
    </template>
    <template v-slot:subtitle> Умный бот </template>
  </v-card>
</template>

<script setup>
const emit = defineEmits(['start-chat'])
</script>
