import { CartTypes } from '../constant/cart.types'

export const changerVisibleModalCart = () => {
  return {
    type: CartTypes.CHANGER_VISIBLE_MODAL_CART,
  }
}

export const addItemCart = item => {
  return {
    type: CartTypes.ADD_ITEM_CART,
    payload: item,
  }
}

export const incrementItemCart = item => {
  return {
    type: CartTypes.INCREMENT_ITEM_CART,
    payload: item,
  }
}

export const decrementItemCart = item => {
  return {
    type: CartTypes.DECREMENT_ITEM_CART,
    payload: item,
  }
}
