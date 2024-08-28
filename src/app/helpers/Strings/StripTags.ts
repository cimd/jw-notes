export const stripTags = (arg: string): string => {
  return arg.replace(/<\/?[^>]+(>|$)/g, '')
}
