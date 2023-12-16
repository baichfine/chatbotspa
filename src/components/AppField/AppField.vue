<template>
  <v-container class="chatField">
    <v-text-field
      :modelValue="message.my.value"
      v-model="valMessage"
      :trim="message.my.value"
      variant="filled"
      clear-icon="$iconClose"
      :disabled="!message.my.stDialog"
      append-inner-icon="$iconSend"
      clearable
      persistent-hint
      autocomplete="off"
      density="default"
      label="Сообщение"
      hide-details
      type="text"
      @input="message.my.value = $event.target.value"
      @click:clear="message.my.clearMessage"
      @click:append-inner="message.my.sendMessage"
      @keyup.enter="message.my.sendMessage"
    >
      <template v-slot:prepend-inner>
        <v-icon
          :icon="message.my.stWidgets ? '$iconCommentRemove' : '$iconComment'"
          @click="message.my.openWidgets"
        ></v-icon>
        <Tooltip
          :text="message.my.stWidgets ? 'Закрыть виджеты' : 'Открыть виджеты'"
        ></Tooltip>
      </template>
    </v-text-field>
  </v-container>
</template>

<script setup>
import Tooltip from '../AppTextAria/AppMessage/AppWidget/AppWeather/AppTooltip.vue'
import { ref } from 'vue'
import { useMessage } from '@/use/message'
const valMessage = ref()
const message = useMessage({
  my: {
    value: valMessage,
  },
})
</script>
