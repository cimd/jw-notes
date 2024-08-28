export const removeInvalidChars = (args: string | null | undefined) => {
  let result = args
  if (args && args.search('&nbsp;')) {
    result = args.replace(/&nbsp;/g, ' ')
  }
  return result
}
