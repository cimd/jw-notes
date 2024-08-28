function nameInitials(name: string): string {
  const rgx = new RegExp(/(\p{L}{1})\p{L}+/, 'gu')

  let initials = [...name.matchAll(rgx)] || []

  initials = (
    (initials.shift()?.[ 1 ] || '') + (initials.pop()?.[ 1 ] || '')
  ).toUpperCase()
  // console.log(initials)

  return initials
}

export default nameInitials
