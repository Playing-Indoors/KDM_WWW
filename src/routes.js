require('../styles/main.scss');
import React from 'react';
import { render } from 'react-dom';
import { browserHistory, Router, Route, IndexRoute, Link, Redirect } from 'react-router';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import Home from './components/views/home/Home.jsx';
import App from './App.jsx';
import ExampleContainer from './containers/exampleContainer/ExampleContainer.jsx';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Home}/>
        <Route path="/examplecontainer" component={ExampleContainer}/>
        <Route path="*" component={Home}/>
      </Route>
    </Router>
  </Provider>
  , document.getElementById('app'));
