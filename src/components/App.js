import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import _ from 'lodash';

import SideBar from './SideBar';
import Container from './Container';
import Home from './Home';
import Content from './Content';
import Search from './Content/Search';
import Edit from './Content/Edit';

import config from './../config';

const { contents } = config;

const componetsSearch = _.map(contents, ({ type }) => (
  <Route
    key={`route-${type}`}
    exact
    path={`/${type}`}
    render={
      (props) => (
        <Content {...props} type={type}>
          <Search {...props} type={type}/>
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
      (props) => (
        <Content {...props} type={type} isEdit={true}>
          <Edit {...props} type={type}/>
        </Content>
      )
    }/>
));

const App = () => (
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

export default App;