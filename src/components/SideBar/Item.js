import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import CSSModules from 'react-css-modules';

import styles from './index.less';

import FontAwesome from './../FontAwesome';
import I18n from './../I18n';

@CSSModules(styles, { allowMultiple: true })
export default class Item extends Component {
  render() {
    const { active } = this.props;
    return (
      <li styleName={active ? 'active' : ''}>
        <NavLink 
          onClick={this.props.onClick}
          to={this.props.link}>
          <FontAwesome icon={this.props.icon}/>
          <I18n>{this.props.children}</I18n>
        </NavLink>
      </li>
    );
  }
}