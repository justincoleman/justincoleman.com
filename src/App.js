import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Home from './containers/Home/Home';
import About from './containers/About/About';
import Labs from './containers/Labs/Labs';

import './assets/styles/main.scss';
class App extends Component {
  constructor() {
    super();

    this.state = {
      activePage: 'home'
    }
  }

  componentDidMount() {
    this.onRouteChange(window.location.pathname.replace('/','').replace('/',''));
  }

  onRouteChange = (route) => {
    if (route === 'home') {
      this.setState({activePage: 'home'});
    } else if (route === 'about') {
      this.setState({activePage: 'about'});
    } else if (route === 'labs') {
      this.setState({activePage: 'labs'});
    }
    console.log("route", route);
  }


  render() {
    const { activePage } = this.state;

    return (
      <Router>
        <div>
          <Nav onRouteChange={this.onRouteChange} activePage={activePage} />

          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/labs">
              <Labs />
            </Route>
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App;
