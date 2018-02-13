import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import Autobind from 'autobind-decorator';

import style from './index.less';

import FontAwesome from './../../FontAwesome';

@CSSModules(style, { allowMultiple: true })
 export default class PopupChoice extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      show: props.show,
    };
  }

  componentWillReceiveProps(nextProps) {
    const { show } = nextProps;
    this.setState({
      show,
    });
  }

  @Autobind
  hidePopup() {
    const { onCancel } = this.props;

    this.setState({
      show: false,
    }, () => {
      if (typeof onCancel === 'function') {
        onCancel();
      }
    });
  }

  @Autobind
  confirm() {
    const { onConfirm } = this.props;

    this.setState({
      show: false,
    }, () => {
      if (typeof onConfirm === 'function') {
        onConfirm();
      }
    });
  }

  render() {
    const { children } = this.props;
    const { show } = this.state;

    return (
      <div styleName="container">
      {
        show &&
        (
          <div>
            <div 
              styleName="background-lock"
              onClick={this.hidePopup}></div>
            <div styleName="content-choice">
              <h4>Atenção</h4>
              <hr/>
              <p className="text-center" styleName="message">
                {children}
              </p>
              <div styleName="buttons">
                <button
                  className="btn btn-success"
                  onClick={this.confirm}>
                  <FontAwesome icon="check"/>{' '}
                  CONFIMAR</button>
                <button
                  className="btn btn-danger"
                  onClick={this.hidePopup}>
                  <FontAwesome icon="times"/>{' '}
                  CANCELAR</button>
              </div>
            </div>
          </div>
        )
      }
      </div>
    )
  }
};