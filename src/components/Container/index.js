import React, { Component } from 'react';
import CSSModules from 'react-css-modules';

import styles from './index.less';

@CSSModules(styles, { allowMultiple: true })
export default class Container extends Component {
  render() {
    return (
      <section styleName="container">
        {this.props.children}
      </section>
    );
  }
}