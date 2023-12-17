import { createStore } from 'vuex'
import { consts } from '@/store/consts'

export default createStore({
  state() {
    return {
      arrMsgs: [],
      valMessage: '',
      stWidgets: false,
      valName: 'Гость',
      stDialog: false,
      stBotBusy: false,
      valCalendar: new Date(),
      valHour: 7,
      valMinute: 30,
      valDays: ['Понедельник'],
      stTheme: false,
    }
  },
  getters: {
    valCommand(state) {
      return state.valCommand
    },
    valName(state) {
      return state.valName
    },
    valMessage(state) {
      return state.valMessage
    },
    valCalendar(state) {
      return state.valCalendar
    },
    valHour(state) {
      return state.valHour
    },
    valMinute(state) {
      return state.valMinute
    },
    valDays(state) {
      return state.valDays
    },
    stWidgets(state) {
      return state.stWidgets
    },
    stDialog(state) {
      return state.stDialog
    },
    arrMsgs(state) {
      return state.arrMsgs
    },
    stBotBusy(state) {
      return state.stBotBusy
    },
    stTheme(state) {
      return state.stTheme
    },
  },
  mutations: {
    setValue(state, payload) {
      switch (payload.type) {
        case consts.SET_VAL_MESSAGE: {
          state.valMessage = payload.value
          break
        }
        case consts.SET_VAL_NAME: {
          state.valName = payload.value
          break
        }
        case consts.SET_VAL_CALENDAR: {
          state.valCalendar = payload.value
          break
        }
        case consts.SET_VAL_HOUR: {
          state.valHour = payload.value
          break
        }
        case consts.SET_VAL_MINUTE: {
          state.valMinute = payload.value
          break
        }
        case consts.SET_VAL_DAYS: {
          state.valDays = payload.value
          break
        }
        default: {
          console.log('Invalid choice')
          break
        }
      }
    },
    setState(state, payload) {
      switch (payload.type) {
        case consts.SET_STATE_WIDGETS: {
          state.stWidgets = payload.value
          break
        }
        case consts.SET_STATE_DIALOG: {
          state.stDialog = payload.value
          break
        }
        case consts.SET_STATE_BOT_BUSY: {
          state.stBotBusy = payload.value
          break
        }
        case consts.SET_STATE_THEME: {
          state.stTheme = payload.value
          break
        }
        default: {
          console.log('Invalid choice')
          break
        }
      }
    },
    setLoading(state, payload) {
      state.arrMsgs[payload.index].stLoading = payload.value
    },
    setMsgsList(state, payload) {
      state.arrMsgs.push({
        ...payload,
      })
      console.log(state.arrMsgs)
    },
    loadingMsgsList(state, payload) {
      state.arrMsgs = Object.keys(payload.value).map((key) => {
        return {
          id: key,
          ...payload.value[key],
        }
      })
    },
    hideOptions(state, payload) {
      state.arrMsgs[payload.index].stShow = payload.value
    },
    updateChat(state, theme) {
      state.arrMsgs = []
      state.valMessage = ''
      state.stWidgets = false
      state.valName = 'Гость'
      state.stDialog = false
      state.stBotBusy = true
      state.valCalendar = new Date()
      state.valHour = 7
      state.valMinute = 30
      state.valDays = ['Понедельник']
      state.stTheme = theme
    },
  },
  actions: {
    async actLoading(context, payload) {
      context.commit(consts.SET_STATE, {
        type: consts.SET_STATE_BOT_BUSY,
        value: true,
      })
      await new Promise((resolve) => {
        setTimeout(() => {
          resolve(context.commit(consts.SET_MSGS_LIST, payload.payload))
        }, 500)
      })
      await new Promise((resolve) => {
        setTimeout(() => {
          resolve(
            context.commit(consts.SET_LOADING, {
              value: payload.value,
              index: payload.index,
            }),
            context.commit(consts.SET_STATE, {
              type: consts.SET_STATE_BOT_BUSY,
              value: false,
            })
          )
        }, 700)
      })
    },
  },
})
