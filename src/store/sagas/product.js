import { push } from 'connected-react-router'
import { call, put } from 'redux-saga/effects'

import api from 'src/service'

import { getProductSuccess } from '../action/product.action'

export function* getProducts({ payload }) {
  try {
    console.log('aqui')
    console.log(payload)

    const response = yield call(
      fetch(`https://my-json-server.typicode.com/danielmafra/api/${category}`),
    )
    const json = response.json()

    console.log(json)

    getProductSuccess(json)
  } catch (error) {
    console.log(error)
  }
}
