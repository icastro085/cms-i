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
    return Content.all(params.type)
    .then(items => dispatch(onSearchResponse(items)))
  }
);

export const onSearchRequest = (isLoading) => (
  {
    type: CONTENT_SEARCH_REQUEST,
    isLoading,
  }
);

export const onSearchResponse = (response) => (
  {
    type: CONTENT_SEARCH_RESPONSE,
    response,
  }
);

export const create = (type, data = {}) => (
  (dispatch) => {
    return Content.save(type, data)
      .then(response => console.log(response))
      .catch(err => console.log(err));
  }
);

export const update = (data) => (
  {
    type: CONTENT_UPDATE,
    data,
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