import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import Autobind from 'autobind-decorator';
import CKEditor from 'react-ckeditor-component';
import _ from 'lodash';
import { ToastContainer as Toast } from 'react-toastr';

import styles from './index.less';

import FontAwesome from './../../FontAwesome';
import i18n from './../../../i18n';

const defaultFields = [
  'title',
  'text',
];

@CSSModules(styles, { allowMultiple: true })
export default class Form extends Component {

  constructor(props) {
    super(props);

    this.state = {
      data: this.getInitialField(),
    };
  }

  getInitialField() {
    let data = {};
    _.each(defaultFields, field => (
      typeof data[field] === undefined ? null : data[field] = '')
    );
    return data;
  }

  componentDidMount() {
    const { search, id } = this.props;
    if (id && id !== 'create') {
      search(id)
        .then(data => this.setState({ data }));
    }
  }

  render() {
    const { data } = this.state;
    const { isLoading } = this.props;

    return (
      <section>
        <Toast
            ref={ref => this.toast = ref}
            className="toast-top-right"/>
        <form onSubmit={this.onSubmit}>

          <fieldset disabled={isLoading}>
            <div className="form-group">
              <label>{i18n.t('content.create.title')}</label>
              <input
                type="text"
                name="title"
                className={`form-control ${isLoading ? 'disabled' : ''}`}
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
              className={`btn btn-success btn-lg`}
              type="submit"
              value={i18n.t(`content.create.${data.id ? 'update' : 'save'}`)}/>
            </p>
            <hr/>
          </fieldset>
        </form>
      </section>
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
    const { create, update } = this.props;
    const { data } = this.state;

    if (data.id) {
      update(data).then(this.onResult);
    } else {
      create(data).then(this.onResult);
    }
  }

  @Autobind
  onResult({ id }) {
    const { data } = this.state;
    data.id = id;
    this.showMessageSuccess();
    this.setState({ data });
  }

  showMessageSuccess() {
    this.toast.success(
      i18n.t('content.create.message.saved'),
      i18n.t('content.create.message.title'),
      {
        closeButton: true,
      }
    );
  }
}