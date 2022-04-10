import { combineReducers } from 'redux'
import { actionTypes } from '../../actions'

const {
  SUCCESS,
  REQUEST,
  FAILURE,
  GET_USER_INFO,
  GET_CLIENT_INFO,
  GET_USER_INFO_BY_CLIENTID,
  CREATE_NEW_CLIENT,
  CREATE_NEW_USER
} = actionTypes

const entity = () => {
  const isGettingUserInfoDone = (state = {}, action) => {
    switch (action.type) {
      case GET_USER_INFO[SUCCESS]:
        return action.payload
      case GET_USER_INFO[REQUEST]:
      case GET_USER_INFO[FAILURE]:
        return state
      default:
        return state
    }
  }

  const isGettingClientInfoDone = (state = {}, action) => {
    switch (action.type) {
      case GET_CLIENT_INFO[SUCCESS]:
        return action.payload
      case GET_CLIENT_INFO[REQUEST]:
      case GET_CLIENT_INFO[FAILURE]:
        return state
      default:
        return state
    }
  }

  const isGettingUserInfoByClientIdDone = (state = {}, action) => {
    switch (action.type) {
      case GET_USER_INFO_BY_CLIENTID[SUCCESS]:
        return action.payload
      case GET_USER_INFO_BY_CLIENTID[REQUEST]:
      case GET_USER_INFO_BY_CLIENTID[FAILURE]:
        return state
      default:
        return state
    }
  }

  const isCreatingNewClientDone = (state = {}, action) => {
    switch (action.type) {
      case CREATE_NEW_CLIENT[SUCCESS]:
        return action.payload
      case CREATE_NEW_CLIENT[REQUEST]:
      case CREATE_NEW_CLIENT[FAILURE]:
        return state
      default:
        return state
    }
  }

  const isCreatingNewUserDone = (state = {}, action) => {
    switch (action.type) {
      case CREATE_NEW_USER[SUCCESS]:
        return action.payload
      case CREATE_NEW_USER[REQUEST]:
      case CREATE_NEW_USER[FAILURE]:
        return state
      default:
        return state
    }
  }

  return combineReducers({
    isGettingUserInfoDone,
    isGettingClientInfoDone,
    isGettingUserInfoByClientIdDone,
    isCreatingNewClientDone,
    isCreatingNewUserDone
  })
}

export default entity

export const getUserProfile = (state, props) => state.entities.userProfile

export const getBookedSlot = (state, props) =>
  state.entities.userProfile.bookedSlot
