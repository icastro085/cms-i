import React, { Component } from 'react';
import Content from 'Containers/Content';
import Edit from 'Containers/Content/Edit';
import { search } from 'actions/content';

export default class ContentEditWrapper extends Component {
  render() {
    const { params, url } = this.props.match;
    const { id } = params;
    const { dispatch, type } = this.props;
    //dispatch(search({ type }));

    if (id !== 'create') {
      
    }

    return (
      <Content type={type}>
        <Edit type={type} item={{}}/>
      </Content>
    );
  }
}