import { combineReducers } from 'redux'
import * as userProfileState from './userProfile'

export { userProfileState }

export default combineReducers({
  userProfile: userProfileState.default()
})
