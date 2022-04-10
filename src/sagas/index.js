/* eslint-disable no-constant-condition */
import { all } from 'redux-saga/effects'
// import { sagas as sessionSagas } from './session'
import { sagas as userSagas } from './user'

export default function* rootSaga() {
  yield all({
    ...userSagas
  })
}
