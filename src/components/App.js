import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import _ from 'lodash';

import SideBar from './SideBar';
import Container from './Container';
import Home from './Home';
import Content from './../containers/Content';
import Search from './../containers/Content/Search';
import ContentEditWrapper from './../containers/ContentEditWrapper';

import config from './../config';

const { contents } = config;

class App extends Component {
  render = () => {
    const componetsSearch = _.map(contents, ({ type }) => (
      <Route
        key={`route-${type}`}
        exact
        path={`/${type}`}
        render={
          (props) => (
            <Content {...props} type={type} key={type}>
              <Search type={type}/>
            </Content>
          )
        }/>
    ));

    const componetsEdit = _.map(contents, ({ type }) => (
      <Route
        key={`route-${type}-edit`}
        exact
        path={`/${type}/:id`}
        render={
          (props) => <ContentEditWrapper {...props} type={type} key={`${type}-edit`}/>
        }/>
    ));

    return (
      <Router>
        <section>
          <SideBar/>
          <Container>
            <Switch>
              <Route exact path="/" component={Home}/>
              {componetsSearch}
              {componetsEdit}
            </Switch>
          </Container>
        </section>
      </Router>
    );
  };
}

export default App;