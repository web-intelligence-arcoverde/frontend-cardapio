import { call, put } from 'redux-saga/effects'
import { createOrderSuccess } from '../action/order.action'
import api from 'src/service'

export function* createOrder({ payload }) {
  try {
    console.log(payload)
    const data = []

    //yield put(createOrderSuccess(data))
  } catch (error) {
    console.log(error)
  }
}
