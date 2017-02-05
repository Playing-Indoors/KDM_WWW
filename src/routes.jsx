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
import Survivor from './containers/Survivor/Survivor.jsx';
import Glossary from './containers/Glossary/Glossary.jsx';
import Survivors from './containers/Survivors/Survivors.jsx';
import Settlement from './containers/Settlement/Settlement.jsx';
import Storage from './containers/Storage/Storage.jsx';
import Campaign from './containers/Campaign/Campaign.jsx';
import SurvivorHome from './containers/SurvivorHome/SurvivorHome.jsx';
import World from './containers/World/World.jsx';
import Aya from './components/Aya/Aya.jsx';
import NotFound from './components/NotFound/NotFound.jsx';
import Splash from './components/Splash/Splash.jsx';
import { AUTH_USER } from './actions/types';

const ReactGA = require('react-ga');
ReactGA.initialize('UA-89982304-01');

require('../styles/main.scss');

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const store = createStoreWithMiddleware(reducers);
const token = localStorage.getItem('token');

if (token) {
	store.dispatch({ type: AUTH_USER });
}

function logPageView() {
	ReactGA.set({ page: window.location.pathname });
	ReactGA.pageview(window.location.pathname);
}

render(
	<Provider store={createStoreWithMiddleware(reducers)}>
		<Router history={browserHistory} onUpdate={logPageView} >
			<Route path="/" component={App}>
				<IndexRoute component={Splash} />
				<Route path="/home" component={Home} />
				<Route path="/login" component={Login} />
				<Route path="/world" component={World} />
				<Route path="/glossary" component={Glossary} />
				<Route path="/campaign" component={Campaign} />
				<Route path="/survivors" component={Survivors} />
				<Route path="/settlement" component={Settlement} />
				<Route path="/storage" component={Storage} />
				<Route path="/aya" component={Aya} />
				<Route path="/survivor/" component={SurvivorHome} />
				<Route path="/splash" component={Splash} />
				<Route path="*" component={NotFound} />
			</Route>
		</Router>
	</Provider>
	, document.getElementById('app'));
