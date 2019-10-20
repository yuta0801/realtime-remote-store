import { createServer } from './transport'
import store from './store'

const server = createServer()

server.receive.subscribe(store.in)

store.out.subscribe(server.send)
