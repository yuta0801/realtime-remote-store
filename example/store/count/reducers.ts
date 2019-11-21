import actions, * as actionTypes from './actions'
import initialState from './state'
import { handleActions, ActionMaps } from 'redux-actions'

type Actions = ActionMaps<typeof actions>

const reducers = handleActions({
  [actionTypes.INCREMENT]: (state, { payload }: Actions['increment']) => {
    return { ...state, count: state.count + payload.by }
  },
  [actionTypes.DECREMENT]: (state, { payload }: Actions['decrement']) => {
    return { ...state, count: state.count - payload.by }
  },
}, initialState)

export default reducers
