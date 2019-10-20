import { createActions } from 'redux-actions'

export const INCREMENT = 'increment'
export const DECREMENT = 'decrement'

export default createActions({
  increment: (by: number = 1) => ({ by }),
  decrement: (by: number = 1) => ({ by }),
})
