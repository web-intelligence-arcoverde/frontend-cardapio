import { call, put } from 'redux-saga/effects'
import { getProductSuccess } from '../action/product.action'

export function* getProducts({ payload }) {
  try {
    const json = yield call(() =>
      fetch(`https://my-json-server.typicode.com/danielmafra/api/${payload}`)
        .then(response => response.json())
        .then(myJson => myJson),
    )

    const data = json.map(item => {
      const newItem = {
        ...item,
        isSelected: false,
      }
      return newItem
    })

    yield put(getProductSuccess(data))
  } catch (error) {
    console.log(error)
  }
}
