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

const onResultSearch = (items) => {
  return {
    isLoading: false,
    items,
  };
};

const content = (state = {}, action) => {
  switch (action.type) {
    case CONTENT_SEARCH_RESPONSE:
      return Object.assign(
        {},
        state,
        onResultSearch(action.items),
      );
    break;
    case CONTENT_SEARCH_REQUEST:
      return Object.assign(
        {},
        state,
        { isLoading: action.isLoading }
      );
    break;
    case CONTENT_CREATE:
    case CONTENT_UPDATE:
      return Object.assign(
        {},
        state,
        { data: Object.assign({}, action.data) }
      );
    break;
    default:
      return state;
  }
};

export default content;
