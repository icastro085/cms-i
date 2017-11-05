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
    this.state = {
      text: '',
    };
  }

  render() {
    const { isLoading } = this.props;
    const { text } = this.state;
    return (
      <form onSubmit={this.onSubmit}>
        <div className="input-group">
          <span className="input-group-addon">
            <FontAwesome icon="search"/>
          </span>
          <input
            disabled={isLoading}
            name="text"
            type="text"
            value={text}
            autoComplete="off"
            className="form-control"
            placeholder={i18n.t('content.title') + '...'}
            onChange={this.onChangeText}/>
        </div>
      </form>
    );
  }

  @Autobind
  onChangeText(e) {
    const text = e.target.value;
    this.setState({ text });
  }

  @Autobind
  onSubmit(e) {
    e.preventDefault();
    const { type, search } = this.props;
    const { text } = this.state;
    const params = {
      type,
    }
    const query = {
      text,
    }
    search(params, query);
  }
}