import { call, takeLatest } from 'redux-saga/effects'
import { actionTypes } from '../actions'
import * as ApiService from '../services'
import { sendPayload, sendPayloadFailure } from './helper'

const {
  REQUEST,
  REQUEST_SESSION_FEEDBACK,
  GET_USER_INFO,
  GET_CLIENT_INFO,
  GET_USER_INFO_BY_CLIENTID,
  CREATE_NEW_CLIENT,
  CREATE_NEW_USER
} = actionTypes

function* handleUserInfoByClientIdRequest({ data }) {
  try {
    const apiResponse = yield call(ApiService.getUserMemoInfoByClientId, data)
    yield sendPayload(apiResponse, GET_USER_INFO_BY_CLIENTID)
  } catch (e) {
    yield sendPayloadFailure(e, GET_USER_INFO_BY_CLIENTID)
  }
}

function* handleCreateNewClientRequest({ data }) {
  try {
    const apiResponse = yield call(ApiService.createNewClient, data)
    yield sendPayload(apiResponse, CREATE_NEW_CLIENT)
  } catch (e) {
    yield sendPayloadFailure(e, CREATE_NEW_CLIENT)
  }
}

function* handleCreateNewUserRequest({ data }) {
  try {
    const apiResponse = yield call(ApiService.createNewUser, data)
    yield sendPayload(apiResponse, CREATE_NEW_USER)
  } catch (e) {
    yield sendPayloadFailure(e, CREATE_NEW_USER)
  }
}

function* handleUserMemoInfoRequest({ data }) {
  try {
    const apiResponse = yield call(ApiService.getUserMemoInfo, data)
    yield sendPayload(apiResponse, GET_USER_INFO)
  } catch (e) {
    yield sendPayloadFailure(e, GET_USER_INFO)
  }
}

function* handleClientInfoRequest({ data }) {
  try {
    const apiResponse = yield call(ApiService.getClientInfo, data)
    yield sendPayload(apiResponse, GET_CLIENT_INFO)
  } catch (e) {
    yield sendPayloadFailure(e, GET_CLIENT_INFO)
  }
}

export const sagas = {
  watchUserMemoInfoRequest: takeLatest(
    GET_USER_INFO[REQUEST],
    handleUserMemoInfoRequest
  ),
  watchClientInfoRequest: takeLatest(
    GET_CLIENT_INFO[REQUEST],
    handleClientInfoRequest
  ),
  watchUserInfoByClientIdRequest: takeLatest(
    GET_USER_INFO_BY_CLIENTID[REQUEST],
    handleUserInfoByClientIdRequest
  ),
  watchCreateNewClientRequest: takeLatest(
    CREATE_NEW_CLIENT[REQUEST],
    handleCreateNewClientRequest
  ),
  watchCreateNewUserRequest: takeLatest(
    CREATE_NEW_USER[REQUEST],
    handleCreateNewUserRequest
  )
}
