<template>
  <v-list class="optionList">
    <v-list-item
      v-for="item in items.valSubtitle"
      :key="item"
      ><v-btn
        variant="outlined"
        rounded="lg"
        @click="
          emit('click-command', {
            command: item.command,
            typeShow: 'hide',
            id: items.valId,
            count: items.valCountHide,
          })
        "
        >{{ item.name }}</v-btn
      ></v-list-item
    >
  </v-list>
</template>

<script setup>
const emit = defineEmits(['click-command'])

defineProps({
  items: Object,
  textAria: Object,
})
</script>
