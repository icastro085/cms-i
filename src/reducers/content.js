import 
  contentActions,
{
  CONTENT_SEARCH,
  CONTENT_SEARCH_RESPONSE,
  CONTENT_CREATE,
  CONTENT_UPDATE,
  CONTENT_EDIT,
  CONTENT_REMOVE,
} from 'actions/content';

const onResultSearch = (response) => {
  return {
    items: response,
  };
};

const content = (state = {}, action) => {
  switch (action.type) {
    case CONTENT_SEARCH_RESPONSE:
      return onResultSearch(action.response);
    break;
    default:
      return state;
  }
};

export default content;
