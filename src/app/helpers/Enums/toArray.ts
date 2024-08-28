import _startCase from 'lodash/startCase'

const toArray = (enumObj: object): any[] => {
  return Object.entries(enumObj)
    .map(([key, value]) => ({ id: value, name: _startCase(key) }))
}

export default toArray
