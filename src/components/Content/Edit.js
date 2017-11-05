import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import Autobind from 'autobind-decorator'
import TinyMCE from 'react-tinymce';

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
        <div className="form-group">
          <label>Título</label>
          <input type="text" className="form-control" placeholder="Título..."/>
        </div>

        <label>Text</label>
        <TinyMCE
          content="<p>This is the initial content of the editor</p>"
          config={{
            height: 500,
            menubar: true,
            theme: 'modern',
            statusbar : false,
            plugins: [
              'hr',
              'advlist autolink lists link image charmap print preview anchor textcolor',
              'searchreplace visualblocks code fullscreen',
              'insertdatetime media table contextmenu paste code help'
            ],
            toolbar: 'hr insert | undo redo | formatselect | bold italic backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat | help'
          }}
          onChange={this.onChangeText}
        />
      </form>
    );
  }

  @Autobind
  onChangeText(e) {
    // const text = e.target.value;
    // this.setState({ text });
    if (e.target.getContent) {
      console.log(e.target.getContent());
    }
  }

  @Autobind
  onSubmit(e) {
    e.preventDefault();
  }
}