import { reactive, computed, onMounted, watch } from 'vue'
import { useStore } from 'vuex'
import { consts } from '@/store/consts'
import { useBot } from '@/use/bot'
import { useSend } from '@/use/send'

function createObj(msj) {
  const store = useStore()
  //Attributes
  const value = computed({
    get() {
      return store.getters.valMessage
    },
    set() {
      store.commit(consts.SET_VALUE, {
        type: consts.SET_VAL_MESSAGE,
        value: msj.value,
      })
    },
  })
  const stWidgets = computed(() => store.getters.stWidgets)
  const stDialog = computed(() => store.getters.stDialog)
  const valDays = computed(() => store.getters.valDays)

  const send = useSend({ msg: {} })
  //Functions
  const openWidgets = () => {
    store.commit(consts.SET_STATE, {
      type: consts.SET_STATE_WIDGETS,
      value: !stWidgets.value,
    })
  }
  const updateScroll = () => {
    const resizeScroll = new ResizeObserver(() => {
      const scroll = document.querySelector('.textAria, .textAria2')
      scroll.scrollTop = scroll.scrollHeight
    })
    resizeScroll.observe(document.querySelector('.textAria, .textAria2'))
  }
  const sendMessage = () => {
    send.msg.sendMessage(value, 'input')
  }
  //Bot logicks
  const bot = useBot({
    command: {},
  })
  const botWatcher = () => {
    // console.log(store.getters.stBotBusy)
    if (store.getters.stBotBusy === false) {
      const msgBot = store.getters.arrMsgs.at(-1)
      console.log('botWatcher')
      bot.command.sendMessage(msgBot)
    }
  }
  onMounted(() => {
    updateScroll()
    watch([store.getters.arrMsgs, stWidgets, valDays], updateScroll)
    watch(store.getters.arrMsgs, botWatcher)
    watch(stDialog, bot.command.initialisation)
  })

  const startWatchers = () => {
    watch([store.getters.arrMsgs, stWidgets, valDays], updateScroll)
    watch(store.getters.arrMsgs, botWatcher)
    watch(stDialog, bot.command.initialisation)
  }
  return {
    value,
    stWidgets,
    stDialog,
    openWidgets,
    sendMessage: sendMessage,
    clearMessage: send.msg.clearMessage,
    startWatchers,
  }
}

export function useMessage(init = {}) {
  const message = reactive({})

  for (const [key, value] of Object.entries(init)) {
    message[key] = createObj(value)
  }
  return message
}
