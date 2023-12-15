<template>
  <p>{{ items.valSubtitle }}</p>
  <v-divider></v-divider>
  <div v-if="items.valCommand === 'Установить'">
    <p>Дни недели:</p>
    <div
      class="daysClock"
      v-for="day in textAria.msg.arrClock"
      :key="day"
    >
      <div>{{ day }}</div>
      <v-icon :icon="textAria.msg.checkdays(day)"></v-icon>
    </div>

    <br />
    <div class="timeGrid">
      <p>Время:</p>
      <div>
        <span class="colorSecondary">{{ textAria.msg.showTime('hour') }}</span>
        ч :
        <span class="colorSecondary">{{
          textAria.msg.showTime('minute')
        }}</span>
        м.
      </div>
    </div>
  </div>
  <div v-else-if="items.valCommand === 'Создать'">
    <p>Дата уведомления:</p>
    <span class="colorSecondary">{{ textAria.msg.valCalendarNew }}</span>
  </div>
</template>

<script setup>
defineProps({
  items: Object,
  textAria: Object,
})
</script>
