import { createActions } from 'redux-actions'

export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'

export default createActions({
  [INCREMENT]: (by: number = 1) => ({ by }),
  [DECREMENT]: (by: number = 1) => ({ by }),
})
