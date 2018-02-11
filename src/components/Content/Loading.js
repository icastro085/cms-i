import React from 'react';
import CSSModules from 'react-css-modules';

import styles from './index.less';
import i18n from './../../i18n';

const Loading = () => (
  <p className="text-center">
    <i className="fa fa-circle-o-notch fa-spin"></i>
    {' '}
    {i18n.t('content.loading')}
  </p>
);

export default CSSModules(Loading, styles, { allowMultiple: true });