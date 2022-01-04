import { push } from 'connected-react-router'
import { call, put } from 'redux-saga/effects'

import api from 'src/service'

import { getProductSuccess } from '../action/product.action'

export function* getProducts({ payload }) {
  try {
    console.log('aqui')
    console.log(payload)

    const json = yield call(() =>
      fetch(`https://my-json-server.typicode.com/danielmafra/api/${payload}`)
        .then(response => response.json())
        .then(myJson => myJson),
    )

    console.log(json)
    yield put(getProductSuccess(json))
  } catch (error) {
    console.log(error)
  }
}
