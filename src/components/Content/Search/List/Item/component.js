import React from 'react';
import CSSModules from 'react-css-modules';

import styles from './index.less';

import i18n from './../../../../../i18n';

const Item = ({ item }) => (
  <tr>
    <td>{item.title}</td>
    <td className="text-right" styleName="operation">
      <a className="btn btn-default btn-sm">
        <i className="fa fa-pencil-square-o"/> {i18n.t('content.list.edit')}
      </a>
      <a className="btn btn-danger btn-sm">
        <i className="fa fa-trash-o"/> {i18n.t('content.list.delete')}
      </a>
    </td>
  </tr>
);

export default CSSModules(Item, styles, { allowMultiple: true });