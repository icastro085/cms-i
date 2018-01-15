import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import Autobind from 'autobind-decorator';
import CKEditor from 'react-ckeditor-component';
import _ from 'lodash';
import { ToastContainer as Toast } from 'react-toastr';

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
    const { isLoading } = this.props;

    this.state = {
      data: this.setInitialField(),
      isLoading,
      isCreating: true,
    };
  }

  setInitialField() {
    let data = {};
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
    const { isLoading } = nextProps;
    const { data } = this.state;
    const data2 = nextProps.data;

    if (data2 && data2.id) {
      data.id = data2.id;
    }

    this.setState({
      data,
      isLoading,
      isCreating: false,
    });
  }

  render() {
    const { data, isLoading } = this.state;
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
                readOnly: isLoading,
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
    const { create, update, isLoading } = this.props;
    const { data } = this.state;

    if (data.id) {
      update(data)
        .then( () => this.showMessageSuccess());
    } else {
      create(data)
        .then( () => this.showMessageSuccess());
    }
  }

  showMessageSuccess() {
    this.toast.success(
      'Registro salvo com sucesso!',
      'Atenção!',
      {
        closeButton: true,
      }
    );
  }
}