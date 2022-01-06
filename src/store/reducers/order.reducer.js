import { OrderTypes } from '../constant/order.types'

const intialState = {
  data: [],
  status: 'enviado',
  loading: false,
}

export const orderReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case OrderTypes.CREATE_ORDER_REQUEST:
      return {
        ...state,
        loading: true,
      }

    case OrderTypes.CREATE_ORDER_SUCCESS:
      return {
        ...state,
        data: payload,
        loading: false,
      }

    default:
      return state
  }
}
