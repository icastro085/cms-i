import React, { Component } from 'react';
import CSSModules from 'react-css-modules';

import styles from './../index.less';

import I18n from 'Components/I18n';

@CSSModules(styles, { allowMultiple: true })
export default class Item extends Component {
  render() {
    const { item } = this.props;
    return (
      <tr>
        <td>{item.longname}</td>
        <td className="text-right">{item.id}</td>
      </tr>
    );
  }
}