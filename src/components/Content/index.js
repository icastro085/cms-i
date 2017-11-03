import React, { Component } from 'react';
import CSSModules from 'react-css-modules';

import styles from './index.less';

import Title from 'Components/Container/Title';

@CSSModules(styles, { allowMultiple: true })
export default class Content extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { params } = this.props.match;
    const { type } = params;
    return (
      <section styleName="content">
        <Title>{`content.${type}`}</Title>
      </section>
    );
  }
}