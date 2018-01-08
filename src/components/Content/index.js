import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import { HashRouter as Route, NavLink } from 'react-router-dom';

import styles from './index.less';

import Title from 'Components/Container/Title';
import FontAwesome from 'Components/FontAwesome';
import I18n from 'Components/I18n';

import Search from 'Containers/Content/Search';

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
    const { type } = this.props;

    return (
      <section styleName="content">
        <Title>{`content.${type}`}</Title>
        <NavLink
          to={`/${type}/create`}
          className="btn btn-default btn-primary pull-right"
          styleName="add-new">
          <FontAwesome icon="plus"/>{' '}
          <I18n>{`content.create.${type}`}</I18n>
        </NavLink>

        {this.props.children || null}
      </section>
    );
  }
}