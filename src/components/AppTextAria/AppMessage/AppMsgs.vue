<template>
  <TextMsg
    v-if="items.valType === 'msg' || items.valType === 'msgPers'"
    :items="items"
    :textAria="textAria"
  ></TextMsg>
  <v-list-item
    v-else
    :class="items.valType === 'options' ? 'botOptions' : 'botWidgets'"
    :rounded="items.valType === 'options' ? '0' : 'lg'"
    :elevation="items.valType === 'options' ? '0' : '4'"
  >
    <Options
      v-if="items.valType === 'options'"
      :textAria="textAria"
      :items="items"
      @click-command="textAria.msg.sendWidgetMessage"
    ></Options>
    <Widget
      v-else
      :items="items"
      :textAria="textAria"
    ></Widget>
  </v-list-item>
</template>

<script setup>
import Widget from './AppWidget/AppWidget.vue'
import TextMsg from './AppTextMsg/AppTextMsg.vue'
import Options from './AppBotOptions/AppOptions.vue'

defineProps({
  items: Object,
  textAria: Object,
})
</script>
