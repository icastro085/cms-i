import React, { Component } from 'react';
import i18n from 'i18n';

export default class I18n extends Component {
  static t = i18n.t;
  render() {
    return (
      <span>
        {i18n.t(this.props.children)}
      </span>
    );
  }
}