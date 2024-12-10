import {SET_PRODUCT_FILTER_DATA,} from '../../utils/constants/ActionTypes';

export const setProductFilters = (filters) => {
  return (dispatch) => {
    dispatch({type: SET_PRODUCT_FILTER_DATA, payload: filters});
  };
};
