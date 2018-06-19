import React, { Component } from 'react';
import './App.css';
import { Router, Switch, Route, Link } from 'react-router-dom';
import createHistory from 'history/createHashHistory'
import * as apis from './components/api';
import WrappedNormalLoginForm from './pages/login'
const history = createHistory();

const routers = [
    {
        path: '/',
        component: WrappedNormalLoginForm,
        exact: true
    }
];

class App extends Component {
    state = {
        collapsed: false,
        mode: 'inline',
    };

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }
    render() {
        return (
            <Router history={history}>
                <Route render={({ location }) => {
                    console.log(location);
                    return (
                        <div style={{ position: 'absolute', top: '0', bottom: '0', left: '0', right: '0' }}>
                            {
                                routers && routers.map((r, index) => {
                                    return (
                                        <Route key={index} location={location} exact={r.exact} path={r.path} component={() => {
                                            return (
                                                <r.component location={location} apis={apis}></r.component>
                                            )
                                        }} />
                                    );
                                })
                            }
                        </div>
                    )
                }} />
            </Router>
        );
    }
}
export default App;