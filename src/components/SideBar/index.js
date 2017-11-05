import React, { Component } from 'react';
import {
  HashRouter as Router, Route, Link
} from 'react-router-dom';
import CSSModules from 'react-css-modules';

import styles from './index.less';

import FontAwesome from 'Components/FontAwesome';
import I18n from 'Components/I18n';
import Item from 'Containers/SideBar/Item';

import config from 'config/environment';

@CSSModules(styles, { allowMultiple: true })
export default class SideBar extends Component {
  render() {
    const { items } = config.sideBar;
    const itemsMenu = items.map((item, index) =>
      item === 'line' ? <li key={index}><hr/></li> :
      <Item key={index} {...item}>{item.label}</Item>
    );
    return (
      <div>
        <a 
          styleName="side-bar-menu-button"
          className="btn btn-default">
          <i className="fa fa-bars" aria-hidden="true"></i>
        </a>

        <div styleName="hide-content"/>

        <section styleName="side-bar">
          <ul>
            {itemsMenu}
          </ul>
        </section>
      </div>
    );
  }
}