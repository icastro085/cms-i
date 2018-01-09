import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import { HashRouter as Route, NavLink } from 'react-router-dom';

import styles from './index.less';

import Title from './../Container/Title';
import FontAwesome from './../FontAwesome';
import I18n from './../I18n';

@CSSModules(styles, { allowMultiple: true })
export default class Content extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { type, search } = this.props;
    search({ type });
  }

  render() {
    const { type, enableBtnBack } = this.props;

    return (
      <section styleName="content">
        <Title>{`content.${type}`}</Title>
        {
          enableBtnBack && 
          (
            <NavLink
              to={`/${type}`}
              className="btn btn-success"
              styleName="btn-back">
              <FontAwesome icon="arrow-left"/>{' '}
              <I18n>{'content.create.back'}</I18n>
            </NavLink>
          )
        }
        <NavLink
          to={`/${type}/create`}
          className="btn btn-primary"
          styleName="add-new">
          <FontAwesome icon="plus"/>{' '}
          <I18n>{`content.create.${type}`}</I18n>
        </NavLink>

        {this.props.children || null}
      </section>
    );
  }
}