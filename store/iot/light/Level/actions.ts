import { createAction } from 'redux-actions'

export const LIGHTEN = 'LIGHTEN'
export const DARKEN = 'DARKEN'

const lighten = createAction(LIGHTEN, (level: number) => ({ level }))
const darken = createAction(DARKEN, (level: number) => ({ level }))

export default {
  lighten,
  darken,
}
