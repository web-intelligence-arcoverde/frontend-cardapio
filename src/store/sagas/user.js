import { push } from 'connected-react-router'
import { call, put } from 'redux-saga/effects'

import { signInSuccess } from '../action/user.action'
import api from 'src/service'

export function* signInRequest({ payload }) {
  try {
    const { data } = yield call(api.post, 'users/register', payload)

    //yield put(push('/cardapio'))
  } catch (error) {
    console.log(error)
  }
}
