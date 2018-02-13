import React from 'react';
import CSSModules from 'react-css-modules';
import { HashRouter as Route, NavLink } from 'react-router-dom';

import styles from './index.less';

import Title from './../Container/Title';
import FontAwesome from './../FontAwesome';
import i18n from './../../i18n';

const Content = ({
  type,
  enableBtnBack,
  isLoading,
  children,
}) => (
  <section styleName="content">
    <fieldset disabled={isLoading}>
      <Title>{`content.${type}`}</Title>
      {
        enableBtnBack && 
        <NavLink
          to={`/${type}`}
          activeClassName="is-active"
          className={`btn btn-default`}
          styleName="btn-back">
          <FontAwesome icon="arrow-left"/>{' '}
          {i18n.t('content.create.back')}
        </NavLink>
      }

      <NavLink
        to={`/${type}/create`}
        className={`btn btn-primary`}
        styleName="add-new">
        <FontAwesome icon="plus"/>{' '}
        {i18n.t(`content.create.${type}`)}
      </NavLink>

    </fieldset>

    {children}
  </section>
);

export default CSSModules(Content, styles, { allowMultiple: true });