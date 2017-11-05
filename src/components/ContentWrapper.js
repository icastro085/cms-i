import React, { Component } from 'react';
import Content from 'Containers/Content';
import { search, onSearchRequest } from './../actions/content';

export default class ContentWrapper extends Component {
  render() {
    const { params } = this.props.match;
    const { type } = params;
    const { dispatch } = this.props;
    dispatch(search({ type }));
    dispatch(onSearchRequest(true));
    return <Content type={type} items={undefined}/>;
  }
}