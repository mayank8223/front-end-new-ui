import * as RestAPI from './rest'

export const getUserMemoInfo = () => RestAPI.GET(`/users`)
export const getClientInfo = () => RestAPI.GET(`/clients`)
export const getUserMemoInfoByClientId = data =>
  RestAPI.GET(`/usersbyClientId/${data}`)
export const createNewClient = data => RestAPI.POST(`/create-client`, data)
export const createNewUser = data =>
  RestAPI.POST(`/create-user/${data.clientId}`, data)
