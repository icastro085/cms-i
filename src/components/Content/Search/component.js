import React from 'react';
import CSSModules from 'react-css-modules';
import Autobind from 'autobind-decorator'

import styles from './index.less';

import FontAwesome from './../../FontAwesome';
import Form from './Form';
import List from './List';

const Search = ({ type }) => (
  <div>
    <Form type={type}/>
    <hr/>
    <List type={type}/>
  </div>
);

export default CSSModules(Search, styles, { allowMultiple: true });