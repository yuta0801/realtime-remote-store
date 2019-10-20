import { Actions } from './actions'
import initialState from './state'

const reducer = (state = initialState, action: Actions) => {
  const by = action.by != null ? action.by : 1

  switch (action.type) {
    case 'INCREMENT':
      return { ...state, count: state.count + by }
    case 'DECREMENT':
      return { ...state, count: state.count - by }
    default:
      return state
  }
}

export default reducer
