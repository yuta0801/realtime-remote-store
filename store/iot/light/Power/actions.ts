import { createAction } from 'redux-actions'

export const TURNON = 'TURNON'
export const TURNOFF = 'TURNOFF'

const turnOn = createAction(TURNON)
const turnOff = createAction(TURNOFF)

export default {
  turnOn,
  turnOff
}
