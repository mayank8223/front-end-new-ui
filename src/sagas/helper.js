import { put } from 'redux-saga/effects'
import { actionTypes } from '../actions'
const { SUCCESS, FAILURE } = actionTypes

export function* sendPayload(apiResponse, event) {
  yield put({
    type: apiResponse.data.success ? event[SUCCESS] : event[FAILURE],
    payload: apiResponse.data
      ? apiResponse.data.success
        ? apiResponse.data.data
        : apiResponse.data.error
      : {}
  })
}

export function* sendPayloadFirebase(apiResponse, event) {
  if (apiResponse) {
    yield put({
      type: apiResponse.data.success ? event[SUCCESS] : event[FAILURE],
      payload: apiResponse.data
        ? apiResponse.data.success
          ? apiResponse.data.data
          : apiResponse.data.error
        : {}
    })
  }
}

export function* sendPayloadFailure(error, event) {
  if (error.response) {
    yield put({
      type: event[FAILURE],
      payload: error.response.data ? error.response.data.error : {}
    })
  } else {
    yield put({
      type: event[FAILURE],
      payload: error.error
    })
  }
}
