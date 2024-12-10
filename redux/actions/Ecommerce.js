import {
  FETCH_ERROR,
  FETCH_START,
  FETCH_SUCCESS,
  SET_FILTER_DATA,
  SET_PRODUCT_DATA,
  SET_PRODUCT_VIEW_TYPE,
} from '../../utils/constants/ActionTypes';
import Api from '../../utils/services/ApiConfig';

export const getProductDetail = (id) => {
  return (dispatch) => {
    dispatch({type: FETCH_START});
    Api.get('/api/product/get', {
      params: {id: id},
    })
      .then((data) => {
        if (data.status === 200) {
          dispatch({type: FETCH_SUCCESS});
          dispatch({type: SET_PRODUCT_DATA, payload: data.data});
        } else {
          dispatch({
            type: FETCH_ERROR,
            payload: 'Something went wrong, Please try again!',
          });
        }
      })
      .catch((error) => {
        dispatch({type: FETCH_ERROR, payload: error.message});
      });
  };
};

export const setViewType = (viewType) => {
  return (dispatch) => {
    dispatch({type: SET_PRODUCT_VIEW_TYPE, payload: viewType});
  };
};

export const setFilters = (filters) => {
  return (dispatch) => {
    dispatch({type: SET_FILTER_DATA, payload: filters});
  };
};
