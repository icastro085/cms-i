/*
 * action types
 */
export const SET_ACTIVE_SIDEBAR_ITEM = 'SET_ACTIVE_SIDEBAR_ITEM';

/*
 * action creators
 */
export const setActiveSideBarItem = link => ({
  type: SET_ACTIVE_SIDEBAR_ITEM,
  link,
});