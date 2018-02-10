import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import Autobind from 'autobind-decorator'

import styles from './index.less';

import FontAwesome from './../../FontAwesome';
import Form from './Form';
import List from './List';

@CSSModules(styles, { allowMultiple: true })
export default class Search extends Component {
  render() {
    const { type } = this.props;
    return (
      <div>
        <Form type={type}/>
        <hr/>
        <List type={type}/>
      </div>
    );
  }
}