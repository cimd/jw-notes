import { date } from 'quasar'

const dateToDisplay = (dateVal: Date, withTime = false): string => {
  if (withTime) {
    return date.formatDate(dateVal, 'DD-MMM-YYYY HH:mm')
  }
  return date.formatDate(dateVal, 'DD-MMM-YYYY')
}

export { dateToDisplay }
