import React, { Component } from 'react';
import CSSModules from 'react-css-modules';

import styles from './index.less';

@CSSModules(styles, { allowMultiple: true })
export default class Loading extends Component {
  render() {
    return (
      <p className="text-center">
        <i className="fa fa-circle-o-notch fa-spin" aria-hidden="true"></i>
        {' '}
        Carregando
      </p>
    );
  }
}