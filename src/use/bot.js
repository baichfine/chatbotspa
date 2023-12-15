import { reactive } from 'vue'
import { useStore } from 'vuex'
import { consts } from '@/store/consts'
import { useCommand } from '@/use/command'

function createObj() {
  const store = useStore()
  //Attributes

  //Functions
  const initialisation = async () => {
    if (store.getters.stBotBusy === false)
      await sendMessage({
        valCommand: 'Приветствие',
        valSender: 'my',
        stMoreMsg: false,
        valId: 0,
        stShow: true,
      })
  }
  const sendMessage = async (payload) => {
    // console.log(payload)
    if (payload.valSender === 'my' || payload.stMoreMsg) {
      await store.dispatch(consts.ACT_LOADING, {
        value: false,
        index: Object.keys(store.getters.arrMsgs).length,
        payload: commandBot(payload),
      })
    }
  }
  const commandBot = (payload) => {
    const commandValue = useCommand(payload)
    return {
      valId: Object.keys(store.getters.arrMsgs).length,
      valSubtitle: commandValue.value,
      valType: commandValue.type,
      valSender: 'bot',
      valCommand: commandValue.name,
      stLoading: true,
      stMoreMsg: commandValue.moreMsg,
      valNextMsg: commandValue.nextMsg,
      stShow: commandValue.show,
      valCountHide: commandValue.countHide,
    }
  }
  return { initialisation, sendMessage }
}

export function useBot(init = {}) {
  const bot = reactive({})

  for (const [key] of Object.entries(init)) {
    bot[key] = createObj()
  }
  return bot
}
