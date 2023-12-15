<template>
  <v-list>
    <v-combobox
      clearable
      chips
      multiple
      autocomplete="off"
      hide-details
      open-on-clear
      variant="outlined"
      density="default"
      clear-icon="$iconClose"
      label="Дни недели"
      :modelValue="textAria.msg.valDays"
      :items="textAria.msg.arrClock"
      @update:modelValue="textAria.msg.onChoiceDays"
    ></v-combobox>
  </v-list>
</template>

<script setup>
defineProps({
  textAria: Object,
})
</script>
