import { createServer } from './transport'
import store from './store'

// TODO: Use correct initial state
const server = createServer(null)

server.receive.subscribe(store.in)

store.out.subscribe(server.send)
