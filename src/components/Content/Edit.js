import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import Autobind from 'autobind-decorator'

import styles from './index.less';

import FontAwesome from 'Components/FontAwesome';
import I18n from 'Components/I18n';
import i18n from 'i18n';

@CSSModules(styles, { allowMultiple: true })
export default class Form extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { isLoading } = this.props;

    return (
      <form onSubmit={this.onSubmit}>
        <div class="form-group">
          <label>Título</label>
          <input type="text" class="form-control" placeholder="Título..."/>
        </div>
      </form>
    );
  }

  @Autobind
  onChangeText(e) {
    // const text = e.target.value;
    // this.setState({ text });
  }

  @Autobind
  onSubmit(e) {
    e.preventDefault();
  }
}