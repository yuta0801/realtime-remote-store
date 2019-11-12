import actions, * as actionTypes from './actions'
import initialState from './state'
import { handleActions, ActionMaps } from 'redux-actions'

type Actions = ActionMaps<typeof actions>

const level = handleActions({
  [actionTypes.LIGHTEN]: (state, { payload }: Actions['lighten']) => {
    return { ...state, lightness: state.lightness + (payload.level || 1) }
  },
  [actionTypes.DARKEN]: (state, { payload }: Actions['darken']) => {
    return { ...state, lightness: state.lightness - (payload.level || 1) }
  },
}, initialState)

export default { level }
