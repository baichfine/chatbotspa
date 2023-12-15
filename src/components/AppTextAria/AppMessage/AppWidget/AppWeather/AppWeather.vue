<template>
  <v-container class="weather">
    <v-row>
      <v-col
        v-for="(item, index) in textAria.msg.arrWeather"
        :key="item"
      >
        <v-hover v-slot="{ isHovering, props }">
          <MainCard
            v-if="index === 0"
            :isHovering="isHovering"
            :props="props"
            :item="item"
          ></MainCard>
          <SmallCard
            v-else
            :isHovering="isHovering"
            :props="props"
            :item="item"
          ></SmallCard>
        </v-hover>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import MainCard from './AppMainCard.vue'
import SmallCard from './AppSmallCard.vue'
defineProps({
  textAria: Object,
})
</script>
