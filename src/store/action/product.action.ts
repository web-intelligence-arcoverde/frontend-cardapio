import { ProductTypes } from '../constant/product.types'

export const getProductRequest = (type: any) => {
  return {
    type: ProductTypes.GET_PRODUCT_REQUEST,
    payload: type,
  }
}

export const getProductSuccess = (products: any) => {
  return {
    type: ProductTypes.GET_PRODUCT_SUCCESS,
    payload: products,
  }
}

export const changerProductSelected = (id: any) => {
  return {
    type: ProductTypes.CHANGER_PRODUCT_SELECT,
    payload: id,
  }
}

export const changerProductType = (type: any) => {
  return {
    type: ProductTypes.CHANGER_PRODUCT_TYPE,
    payload: type,
  }
}
