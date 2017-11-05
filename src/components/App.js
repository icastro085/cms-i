import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import SideBar from './SideBar';
import Container from './Container';
import Home from './Home';
import ContentWrapper from 'Containers/ContentWrapper';

class App extends Component {
  render = () => (
    <Router>
      <section>
        <SideBar/>
        <Container>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/content/:type" component={ContentWrapper}/>
          </Switch>
        </Container>
      </section>
    </Router>
  );
}

export default App;