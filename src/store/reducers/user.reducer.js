import { UserTypes } from '../constant/user.types'
const intialState = {
  user: {},
  loading: false,
}

export const userReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case UserTypes.SIGN_IN_REQUEST:
      return {
        loading: true,
      }
    case UserTypes.SIGN_IN_SUCCESS:
      return {
        ...state,
        loading: false,
      }
    default:
      return state
  }
}
