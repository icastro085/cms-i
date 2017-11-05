import React, { Component } from 'react';
import CSSModules from 'react-css-modules';

import styles from './index.less';

import Title from 'Components/Container/Title';
import Form from 'Containers/Content/Form';
import List from 'Containers/Content/List';

@CSSModules(styles, { allowMultiple: true })
export default class Content extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { type, search, items, isLoading } = this.props;

    return (
      <section styleName="content">
        <Title>{`content.${type}`}</Title>
        <Form type={type}/>
        <hr/>
        <List items={items} isLoading={isLoading}/>
      </section>
    );
  }
}