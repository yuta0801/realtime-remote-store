import { createAction } from 'redux-actions'

export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'

const increment = createAction(INCREMENT, (by: number = 1) => ({ by }))
const decrement = createAction(DECREMENT, (by: number = 1) => ({ by }))

export default {
  increment,
  decrement
}
