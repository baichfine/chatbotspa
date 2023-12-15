<template>
  <v-tooltip
    content-class="weatherTooltip"
    open-on-hover
    activator="parent"
    location="bottom"
    :text="text"
  ></v-tooltip>
</template>

<script setup>
defineProps({
  text: String,
})
</script>
