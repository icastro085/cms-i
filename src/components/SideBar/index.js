import React from 'react';
import CSSModules from 'react-css-modules';

import styles from './index.less';

import Item from './Item';

import config from './../../config';

const SideBar = () => {
  const { items } = config.sideBar;
  const itemsMenu = items.map((item, index) => (
    (item === 'line') ?
      <li key={index}><hr /></li> :
      <Item key={index} {...item}>{item.label}</Item>
  ));

  return (
    <div>
      <span
        styleName="side-bar-menu-button"
        className="btn btn-default"
      >
        <i className="fa fa-bars" aria-hidden="true" />
      </span>

      <div styleName="hide-content" />

      <section styleName="side-bar">
        <ul>
          {itemsMenu}
        </ul>
      </section>
    </div>
  );
};

export default CSSModules(SideBar, styles, { allowMultiple: true });
