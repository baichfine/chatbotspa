<template>
  <v-card
    :class="textAria.msg.valClassTextAria"
    id="gradient"
    rounded="0"
    :height="textAria.msg.stWidgets ? '420px' : '500px'"
    @scroll="textAria.msg.changeScroll"
  >
    <Message
      v-if="textAria.msg.stDialog"
      :textAria="textAria"
    ></Message>
    <Start
      v-else
      @start-chat="textAria.msg.startDialog"
    ></Start>
  </v-card>
  <Chips
    :textAria="textAria"
    @click-widget="textAria.msg.sendWidgetMessage"
  ></Chips>
</template>

<script setup>
import Message from './AppMessage/AppMessage.vue'
import Chips from './AppChips.vue'
import Start from './AppStart.vue'

import { useTextAria } from '@/use/textAria'
const textAria = useTextAria({
  msg: {},
})
</script>
