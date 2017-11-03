import React, { Component } from 'react';
import CSSModules from 'react-css-modules';

import styles from './index.less';

import Title from 'Components/Container/Title';

@CSSModules(styles, { allowMultiple: true })
export default class Home extends Component {
  render() {
    return (
      <section styleName="home">
        <Title>Home</Title>
      </section>
    );
  }
}