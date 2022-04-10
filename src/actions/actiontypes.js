export const REQUEST = 'REQUEST'
export const SUCCESS = 'SUCCESS'
export const FAILURE = 'FAILURE'
export const RESET = 'RESET'

export const createRequestTypes = base => {
  return [REQUEST, SUCCESS, FAILURE, RESET].reduce((acc, type) => {
    acc[type] = `${base}_${type}`
    return acc
  }, {})
}

export const ALERT_CLOSE = 'ALERT_CLOSE'

export const RENEWAL_REQUEST = createRequestTypes('RENEWAL_REQUEST')

export const GET_USER_INFO_BY_CLIENTID = createRequestTypes(
  'GET_USER_INFO_BY_CLIENTID'
)
export const CREATE_NEW_CLIENT = createRequestTypes('CREATE_NEW_CLIENT')
export const CREATE_NEW_USER = createRequestTypes('CREATE_NEW_USER')
export const GET_USER_INFO = createRequestTypes('GET_USER_INFO')
export const GET_CLIENT_INFO = createRequestTypes('GET_CLIENT_INFO')
export const UPDATE_STUDENT_INFO = createRequestTypes('UPDATE_STUDENT_INFO')
