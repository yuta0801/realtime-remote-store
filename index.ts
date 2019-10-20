import { createServer } from './transport'
import store, { initialState } from './store'

const server = createServer(initialState)

server.receive.subscribe(store.in)

store.out.subscribe(server.send)
