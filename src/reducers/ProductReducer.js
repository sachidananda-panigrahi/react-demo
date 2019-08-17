import {DELETE_PRODUCT} from '../actions/ActionTypes';

const initialState = {
  isFetching: false,
  productList: []
};
export function ProductReducer(state = initialState, action) {
  switch (action.type) {
    case DELETE_PRODUCT: {
      break;
    }
    default:
      return state;
  }
}
