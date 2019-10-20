import { createServer } from './transport'
import store from './store'
import initialState from './state'

const server = createServer(initialState)

server.receive.subscribe(store.in)

store.out.subscribe(server.send)
