import React, { Component } from 'react';
import {
  HashRouter as Router, Route, Link
} from 'react-router-dom';
import CSSModules from 'react-css-modules';

import styles from './index.less';

import FontAwesome from 'Components/FontAwesome';
import I18n from 'Components/I18n';
import Item from './Item';

const items = [
  { icon: 'home', link: '/', label: 'content.home' },
  { icon: 'file', link: '/content/page', label: 'content.page' },
  { icon: 'newspaper-o', link: '/content/news', label: 'content.news' },
  'line',
  { icon: 'cog', link: '/setting', label: 'content.setting' },
  { icon: 'sign-out', link: '/sign-out', label: 'content.sign-out' },
];

@CSSModules(styles, { allowMultiple: true })
export default class SideBar extends Component {
  render() {
    const itemsMenu = items.map((item, index) =>
      item === 'line' ? <li key={index}><hr/></li> :
      <Item key={index} {...item}>{item.label}</Item>
    );
    return (
      <section styleName="side-bar">
        <ul>
          {itemsMenu}
        </ul>
      </section>
    );
  }
}