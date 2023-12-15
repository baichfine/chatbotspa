import { reactive } from 'vue'
import { consts } from '@/store/consts'
import { useStore } from 'vuex'
import { useCommand } from '@/use/command'

function createObj() {
  const store = useStore()
  //Attributes
  //Functions
  const sendMessage = (msg, type, obj) => {
    if (store.getters.stBotBusy === false && msg.value !== '')
      switch (type) {
        case 'widget': {
          if (obj.typeShow === 'hide') hideOptions(false, obj.id, obj.count)
          if (store.getters.valName === 'Гость')
            sendCommand(msg.value, msg.value)
          else if (msg.value === 'Имя') sendName(msg.value, 'Имя', 'Гость')
          else sendCommand(msg.value, msg.value)
          break
        }
        case 'input': {
          if (store.getters.valName === 'Гость')
            sendName(msg.value, 'ИмяГостя', msg.value)
          else sendCommand(msg.value, msg.value)
          break
        }
      }
  }
  const hideOptions = (value, id, count) => {
    store.commit(consts.HIDE_OPTIONS, {
      value: value,
      index: id,
    })
    if (count === 2)
      store.commit(consts.HIDE_OPTIONS, {
        value: value,
        index: id - 1,
      })
  }
  const sendCommand = (msj, command) => {
    const commandValue = useCommand({ valCommand: command, valSender: 'my' })
    store.commit(consts.SET_MSGS_LIST, {
      valId: Object.keys(store.getters.arrMsgs).length,
      valSubtitle: msj,
      valType: 'msg',
      valSender: 'my',
      valCommand: command,
      stLoading: false,
      stMoreMsg: false,
      stShow: commandValue.show,
    })
    clearMessage()
  }
  const sendName = (msj, command, value) => {
    store.commit(consts.SET_VALUE, {
      type: consts.SET_VAL_NAME,
      value: value,
    })
    sendCommand(msj, command)
  }
  const clearMessage = () => {
    store.commit(consts.SET_VALUE, {
      type: consts.SET_VAL_MESSAGE,
      value: '',
    })
  }

  return { sendMessage, clearMessage, sendCommand }
}
export function useSend(init = {}) {
  const send = reactive({})

  for (const [key] of Object.entries(init)) {
    send[key] = createObj()
  }
  return send
}
