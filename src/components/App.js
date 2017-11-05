import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import SideBar from 'Components/SideBar';
import Container from 'Components/Container';
import Home from 'Components/Home';
import ContentWrapper from 'Containers/ContentWrapper';
import ContentEditWrapper from 'Containers/ContentEditWrapper';

class App extends Component {
  render = () => (
    <Router>
      <section>
        <SideBar/>
        <Container>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/content/:type" component={ContentWrapper}/>
            <Route exact path="/content/:type/:id" component={ContentEditWrapper}/>
          </Switch>
        </Container>
      </section>
    </Router>
  );
}

export default App;