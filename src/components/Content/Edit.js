import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import Autobind from 'autobind-decorator';
import CKEditor from 'react-ckeditor-component';
import _ from 'lodash';

import styles from './index.less';

import FontAwesome from './../FontAwesome';
import i18n from './../../i18n';

const defaultFields = [
  'title',
  'text',
];

@CSSModules(styles, { allowMultiple: true })
export default class Form extends Component {

  constructor(props) {
    super(props);
    const { data, isLoading } = this.props;
    this.state = {
      data: this.setInitialField(data),
      isLoading,
    };
  }

  setInitialField(data) {
    _.each(defaultFields, field => (
      typeof data[field] === undefined ? null : data[field] = '')
    );
    return data;
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    if (id !== 'create') {
      //TODO: get data
    }
  }

  componentWillReceiveProps(nextProps) {
    const {
      data,
      isLoading,
    } = nextProps;
    this.setState({
      data,
      isLoading,
    });
  }

  render() {
    const { data, isLoading } = this.state;

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
    const { data } = this.state;
    if (e.editor) {
      data.text = e.editor.getData();
    } else {
      const { name, value } = e.target;
      data[name] = value;
    }

    this.setState({ data });
  }

  @Autobind
  onSubmit(e) {
    e.preventDefault();
    const { create } = this.props;
    const { data } = this.state;
    create(data);
  }
}