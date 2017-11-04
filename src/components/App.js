import React, { Component } from 'react';
import { HashRouter as Router, Route, Link, Switch } from 'react-router-dom';

import { connect } from 'react-redux';

import SideBar from './SideBar';
import Container from './Container';
import Home from './Home';
import Content from 'Containers/Content';
import * as contentActions from './../actions/content';

class App extends Component {
  render = () => (
    <Router>
      <section>
        <SideBar/>
        <Container>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/content/:type" component={ContentWrapperContainer}/>
          </Switch>
        </Container>
      </section>
    </Router>
  );
}



class ContentWrapper extends Component {
  render() {
    const { params } = this.props.match;
    const { type } = params;
    const { dispatch } = this.props;
    dispatch(contentActions.search({ type }));
    return <Content type={type} items={undefined}/>;
  }
}

const ContentWrapperContainer = connect()(ContentWrapper);

export default App;