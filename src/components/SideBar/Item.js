import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import CSSModules from 'react-css-modules';

import styles from './index.less';

import FontAwesome from 'Components/FontAwesome';
import I18n from 'Components/I18n';

@CSSModules(styles, { allowMultiple: true })
export default class Item extends Component {
  constructor(props) {
    super(props);
    this.isActive = this.isActive.bind(this);
  }
  render() {
    const { active } = this.props;
    return (
      <li onClick={this.props.onClick} styleName={active ? 'active' : ''}>
        <FontAwesome icon={this.props.icon}/>
        <NavLink 
          to={this.props.link}
          isActive={this.isActive}>
          <I18n>{this.props.children}</I18n>
        </NavLink>
      </li>
    );
  }

  isActive(match) {
    if (!match) {
      return false
    }
    const eventID = parseInt(match.params.eventID)
    return !isNaN(eventID) && eventID % 2 === 1;
  }
}