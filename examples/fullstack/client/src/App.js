import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import './App.css';
import logo from './logo.svg';
import Hello from './Hello';
import Fib from './Fib';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Fib Calculator</h1>
            <Link to="/">Home</Link>
            <Link to="/hello">Hello Page</Link>
          </header>
          <div>
            <Route exact path="/" component={Fib} />
            <Route path="/hello" component={Hello} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;