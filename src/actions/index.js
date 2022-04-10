import * as actions from './actiontypes'
const {
  SUCCESS,
  REQUEST,
  FAILURE,
  ALERT_CLOSE,
  createRequestTypes,
  RENEWAL_REQUEST,
  UPDATE_STUDENT_INFO,
  GET_USER_INFO,
  GET_CLIENT_INFO,
  GET_USER_INFO_BY_CLIENTID,
  CREATE_NEW_CLIENT,
  CREATE_NEW_USER
} = actions

export const createRequestTypeHelper = createRequestTypes

export const action = (type, payload = {}) => {
  return { type, ...payload }
}
export const renewalRequest = {
  request: data => action(RENEWAL_REQUEST[REQUEST], {})
}

export const getUserMemoInfoByClientId = {
  request: data => action(GET_USER_INFO_BY_CLIENTID[REQUEST], { data }),
  success: (data, response) => {
    action(GET_USER_INFO_BY_CLIENTID[SUCCESS], { data, response })
  },
  failure: (login, error) => {
    action(GET_USER_INFO_BY_CLIENTID[FAILURE], { login, error })
  }
}

export const createNewClient = {
  request: data => action(CREATE_NEW_CLIENT[REQUEST], { data }),
  success: (data, response) => {
    action(CREATE_NEW_CLIENT[SUCCESS], { data, response })
  },
  failure: (login, error) => {
    action(CREATE_NEW_CLIENT[FAILURE], { login, error })
  }
}

export const createNewUser = {
  request: data => action(CREATE_NEW_USER[REQUEST], { data }),
  success: (data, response) => {
    action(CREATE_NEW_USER[SUCCESS], { data, response })
  },
  failure: (login, error) => {
    action(CREATE_NEW_USER[FAILURE], { login, error })
  }
}

export const updateStudentInfo = {
  request: data => action(UPDATE_STUDENT_INFO[REQUEST], { data }),
  success: (data, response) =>
    action(UPDATE_STUDENT_INFO[SUCCESS], { data, response }),
  failure: (data, error) =>
    action(UPDATE_STUDENT_INFO[FAILURE], { data, error }),
  errorClose: flg => action(ALERT_CLOSE, { flg })
}

export const getUserMemoInfo = {
  request: () => action(GET_USER_INFO[REQUEST]),
  success: (data, response) =>
    action(GET_USER_INFO[SUCCESS], { data, response }),
  failure: (login, error) => action(GET_USER_INFO[FAILURE], { login, error })
}

export const getClientInfo = {
  request: () => action(GET_CLIENT_INFO[REQUEST]),
  success: (data, response) =>
    action(GET_CLIENT_INFO[SUCCESS], { data, response }),
  failure: (login, error) => action(GET_CLIENT_INFO[FAILURE], { login, error })
}

export const actionTypes = {
  ...actions
}
