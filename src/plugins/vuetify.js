// Styles
import '@mdi/font/css/materialdesignicons.css'
import '@/scss/main.scss'
import MyIcons from '../customIcons/icons.js'
import { ru } from 'vuetify/locale'
// Vuetify
import { createVuetify } from 'vuetify'

const myCustomLightTheme = {
  dark: false,
  colors: {
    fontBotBold: '#388e3c',
    fontBotPrimory: '#515070',
    fontBotTyping: '#ffffff',
    backgroundBotMsg: '#ffffff',
    backgroundMain: '#ffffff',
    fontSecondary: '#7c7c7c',
    fontMyBold: '#ffffff',
    fontMyPrimory: '#f6f6f6',
    scrollColor: '#464561',
    colorOutline: '#7986cb',
    myMsgGrad1: '#615070',
    myMsgGrad2: '#5c5070',
    myMsgGrad3: '#565070',
    panelGrad1: '#ffffff',
    panelGrad2: '#ededed',
    panelGrad3: '#f8f8f8',
    gradient1: '#8988ab',
    gradient2: '#7c7ba1',
    gradient3: '#6f6e98',
    gradient4: '#65638c',
    gradient5: '#5b5a7f',
    gradient6: '#515070',
  },
}
const myCustomDarkTheme = {
  dark: true,
  colors: {
    fontBotBold: '#388e3c',
    fontBotPrimory: '#ffffff',
    fontBotTyping: '#ffffff',
    backgroundBotMsg: '#222222',
    backgroundMain: '#212121',
    fontSecondary: '#f6f6f6',
    fontMyBold: '#ffffff',
    fontMyPrimory: '#f6f6f6',
    scrollColor: '#464561',
    colorOutline: '#7986cb',
    myMsgGrad1: '#4C4B69',
    myMsgGrad2: '#464561',
    myMsgGrad3: '#403F59',
    panelGrad1: '#202020',
    panelGrad2: '#191919',
    panelGrad3: '#181818',
    gradient1: '#111111',
    gradient2: '#121212',
    gradient3: '#131313',
    gradient4: '#131313',
    gradient5: '#121212',
    gradient6: '#111111',
  },
}

export default createVuetify({
  theme: {
    defaultTheme: 'myCustomDarkTheme',
    themes: {
      myCustomLightTheme,
      myCustomDarkTheme,
    },
  },
  icons: {
    aliases: MyIcons,
  },
  locale: {
    locale: 'ru',
    messages: { ru },
  },
})
