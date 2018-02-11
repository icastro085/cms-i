import React from 'react';
import CSSModules from 'react-css-modules';
import _ from 'lodash';

import styles from './index.less';

import FontAwesome from './../../../FontAwesome';
import Loading from './../../Loading';
import Message from './../../Message';

import Item from './Item';

import i18n from './../../../../i18n';

const List = ({ isLoading, items }) => {
  if (isLoading) {
    return <Loading/>;
  }

  if (_.isEmpty(items)) {
    return <Message text="content.list.not-found"/>;
  } else {
    items = items.map((item, index) =>
      <Item key={index} item={item}/>
    );
  }

  return (
    <div className="table-responsive" styleName="list">
        <table className="table table-hover">
          <thead>
            <tr>
              <th>{i18n.t('content.list.title')}</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {items}
          </tbody>
        </table>
      </div>
  );
};

export default CSSModules(List, styles, { allowMultiple: true });