import { variable } from './environments'
const ENV = process.env.REACT_APP_ENV || 'development'

const envConfig = variable[ENV]

console.log(`${ENV}`)

export const config = Object.assign(
  {
    env: ENV
  },
  envConfig
)
