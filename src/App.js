import React, { Component } from 'react';
import Nav from './components/Nav/Nav';
import Home from './containers/Home/Home';
import About from './containers/About/About';
import Labs from './containers/Labs/Labs';

import './assets/styles/main.scss';
// import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      view: <Home />,
      activePage: 'home'
    }
  }

  onRouteChange = (route) => {
    if (route === 'home') {
      this.setState({activePage: 'home'});
      this.setState({view: <Home />});
    } else if (route === 'about') {
      this.setState({activePage: 'about'});
      this.setState({view: <About />});
    } else if (route === 'labs') {
      this.setState({activePage: 'labs'});
      this.setState({view: <Labs />});
    }

    // this.setState({route: route})
  }

  render() {
    const { view, activePage } = this.state;

    // if (route === 'home') {
    //   view = <Home />;
    // } else if (route === 'about') {
    //   view = <About />;
    // } else if (route === 'labs') {
    //   view = <Labs />;
    // }
    
    return (
      <div>
        <Nav onRouteChange={this.onRouteChange} activePage={activePage} />
        {view}
      </div>
    )
  }
}

export default App;
