import {
  SIDEBAR_SET_ACTIVE,
} from './../actions/sideBar';

const CURRENT_LINK = `/${window.location.hash
  .replace('#', '')
  .slice(1, -1)
  .split('/')[0]}`;

const sideBar = (state = CURRENT_LINK, action) => {
  switch (action.type) {
  case SIDEBAR_SET_ACTIVE:
    return action.link;
  default:
    return state;
  }
};

export default sideBar;
