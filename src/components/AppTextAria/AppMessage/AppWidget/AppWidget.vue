<template>
  <v-list-item>
    <Calendar
      v-if="items.valCommand === 'Выбрать уведомление'"
      :items="items"
      :textAria="textAria"
      @change-calendar="textAria.msg.onChangeCalendar"
    ></Calendar>
    <Clock
      v-else-if="items.valCommand === 'Изменить будильник'"
      :items="items"
      :textAria="textAria"
    ></Clock>
    <Weather
      v-else
      :textAria="textAria"
    ></Weather>
  </v-list-item>
  <DeliveryTime :textAria="textAria"></DeliveryTime>
</template>

<script setup>
import Calendar from './AppCalendar.vue'
import Clock from './AppClock/AppClock.vue'
import Weather from './AppWeather/AppWeather.vue'
import DeliveryTime from '../AppDeliveryTime.vue'

defineProps({
  items: Object,
  textAria: Object,
})
</script>
