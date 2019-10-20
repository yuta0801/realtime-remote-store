import WebSocket from 'ws'
import { Subject, BehaviorSubject } from 'rxjs'

export const createServer = <T>(initialState: T) => {
  const receive = new Subject<T>()
  const send = new BehaviorSubject<T>(initialState)
  const server = new WebSocket.Server({ port: 8080 })

  server.on('connection', socket => {
    console.log('total clients:', server.clients.size)

    socket.on('close', () => {
      console.log('total clients:', server.clients.size)
    })

    socket.on('message', message => {
      const data = JSON.parse(message.toString())
      console.log('received:', data)
      receive.next(data)
    })

    send.subscribe({
      next: data => {
        console.log('send:', data)
        const message = JSON.stringify(data)
        socket.send(message)
      },
    })
  })

  return { receive, send }
}
