import { takeLatest, all } from 'redux-saga/effects'

import { UserTypes } from '../constant/user.types'
import { signInRequest } from './user'

export default function* rootSaga() {
  return yield all([takeLatest(UserTypes.SIGN_IN_REQUEST, signInRequest)])
}
