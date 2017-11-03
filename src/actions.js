/*
 * action types
 */
export const SIDEBAR_SET_ACTIVE = 'SIDEBAR_SET_ACTIVE';

/*
 * action creators
 */
export const setActiveSideBarItem = link => ({
  type: SIDEBAR_SET_ACTIVE,
  link,
});