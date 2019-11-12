import store, { initialState } from './store'
import { createServer } from './transport'

const server = createServer(initialState)

server.receive.subscribe(store.in)

store.out.subscribe(server.send)
