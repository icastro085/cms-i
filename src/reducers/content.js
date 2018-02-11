import {
  CONTENT_SEARCH,
  CONTENT_SEARCH_REQUEST,
  CONTENT_SEARCH_RESPONSE,
  CONTENT_CREATE,
  CONTENT_UPDATE,
  CONTENT_EDIT,
  CONTENT_REMOVE,
  CONTENT_IS_LOADING,
} from 'actions/content';

const content = (state = {}, action) => {
  switch (action.type) {
    case CONTENT_SEARCH_RESPONSE:
      return {
        ...state,
        isLoading: false,
        items: action.items,
      };
    break;
    case CONTENT_SEARCH_REQUEST:
      return {
        ...state,
        items: [],
        isLoading: action.isLoading,
      };
    break;
    case CONTENT_IS_LOADING:
      return {
        ...state,
        isLoading: action.isLoading,
      };
    break;
    default:
      return state;
  }
};

export default content;
