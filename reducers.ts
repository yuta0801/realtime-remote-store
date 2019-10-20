import { Actions } from './actions'
import initialState from './state'

const reducer = (state = initialState, action: Actions) => {
  switch (action.type) {
    default:
      return state
  }
}

export default reducer
