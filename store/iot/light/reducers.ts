import { combineReducers } from 'redux'
import { reducers as Power } from './Power'
import { reducers as Level } from './Level'

const light = combineReducers({
  ...Power,
  ...Level,
})

export default { light }
