<template>
  <v-container class="calendar">
    <v-row justify="space-around">
      <v-date-picker
        color="#388e3c"
        show-adjacent-months
        rounded="lg"
        :modelValue="textAria.msg.valCalendar"
        @update:modelValue="emit('change-calendar', $event)"
      >
      </v-date-picker>
    </v-row>
  </v-container>
</template>

<script setup>
const emit = defineEmits(['change-calendar'])

defineProps({
  items: Object,
  textAria: Object,
})
</script>
