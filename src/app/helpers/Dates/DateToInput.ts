import { date } from 'quasar'

const dateToInput = (dateVal: string|Date): string => {
  // console.log(typeof dateVal, dateVal)
  switch (typeof dateVal) {
  case 'string':
    return dateVal
  case 'object':
    return date.formatDate(dateVal, 'YYYY-MM-DD')
  default:
    return dateVal
  }
}

export { dateToInput }
