<template>
  <v-list-item
    :class="items.valSender === 'bot' ? 'botMsg' : 'myMsg'"
    rounded="lg"
    elevation="4"
  >
    <template v-slot:title>
      <v-icon
        :icon="items.valSender === 'bot' ? '$iconRobot' : '$iconAccountTie'"
      ></v-icon>
      {{ items.valSender === 'bot' ? 'Чатти' : textAria.msg.valName }}
    </template>
    <template v-slot:subtitle>
      <div
        v-if="items.valType === 'msg'"
        v-html="items.valSubtitle"
      ></div>
      <PersMsg
        v-else
        :textAria="textAria"
        :items="items"
      ></PersMsg>
    </template>
    <DeliveryTime :textAria="textAria"></DeliveryTime>
  </v-list-item>
</template>

<script setup>
import PersMsg from './AppPersMsg.vue'
import DeliveryTime from '../AppDeliveryTime.vue'

defineProps({
  items: Object,
  textAria: Object,
})
</script>
