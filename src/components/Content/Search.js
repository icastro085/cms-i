import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import Autobind from 'autobind-decorator'

import styles from './index.less';

import FontAwesome from 'Components/FontAwesome';
import Form from 'Containers/Content/Search/Form';
import List from 'Containers/Content/Search/List';

@CSSModules(styles, { allowMultiple: true })
export default class Search extends Component {
  render() {
    const { type, items, isLoading } = this.props;
    return (
      <div>
        <Form type={type}/>
        <hr/>
        <List type={type} items={items} isLoading={isLoading}/>
      </div>
    );
  }
}