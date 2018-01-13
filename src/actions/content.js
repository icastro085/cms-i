export const CONTENT_SEARCH = 'CONTENT_SEARCH';
export const CONTENT_SEARCH_REQUEST = 'CONTENT_SEARCH_REQUEST';
export const CONTENT_SEARCH_RESPONSE = 'CONTENT_SEARCH_RESPONSE';
export const CONTENT_CREATE = 'CONTENT_CREATE';
export const CONTENT_UPDATE = 'CONTENT_UPDATE';
export const CONTENT_EDIT = 'CONTENT_EDIT';
export const CONTENT_REMOVE = 'CONTENT_REMOVE';

import Content from './../services/Content';

let startedRequest;

export const search = (params, query) => (
  (dispatch) => {
    dispatch(onSearchRequest(true));
    return Content.all(params.type, query)
      .then(items => dispatch(onSearchResponse(items)))
  }
);

export const onSearchRequest = (isLoading) => (
  {
    type: CONTENT_SEARCH_REQUEST,
    isLoading,
  }
);

export const onSearchResponse = (items) => (
  {
    type: CONTENT_SEARCH_RESPONSE,
    items,
  }
);

export const create = (type, data = {}) => (
  (dispatch) => {
    dispatch(onSearchRequest(true));
    return Content.save(type, data)
      .then(data => dispatch({
        type: CONTENT_CREATE,
        data,
      }))
  }
);

export const update = (type, data = {}) => (
  (dispatch) => {
    dispatch(onSearchRequest(true));
    return Content.update(type, data)
      .then(data => dispatch({
        type: CONTENT_UPDATE,
        data,
      }))
  }
);

export const edit = (id) => (
  {
    type: CONTENT_EDIT,
    id,
  }
);

export const remove = (id) => (
  {
    type: CONTENT_DELETE,
    id,
  }
);