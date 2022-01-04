import { CartTypes } from '../constant/cart.types'

const intialState = {
  data: [],
  loading: false,

  openCart: false,
}

export const cartReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case CartTypes.ADD_CART_SUCCESS:
      return {
        ...state,
      }

    case CartTypes.CHANGER_VISIBLE_MODAL_CART:
      return {
        ...state,
        openCart: !state.openCart,
      }

    case CartTypes.ADD_ITEM_CART:
      return {
        ...state,
        data: [...state.data, payload],
      }

    default:
      return state
  }
}
