import React from 'react';
import { NavLink } from 'react-router-dom';
import CSSModules from 'react-css-modules';

import styles from './index.less';

import FontAwesome from './../../FontAwesome';

import i18n from './../../../i18n';

const Item = ({
  active,
  onClick,
  link,
  icon,
  children,
}) => (
  <li styleName={active ? 'active' : ''}>
    <NavLink
      onClick={onClick}
      to={link}
    >
      <FontAwesome icon={icon} />
      {i18n.t(children)}
    </NavLink>
  </li>
);

export default CSSModules(Item, styles, { allowMultiple: true });
