import {
  CONTENT_SEARCH_REQUEST,
  CONTENT_SEARCH_RESPONSE,
  CONTENT_IS_LOADING,
} from './../actions/content';

const content = (state = {}, action) => {
  switch (action.type) {
  case CONTENT_SEARCH_RESPONSE:
    return {
      ...state,
      isLoading: false,
      items: action.items,
    };
  case CONTENT_SEARCH_REQUEST:
    return {
      ...state,
      items: [],
      isLoading: action.isLoading,
    };
  case CONTENT_IS_LOADING:
    return {
      ...state,
      isLoading: action.isLoading,
    };
  default:
    return state;
  }
};

export default content;
