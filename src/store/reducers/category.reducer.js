import { Types } from '../constant/category.types'
const intialState = {
  data: [],
  loading: false,
  selected: 'Burguers',
}

export const categoryReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case Types.READ_CATEGORY_REQUEST:
      return {
        ...state,
        loading: true,
      }
    case Types.READ_CATEGORY_SUCCESS:
      return {
        ...state,
        loading: false,
        data: payload,
      }

    case Types.CHANGER_CATEGORY_SELECTED:
      let indexItem = state.data.map(e => e.id).indexOf(payload)
      let updatedProduct = [...state.data]
      updatedProduct[indexItem].isSelected =
        !updatedProduct[indexItem].isSelected
      return {
        ...state,
        data: updatedProduct,
      }

    case Types.CHANGER_PRODUCT_TYPE:
      return {
        ...state,
        searchProduct: payload,
      }
    default:
      return state
  }
}
