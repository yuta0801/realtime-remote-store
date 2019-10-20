import { Subject } from 'rxjs'
import { scan } from 'rxjs/operators'
import reducer from './reducer'

const store = new Subject()

export default {
  in: store,
  out: store.pipe(scan(reducer, undefined)),
}
