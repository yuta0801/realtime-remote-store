import reduceReducers from 'reduce-reducers'

import { reducers as Count } from './count'

const rootReducer = reduceReducers(Count)

export default rootReducer
