import { UserTypes } from '../constant/user.types'

export const signInRequest = user => {
  return {
    type: UserTypes.SIGN_IN_REQUEST,
    payload: user,
  }
}

export const signInSuccess = user => {
  return {
    type: UserTypes.SIGN_IN_SUCCESS,
    payload: user,
  }
}
