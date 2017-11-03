import React, { Component } from 'react';
import { HashRouter as Router, Route, Link, Switch } from 'react-router-dom';

import SideBar from './SideBar';
import Container from './Container';
import Home from './Home';
import Content from './Content';

class App extends Component {
  render = () => (
    <Router>
      <section>
        <SideBar/>
        <Container>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/content/:type" component={Content}/>
          </Switch>
        </Container>
      </section>
    </Router>
  );
}

export default App;