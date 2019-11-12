import { combineReducers } from 'redux'
import { reducers as Light } from './Light'

export default combineReducers({
  ...Light,
})
