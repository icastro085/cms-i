import React from 'react';
import CSSModules from 'react-css-modules';

import styles from './index.less';

import i18n from './../../../i18n';

const Title = ({ children }) => (
  <div>
    <h3 styleName="title">{i18n.t(children)}</h3>
    <hr/>
  </div>
);

export default CSSModules(Title, styles, { allowMultiple: true });