import { consts } from '@/store/consts'
import { ref } from 'vue'

export function useCommand(payload) {
  //Attributes
  //Functions
  const listCommands = (payload) => {
    const command = ref(payload.valCommand)
    if (payload.valSender === 'bot') command.value = payload.valNextMsg
    else command.value = payload.valCommand

    switch (command.value) {
      case consts.COMMAND_HELLO.name: {
        return consts.COMMAND_HELLO
      }
      case consts.COMMAND_NAME.name: {
        return consts.COMMAND_NAME
      }
      case consts.COMMAND_GUEST_NAME.name: {
        return consts.COMMAND_GUEST_NAME
      }
      case consts.COMMAND_OPTIONS.name: {
        return consts.COMMAND_OPTIONS
      }
      case consts.COMMAND_CALENDAR.name: {
        return consts.COMMAND_CALENDAR
      }
      case consts.COMMAND_CHOICE_NOTIFICATION.name: {
        return consts.COMMAND_CHOICE_NOTIFICATION
      }
      case consts.COMMAND_NOTIFICATION.name: {
        return consts.COMMAND_NOTIFICATION
      }
      case consts.COMMAND_NOTIFICATION_CONFIRM.name: {
        return consts.COMMAND_NOTIFICATION_CONFIRM
      }
      case consts.COMMAND_NOTIFICATION_CANCEL.name: {
        return consts.COMMAND_NOTIFICATION_CANCEL
      }
      case consts.COMMAND_CLOCK.name: {
        return consts.COMMAND_CLOCK
      }
      case consts.COMMAND_CHANGE_CLOCK.name: {
        return consts.COMMAND_CHANGE_CLOCK
      }
      case consts.COMMAND_CLOCK_TIME.name: {
        return consts.COMMAND_CLOCK_TIME
      }
      case consts.COMMAND_CLOCK_INSTALL.name: {
        return consts.COMMAND_CLOCK_INSTALL
      }
      case consts.COMMAND_CLOCK_UNPLUG.name: {
        return consts.COMMAND_CLOCK_UNPLUG
      }
      case consts.COMMAND_WEATHER.name: {
        return consts.COMMAND_WEATHER
      }
      case consts.COMMAND_SHOW_WEATHER.name: {
        return consts.COMMAND_SHOW_WEATHER
      }
      case consts.COMMAND_DELIVERY.name: {
        return consts.COMMAND_DELIVERY
      }
      case consts.COMMAND_LIST_FOOD.name: {
        return consts.COMMAND_LIST_FOOD
      }
      case consts.COMMAND_FOOD_PIZZA.name: {
        return consts.COMMAND_FOOD_PIZZA
      }
      case consts.COMMAND_FOOD_BURGER.name: {
        return consts.COMMAND_FOOD_BURGER
      }
      case consts.COMMAND_FOOD_WOK.name: {
        return consts.COMMAND_FOOD_WOK
      }
      case consts.COMMAND_FOOD_POTATOES.name: {
        return consts.COMMAND_FOOD_POTATOES
      }
      case consts.COMMAND_FOOD_PRODUCTS.name: {
        return consts.COMMAND_FOOD_PRODUCTS
      }
      case consts.COMMAND_FOOD_RAMEN.name: {
        return consts.COMMAND_FOOD_RAMEN
      }
      case consts.COMMAND_ABOUT.name: {
        return consts.COMMAND_ABOUT
      }
      default: {
        return consts.COMMAND_UNKNOWN
      }
    }
  }
  const commandValue = listCommands(payload)

  return commandValue
}
