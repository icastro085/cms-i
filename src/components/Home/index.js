import React from 'react';
import CSSModules from 'react-css-modules';

import styles from './index.less';
import Title from './../Container/Title';

const Home = () => (
  <section styleName="home">
    <Title>Home</Title>
  </section>
);

export default CSSModules(Home, styles, { allowMultiple: true });
