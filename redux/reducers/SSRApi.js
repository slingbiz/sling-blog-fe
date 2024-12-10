import {
  SET_SSR_API_RESPONSE,
  SET_PRODUCT_FILTER_DATA,
} from '../../utils/constants/ActionTypes';

const initialState = {
  ssrApi: {},
  filterData: {},
};

const ssrApi = (state = initialState, action) => {
  switch (action.type) {
    case SET_SSR_API_RESPONSE: {
      return {...state, ssrApi: action.payload};
    }

    case SET_PRODUCT_FILTER_DATA:
      return {
        ...state,
        filterData: action.payload,
      };

    default: {
      return state;
    }
  }
};
export default ssrApi;
