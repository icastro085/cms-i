import React, { Component } from 'react';
import CSSModules from 'react-css-modules';

import styles from './index.less';

import I18n from 'Components/I18n';
import FontAwesome from 'Components/FontAwesome';
import Loading from 'Components/Content/Loading';

import Item from 'Containers/Content/List/Item';

@CSSModules(styles, { allowMultiple: true })
export default class List extends Component {
  render() {
    const { isLoading } = this.props;

    if (isLoading || true) {
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
                <th>Title</th>
                <th className="text-right">Options</th>
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