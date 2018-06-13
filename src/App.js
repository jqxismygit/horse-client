import React, { Component } from 'react';
// import logo from './logo.svg';
import styles from './App.scss';
// import Footer from './components/Footer'
// import AddTodo from './containers/AddTodo'
// import VisibleTodoList from './containers/VisibleTodoList'

// type 0/red 1/green 2/blue
import { HashRouter as Router, Switch, Route, Link } from 'react-router-dom';

import createHistory from 'history/createHashHistory'
const history = createHistory()

import Login from './pages/login/index'
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
      window.location.href = '/#/login';
    }
  }

  render() {
    return (
      <Router history={history}>
        <Route render={({ location }) => {
          return (
            <div>
              <Route location={location} exact path="/" component={Home} />
              <Route location={location} path="/login" component={Login} />
              <Route location={location} path="/create" component={CreateAccount} />
            </div>
          )
        }} />
      </Router>
    );
  }
}

export default App;
