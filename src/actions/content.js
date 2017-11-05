export const CONTENT_SEARCH = 'CONTENT_SEARCH';
export const CONTENT_SEARCH_REQUEST = 'CONTENT_SEARCH_REQUEST';
export const CONTENT_SEARCH_RESPONSE = 'CONTENT_SEARCH_RESPONSE';
export const CONTENT_CREATE = 'CONTENT_CREATE';
export const CONTENT_UPDATE = 'CONTENT_UPDATE';
export const CONTENT_EDIT = 'CONTENT_EDIT';
export const CONTENT_REMOVE = 'CONTENT_REMOVE';

let startedRequest;

export const search = (params, query) => (
  (dispatch) => {
    if (startedRequest) {
      clearTimeout(startedRequest);
    }

    startedRequest = setTimeout(() => {
      const items = [];
      let item;

      for(let i=0; i<10; i++) {
        item = {
          id: Math.random(),
          title: Math.random(),
          resume: Math.random(),
        };
        items.push(item)
      }

      dispatch(onSearchResponse(items));
    }, 3000)
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