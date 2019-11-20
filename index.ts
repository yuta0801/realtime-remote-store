import { Store } from 'redux'
import { from, PartialObserver, Subscribable } from 'rxjs'

interface Transport {
  send: PartialObserver<unknown>,
  receive: Subscribable<unknown>,
}

interface Options {
  store: Store,
  transport: (initialState: unknown) => Transport,
}

const create = ({ store, transport }: Options) => {
  const transport$ = transport(store.getState())
  const store$ = { in: store.dispatch, out: from(store) }

  transport$.receive.subscribe(store$.in)
  store$.out.subscribe(transport$.send)
}

export default create
