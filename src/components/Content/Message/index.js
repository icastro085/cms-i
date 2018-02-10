import React, { Component } from 'react';
import CSSModules from 'react-css-modules';

import I18n from './../../I18n';
import FontAwesome from './../../FontAwesome';

import styles from './index.less';

const Message = ({ text }) => (
  <p className="text-center" styleName="text-warning">
    <FontAwesome icon="exclamation-triangle"/>{' '}
    <I18n>{text}</I18n>
  </p>
);

export default CSSModules(Message, styles, { allowMultiple: true });