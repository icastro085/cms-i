import React, { Component } from 'react';
import CSSModules from 'react-css-modules';

import styles from './../../index.less';

import I18n from 'Components/I18n';

@CSSModules(styles, { allowMultiple: true })
export default class Item extends Component {
  render() {
    const { item } = this.props;
    return (
      <tr>
        <td>{item.longname}</td>
        <td className="text-right" styleName="operation">
          <a className="btn btn-default btn-sm">
            <i className="fa fa-pencil-square-o"/> <I18n>content.list.edit</I18n>
          </a>
          <a className="btn btn-danger btn-sm">
            <i className="fa fa-trash-o"/> <I18n>content.list.delete</I18n>
          </a>
        </td>
      </tr>
    );
  }
}