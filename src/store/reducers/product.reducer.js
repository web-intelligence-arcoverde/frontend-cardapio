import { ProductTypes } from '../constant/product.types'
const intialState = {
  data: [],
  loading: false,
  searchProduct: 'Burguers',
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

    case ProductTypes.CHANGER_PRODUCT_SELECT:
      let indexItem = state.data.map(e => e.id).indexOf(payload)
      let updatedProduct = [...state.data]
      updatedProduct[indexItem].isSelected =
        !updatedProduct[indexItem].isSelected
      return {
        ...state,
        data: updatedProduct,
      }

    case ProductTypes.CHANGER_PRODUCT_TYPE:
      return {
        ...state,
        searchProduct: payload,
      }
    default:
      return state
  }
}
