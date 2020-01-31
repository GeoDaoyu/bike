import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import App from './App';
import Login from './pages/Login'
import Btn from './pages/ui/Button'
import IModal from './pages/ui/Modal'
import ISpin from './pages/ui/Spin'
import Home from './pages/Home'
import NoMatch from './pages/NoMatch'

export default class IRouter extends React.Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route path="/login" component={Login}></Route>
          <Route path="/admin" render={() => (
            <App>
              <Switch>
                <Route path="/admin/home" component={Home}></Route>
                <Route path="/admin/ui/button" component={Btn}></Route>
                <Route path="/admin/ui/modal" component={IModal}></Route>
                <Route path="/admin/ui/loading" component={ISpin}></Route>
                <Route component={NoMatch}></Route>
              </Switch>
            </App>
          )}></Route>
        </Switch>
      </HashRouter>
    )
  }
}