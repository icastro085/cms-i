import React, { Component } from 'react';
import CSSModules from 'react-css-modules';

import styles from './index.less';

import I18n from 'Components/I18n';

@CSSModules(styles, { allowMultiple: true })
export default class Title extends Component {
  render() {
    return (
      <div>
        <h3 styleName="title">
          <I18n>{this.props.children}</I18n>
        </h3>
        <hr/>
      </div>
    );
  }
}