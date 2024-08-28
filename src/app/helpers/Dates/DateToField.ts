import { format } from 'quasar'

const { pad } = format

export const dateToField = (arg: Date): string => {
  const day: string = arg.getDate().toString()
  const month: string = (arg.getMonth() + 1).toString()
  const year: string = arg.getFullYear().toString()
  return 'd' + pad(day, 2) + 'm' + pad(month, 2) + 'y' + year
}
