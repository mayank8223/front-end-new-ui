import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import entities, * as Entities from './entities'

export const userProfileEntity = Entities.userProfileState

export default history =>
  combineReducers({
    router: connectRouter(history),
    entities
  })
