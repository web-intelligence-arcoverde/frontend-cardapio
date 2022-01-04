import { ProductTypes } from '../constant/product.types'

export const getProductRequest = type => {
  return {
    type: ProductTypes.GET_PRODUCT_REQUEST,
    payload: type,
  }
}

export const getProductSuccess = products => {
  return {
    type: ProductTypes.GET_PRODUCT_SUCCESS,
    payload: products,
  }
}
