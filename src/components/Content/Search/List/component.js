import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import _ from 'lodash';

import styles from './index.less';

import I18n from './../../../I18n';
import FontAwesome from './../../../FontAwesome';
import Loading from './../../Loading';
import Message from './../../Message';

import Item from './Item';

@CSSModules(styles, { allowMultiple: true })
export default class List extends Component {
  render() {
    const { isLoading } = this.props;

    if (isLoading) {
      return <Loading/>;
    }

    let { items } = this.props;

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
                <th><I18n>content.list.title</I18n></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {items}
            </tbody>
          </table>
        </div>
    );
  }
}