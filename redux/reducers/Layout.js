import {
  SET_LAYOUT,
  SET_PAGE_TEMPLATE,
} from '../../utils/constants/ActionTypes';

const initialState = {
  layoutConfig: null,
  pageTemplate: null,
};

const layoutReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LAYOUT: {
      return {...state, layoutConfig: action.payload};
    }

    case SET_PAGE_TEMPLATE: {
      return {...state, pageTemplate: action.payload};
    }

    default: {
      return state;
    }
  }
};
export default layoutReducer;
