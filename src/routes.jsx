import React from 'react';
import { render } from 'react-dom';
import { browserHistory, Router, Route, IndexRoute, Link, Redirect } from 'react-router';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';
import requireAuth from './containers/Require_auth';
import Home from './containers/Home/Home.jsx';
import App from './App.jsx';
import Login from './containers/Login/Login.jsx';
import Aya from './containers/Aya/Aya.jsx';
import Survivor from './containers/Survivor/Survivor.jsx';
import World from './containers/World/World.jsx';
import NotFound from './components/NotFound/NotFound.jsx';
import Splash from './components/Splash/Splash.jsx';
import { AUTH_USER } from './actions/types';

require('../styles/main.scss');

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const store = createStoreWithMiddleware(reducers);
const token = localStorage.getItem('token');

if (token) {
  store.dispatch({ type: AUTH_USER });
}

render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Splash} />
        <Route path="/home" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/world" component={World} />
        <Route path="/aya" component={Aya} />
        <Route path="/survivor" component={Survivor} />
        <Route path="/splash" component={Splash} />
        <Route path="*" component={NotFound} />
      </Route>
    </Router>
  </Provider>
  , document.getElementById('app'));
