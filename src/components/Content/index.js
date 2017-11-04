import React, { Component } from 'react';
import CSSModules from 'react-css-modules';

import styles from './index.less';

import Title from 'Components/Container/Title';

@CSSModules(styles, { allowMultiple: true })
export default class Content extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { type, search } = this.props;
    let { items } = this.props;

    if (items && items.length) {
      items = items.map((item, index) =>
        <tr key={index}>
          <td>{item.id}</td>
          <td className="text-right">{item.id}</td>
        </tr>
      );
    }

    return (
      <section styleName="content">
        <Title>{`content.${type}`}</Title>

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
      </section>
    );
  }
}