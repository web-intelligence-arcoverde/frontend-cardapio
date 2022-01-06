import { takeLatest, all } from 'redux-saga/effects'

import { UserTypes } from '../constant/user.types'
import { signInRequest } from './user'

import { ProductTypes } from '../constant/product.types'
import { getProducts } from './product'

import { OrderTypes } from '../constant/order.types'
import { createOrder } from './order'

export default function* rootSaga() {
  return yield all([
    takeLatest(UserTypes.SIGN_IN_REQUEST, signInRequest),
    takeLatest(ProductTypes.GET_PRODUCT_REQUEST, getProducts),

    takeLatest(OrderTypes.CREATE_ORDER_REQUEST, createOrder),
  ])
}
