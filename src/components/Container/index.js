import React from 'react';
import CSSModules from 'react-css-modules';

import styles from './index.less';

const Container = ({ children }) => (
  <section styleName="container">
    {children}
  </section>
);

export default CSSModules(Container, styles, { allowMultiple: true });