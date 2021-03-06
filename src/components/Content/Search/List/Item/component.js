import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import { withRouter } from 'react-router-dom';
import Autobind from 'autobind-decorator';

import styles from './index.less';

import i18n from './../../../../../i18n';
import PopupChoice from './../../../PopupChoice';

class Item extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showPopupRemove: false,
    };
  }

  @Autobind
  onConfirm() {
    this.hidePopupRemove();
    console.log('confirm');
  }

  @Autobind
  hidePopupRemove() {
    this.setState({
      showPopupRemove: false,
    });
  }

  @Autobind
  showPopupRemove() {
    this.setState({
      showPopupRemove: true,
    });
  }

  render() {
    const {
      item,
      edit,
      history,
    } = this.props;
    const { showPopupRemove } = this.state;

    return (
      <tr>
        <td>{item.title}</td>
        <td className="text-right" styleName="operation">
          <a 
            className="btn btn-default btn-sm" 
            onClick={() => edit(history)}>
            <i className="fa fa-pencil-square-o"/>
            <span>{i18n.t('content.list.edit')}</span>
          </a>

          <a 
            className="btn btn-danger btn-sm"
            onClick={this.showPopupRemove}>
            <i className="fa fa-trash-o"/>
            <span>{i18n.t('content.list.delete')}</span>
          </a>

          <PopupChoice
            show={showPopupRemove}
            onCancel={this.hidePopupRemove}
            onConfirm={this.onConfirm}>
            Deseja remove esse conteúdo?<br/>{item.title}
          </PopupChoice>
        </td>
      </tr>
    );
  };
}

export default withRouter(CSSModules(Item, styles, { allowMultiple: true }));
