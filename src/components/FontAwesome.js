import React, { Component } from 'react';
export default class FontAwesome extends Component {
  render = () => (
    <i className={`fa fa-${this.props.icon}`}/>
  );
}