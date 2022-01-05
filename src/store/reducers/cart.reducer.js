import { CartTypes } from '../constant/cart.types'

const intialState = {
  data: [],
  loading: false,

  openCart: false,
  total: 0,
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
      var value = state.total + payload.price
      return {
        ...state,
        data: [...state.data, payload],
        total: value,
      }

    case CartTypes.INCREMENT_ITEM_CART:
      let indexItem = state.data.map(e => e.id).indexOf(payload)
      let updatedCart = [...state.data]
      updatedCart[indexItem].quantity = updatedCart[indexItem].quantity + 1
      updatedCart[indexItem].currentPrice =
        updatedCart[indexItem].currentPrice + updatedCart[indexItem].price
      var value = state.total + updatedCart[indexItem].price
      return {
        ...state,
        data: updatedCart,
        total: value,
      }

    case CartTypes.DECREMENT_ITEM_CART:
      let index = state.data.map(e => e.id).indexOf(payload)
      let updateCart = [...state.data]
      var value = state.total - updateCart[index].price
      updateCart[index].quantity = updateCart[index].quantity - 1
      updateCart[index].currentPrice =
        updateCart[index].currentPrice - updateCart[index].price
      if (updateCart[index].quantity === 0) {
        updateCart[index].isSelected = false
        updateCart.splice(index, 1)
      }

      return {
        ...state,
        data: updateCart,
        total: value,
      }

    default:
      return state
  }
}
