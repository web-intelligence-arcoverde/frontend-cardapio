import { ProductTypes } from '../constant/product.types'
const intialState = {
  data: [],
  loading: false,
}

export const productReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case ProductTypes.GET_PRODUCT_REQUEST:
      return {
        ...state,
        loading: true,
      }
    case ProductTypes.GET_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: false,
        data: payload,
      }
    default:
      return state
  }
}
