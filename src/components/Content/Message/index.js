import React from 'react';
import CSSModules from 'react-css-modules';

import FontAwesome from './../../FontAwesome';
import styles from './index.less';

import i18n from './../../../i18n';

const Message = ({ text }) => (
  <p className="text-center" styleName="text-warning">
    <FontAwesome icon="exclamation-triangle"/> {i18n.t(text)}
  </p>
);

export default CSSModules(Message, styles, { allowMultiple: true });