import React, { Component } from 'react';
import CSSModules from 'react-css-modules';

import styles from './../index.less';

import I18n from './../../I18n';
import FontAwesome from './../../FontAwesome';
import Loading from './../Loading';

import Item from './../../../containers/Content/Search/List/Item';

@CSSModules(styles, { allowMultiple: true })
export default class List extends Component {
  render() {
    const { isLoading } = this.props;

    if (isLoading) {
      return <Loading/>;
    }

    let { items } = this.props;
    
    if (items && items.length) {
      items = items.map((item, index) =>
        <Item key={index} item={item}/>
      );
    }

    return (
      <div className="table-responsive">
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