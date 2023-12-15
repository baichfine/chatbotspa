<template>
  <v-scale-transition
    group
    tag="v-list"
    class="v-list"
    hide-on-leave
  >
    <div
      v-for="item in textAria.msg.arrMsgs"
      :key="item"
      class="msjDiv"
    >
      <v-slide-y-reverse-transition
        hide-on-leave
        v-if="item.stShow"
      >
        <AppMsgs
          v-if="!item.stLoading"
          :items="item"
          :textAria="textAria"
        ></AppMsgs>
        <AppTyping v-else></AppTyping>
      </v-slide-y-reverse-transition>
    </div>
  </v-scale-transition>
</template>

<script setup>
import AppTyping from './AppTyping.vue'
import AppMsgs from './AppMsgs.vue'

defineProps({
  textAria: Object,
})
</script>
