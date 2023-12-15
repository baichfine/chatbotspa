import { reactive, computed } from 'vue'
import { useStore } from 'vuex'
import { consts } from '@/store/consts'
import { useTheme } from 'vuetify'
import { useMessage } from '@/use/message'

function createObj() {
  const store = useStore()
  const theme = useTheme()
  //Arrays

  //States
  const stTheme = computed(() => store.getters.stTheme)
  //Values

  //Hooks
  const msg = useMessage({
    bot: {},
  })
  //Local consts

  //Functions
  const toggleTheme = () => {
    theme.global.name.value = theme.global.current.value.dark
      ? 'myCustomLightTheme'
      : 'myCustomDarkTheme'
    store.commit(consts.SET_STATE, {
      type: consts.SET_STATE_THEME,
      value: !stTheme.value,
    })
  }
  const updateChat = () => {
    var themeNew
    if (theme.global.name.value === 'myCustomDarkTheme') themeNew = false
    else themeNew = true
    console.log(themeNew)
    store.commit(consts.UPDATE_CHAT, themeNew)
    msg.bot.startWatchers()
  }
  return {
    stTheme,
    toggleTheme,
    updateChat,
  }
}

export function useSettings(init = {}) {
  const settings = reactive({})

  for (const [key, value] of Object.entries(init)) {
    settings[key] = createObj(value)
  }
  return settings
}
