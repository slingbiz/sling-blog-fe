import {SET_ROUTE_CONSTANTS} from '../../utils/constants/ActionTypes';

const initialState = {
  routeConstants: {},
};

const routeConstantsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ROUTE_CONSTANTS: {
      return {...state, routeConstants: action.payload};
    }

    default: {
      return state;
    }
  }
};
export default routeConstantsReducer;
