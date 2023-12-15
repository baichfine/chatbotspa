<template>
  <div class="settings">
    <div>
      <v-btn
        variant="text"
        :icon="theme ? '$iconDark' : '$iconLight'"
        @click="emit('change-theme')"
      >
      </v-btn>
      <Tooltip text="Сменить тему"></Tooltip>
    </div>
    <div>
      <v-btn
        variant="text"
        icon="$iconSync"
        @click="emit('update-chat')"
      ></v-btn>
      <Tooltip text="Обновить Чат-бот"></Tooltip>
    </div>
  </div>
</template>

<script setup>
import Tooltip from '../AppTextAria/AppMessage/AppWidget/AppWeather/AppTooltip.vue'
// <Tooltip text="Обновить Чат-бот"></Tooltip>

const emit = defineEmits(['change-theme', 'update-chat'])
defineProps({
  theme: Boolean,
})
</script>
