import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import Autobind from 'autobind-decorator';
import CKEditor from 'react-ckeditor-component';

import styles from './index.less';

import FontAwesome from './../FontAwesome';
import i18n from './../../i18n';

@CSSModules(styles, { allowMultiple: true })
export default class Form extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    if (id !== 'create') {
    }
  }

  render() {
    const { isLoading, data } = this.props;

    return (
      <form onSubmit={this.onSubmit}>
        <div className="form-group">
          <label>{i18n.t('content.create.title')}</label>
          <input
            type="text"
            name="title"
            className="form-control"
            value={data.title}
            onChange={this.onChange}/>
        </div>

        <label>{i18n.t('content.create.text')}</label>
        <CKEditor 
          activeClass="p10" 
          content={data.text} 
          events={{
            change: this.onChange,
          }}
          config={{
            height: '400',
          }}
          />

        <hr/>
        <p>
          <input
          className="btn btn-primary btn-lg"
          type="submit"
          value={i18n.t('content.create.save')}/>
        </p>
      </form>
    );
  }

  @Autobind
  onChange(e) {
    const { data } = this.props;
    if (e.editor) {
      data.text = e.editor.getData();
    } else {
      const { name, value } = e.target;
      data[name] = value
    }
  }

  @Autobind
  onSubmit(e) {
    e.preventDefault();
    const { data, create } = this.props;
    console.log(data);
    create(data);
  }
}