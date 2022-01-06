import { OrderTypes } from '../constant/order.types'

export const createOrderRequest = order => {
  return {
    type: OrderTypes.CREATE_ORDER_REQUEST,
    payload: order,
  }
}

export const createOrderSuccess = order => {
  return {
    type: OrderTypes.CREATE_ORDER_SUCCESS,
    payload: order,
  }
}
