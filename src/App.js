import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
// import Footer from './components/Footer'
// import AddTodo from './containers/AddTodo'
// import VisibleTodoList from './containers/VisibleTodoList'

// type 0/red 1/green 2/blue
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

import Login from './pages/login'
import CreateAccount from './pages/CreateAccount'
import Home from './pages/Home'


class App extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    let token
    try {
      token = window.localStorage.getItem('horse-token')
    } catch (e) { }

    if (!token && (!/\S\/login/.test(window.location.href) || /\S\/login\S/.test(window.location.href))) {
      window.location.href = '/login';
    }
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Home} />
          {/* both /roster and /roster/:number begin with /roster */}
          <Route path='/login' component={Login} />
          <Route path='/create' component={CreateAccount} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
