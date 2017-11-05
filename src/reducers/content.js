import 
  contentActions,
{
  CONTENT_SEARCH,
  CONTENT_SEARCH_REQUEST,
  CONTENT_SEARCH_RESPONSE,
  CONTENT_CREATE,
  CONTENT_UPDATE,
  CONTENT_EDIT,
  CONTENT_REMOVE,
} from 'actions/content';

const onResultSearch = (response) => {
  return {
    isLoading: false,
    items: response,
  };
};

const content = (state = {}, action) => {
  switch (action.type) {
    case CONTENT_SEARCH_RESPONSE:
      return Object.assign(
        {},
        state,
        onResultSearch(action.response),
      );
    break;
    case CONTENT_SEARCH_REQUEST:
      return Object.assign(
        {},
        state,
        { isLoading: action.isLoading }
      );
    break;
    default:
      return state;
  }
};

export default content;
