import WebSocket from 'ws'
import { Action } from 'redux-actions'
import { actions } from './store/iot'

const ws = new WebSocket('ws://localhost:8080')

ws.on('open', () => {
  console.log('connected')

  main()
})

ws.on('message', message => {
  const data = JSON.parse(message.toString())
  console.log('received:', data)
})

const main = async () => {
  const dispatch = (action: Action<any>) => {
    console.log('send:', action)
    const message = JSON.stringify(action)
    ws.send(message)
  }
  const sleep = () => new Promise(r => setTimeout(r, 1000))

  await sleep()
  dispatch(actions.Light.Power.turnOn())
  await sleep()
  dispatch(actions.Light.Level.lighten(3))
  await sleep()
  dispatch(actions.Light.Level.darken())
  await sleep()
  dispatch(actions.Light.Power.turnOff())
}
