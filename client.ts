import WebSocket from 'ws'
import { interval } from 'rxjs'
import { Action } from 'redux-actions'
import { actions } from './count'
import { take, map } from 'rxjs/operators'

const ws = new WebSocket('ws://localhost:8080')

ws.on('open', () => {
  console.log('connected')

  main()
})

ws.on('message', message => {
  const data = JSON.parse(message.toString())
  console.log(data)
})

const main = () => {
  const dispatch = (action: Action<any>) => {
    const message = JSON.stringify(action)
    ws.send(message)
  }

  interval(1000)
    .pipe(take(5))
    .pipe(map(i => i % 2 ? actions.decrement(i) : actions.increment(i)))
    .subscribe({
      next: action => dispatch(action),
      complete: () => ws.close()
    })
}
