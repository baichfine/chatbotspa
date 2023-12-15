import { reactive, computed, ref } from 'vue'
import { useStore } from 'vuex'
import { consts } from '@/store/consts'
import { useSend } from '@/use/send'

function createObj() {
  const store = useStore()
  var options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }
  //Arrays
  const arrMsgs = computed(() => store.getters.arrMsgs)
  const arrWidgets = ref(consts.ARR_WIDGETS)
  const arrClock = ref(consts.ARR_CLOCK)
  const arrWeather = ref(consts.ARR_WEATHER)
  //States
  const stWidgets = computed(() => store.getters.stWidgets)
  const stDialog = computed(() => store.getters.stDialog)
  //Values
  const valCalendar = computed(() => store.getters.valCalendar)
  const valCalendarNew = computed(() =>
    store.getters.valCalendar.toLocaleDateString('ru-RU', options)
  )
  const valHour = computed(() => store.getters.valHour)
  const valMinute = computed(() => store.getters.valMinute)
  const valName = computed(() => store.getters.valName)
  const valDays = computed({
    get() {
      return store.getters.valDays
    },
    set(e) {
      store.commit(consts.SET_VALUE, {
        type: consts.SET_VAL_DAYS,
        value: e,
      })
    },
  })
  const valClassTextAria = ref('textAria2')

  //Hooks
  const send = useSend({ msg: {} })
  //Local consts
  const scrollHeight = ref()
  const scrollTop = ref()
  //Functions
  const changeScroll = (e) => {
    scrollHeight.value = e.target.scrollHeight / 1.5
    scrollTop.value = e.target.scrollTop + e.target.clientHeight
    if (scrollTop.value >= scrollHeight.value)
      valClassTextAria.value = 'textAria2'
    else valClassTextAria.value = 'textAria'
  }
  const sendWidgetMessage = (obj) => {
    const name = ref(obj.command)
    closeWidgets()
    send.msg.sendMessage(name, 'widget', obj)
  }
  const closeWidgets = () => {
    store.commit(consts.SET_STATE, {
      type: consts.SET_STATE_WIDGETS,
      value: false,
    })
  }
  const startDialog = () => {
    store.commit(consts.SET_STATE, {
      type: consts.SET_STATE_BOT_BUSY,
      value: false,
    })
    store.commit(consts.SET_STATE, {
      type: consts.SET_STATE_DIALOG,
      value: true,
    })
  }
  const onChangeCalendar = (e) => {
    store.commit(consts.SET_VALUE, {
      type: consts.SET_VAL_CALENDAR,
      value: e,
    })
  }
  const onChangeTime = (typeTime, typeIncr) => {
    var val, constNew
    if (typeTime === 'hour') {
      val = valHour.value
      constNew = consts.SET_VAL_HOUR
    } else {
      val = valMinute.value
      constNew = consts.SET_VAL_MINUTE
    }

    store.commit(consts.SET_VALUE, {
      type: constNew,
      value: onTime(typeTime, typeIncr, val),
    })
  }
  const onTime = (typeTime, typeIncr, val) => {
    switch (typeIncr) {
      case 'incr': {
        if (
          (val === 23 && typeTime === 'hour') ||
          (val === 59 && typeTime === 'minute')
        )
          return 0
        else return val + 1
      }
      case 'decr': {
        if (val === 0 && typeTime === 'hour') return 23
        else if (val === 0 && typeTime === 'minute') return 59
        else return val - 1
      }
    }
  }
  const showTime = (typeTime) => {
    switch (typeTime) {
      case 'hour': {
        if (valHour.value <= 9) return '0' + valHour.value
        else return valHour.value
      }
      case 'minute': {
        if (valMinute.value <= 9) return '0' + valMinute.value
        else return valMinute.value
      }
    }
  }
  const showDeliveryTime = (typeTime) => {
    let date = new Date()
    switch (typeTime) {
      case 'hour': {
        const hour = date.getHours()
        if (hour <= 9) return '0' + hour
        else return hour
      }
      case 'minute': {
        const minute = date.getMinutes()
        if (minute <= 9) return '0' + minute
        else return minute
      }
    }
  }
  const onChoiceDays = (e) => {
    valDays.value = e
  }

  const checkdays = (day) => {
    for (var i = 0; i < valDays.value.length; i++) {
      if (valDays.value[i] === day) return '$iconCheck'
    }
    return '$iconCheckGrey'
  }
  return {
    arrMsgs,
    arrWidgets,
    arrClock,
    arrWeather,
    stWidgets,
    stDialog,
    valName,
    valClassTextAria,
    valCalendar,
    valCalendarNew,
    valDays,
    changeScroll,
    sendWidgetMessage: sendWidgetMessage,
    startDialog,
    onChangeCalendar,
    onChangeTime,
    showTime,
    showDeliveryTime,
    onChoiceDays,
    checkdays,
  }
}

export function useTextAria(init = {}) {
  const textAria = reactive({})

  for (const [key, value] of Object.entries(init)) {
    textAria[key] = createObj(value)
  }
  return textAria
}
