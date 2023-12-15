<template>
  <v-card
    class="chat"
    rounded="lg"
    elevation="6"
  >
    <Settings
      @change-theme="settings.panel.toggleTheme"
      :theme="settings.panel.stTheme"
      @update-chat="settings.panel.updateChat"
    ></Settings>
    <TextAria></TextAria>
    <Field></Field>
  </v-card>
</template>

<script setup>
import Field from './AppField/AppField.vue'
import TextAria from './AppTextAria/AppTextAria.vue'
import Settings from './AppSettings/AppSettings.vue'
import { useSettings } from '@/use/settings'

const settings = useSettings({
  panel: {},
})
</script>
