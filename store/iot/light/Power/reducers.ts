import * as actionTypes from './actions'
import initialState from './state'
import { handleActions } from 'redux-actions'

const power = handleActions({
  [actionTypes.TURNON]: (state) => {
    return { ...state, power: true }
  },
  [actionTypes.TURNOFF]: (state) => {
    return { ...state, power: false }
  },
}, initialState)

export default { power }
