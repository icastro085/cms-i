export const CONTENT_SEARCH = 'CONTENT_SEARCH';
export const CONTENT_SEARCH_RESPONSE = 'CONTENT_SEARCH_RESPONSE';
export const CONTENT_CREATE = 'CONTENT_CREATE';
export const CONTENT_UPDATE = 'CONTENT_UPDATE';
export const CONTENT_EDIT = 'CONTENT_EDIT';
export const CONTENT_REMOVE = 'CONTENT_REMOVE';

export const search = (params, query) => (
  (dispatch) => 
    setTimeout(() => {
      dispatch(onSearchResponse([{id: 1111}]))
    }, 3000)
);

export const onSearchResponse = (response) => (
  {
    type: CONTENT_SEARCH_RESPONSE,
    response,
  }
);

export const create = (data) => (
  {
    type: CONTENT_CREATE,
    data,
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