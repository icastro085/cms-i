import React, { Component } from 'react';
import Content from 'Containers/Content';
import { search } from './../actions/content';
import Search from 'Containers/Content/Search';

import { HashRouter as Route, NavLink } from 'react-router-dom';

export default class ContentWrapper extends Component {
  render() {
    const { params, url } = this.props.match;
    const { type } = params;
    const { dispatch } = this.props;
    dispatch(search({ type }));
    return (
      <Content type={type}>
        <Search type={type}/>
      </Content>
    );
  }
}