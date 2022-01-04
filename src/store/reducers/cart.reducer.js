import { CartTypes } from '../constant/cart.types'
const intialState = {
  data: [],
  loading: false,
}

export const cartReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case CartTypes.ADD_CART_SUCCESS:
      return {
        ...state,
      }
    default:
      return state
  }
}
