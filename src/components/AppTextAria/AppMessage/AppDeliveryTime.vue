<template>
  <div class="deliveryTime">
    {{ textAria.msg.showDeliveryTime('hour') }} :
    {{ textAria.msg.showDeliveryTime('minute') }}
  </div>
</template>

<script setup>
defineProps({
  textAria: Object,
})
</script>
