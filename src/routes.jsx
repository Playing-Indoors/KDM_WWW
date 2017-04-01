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
import About from './containers/About/About.jsx';
import System from './containers/System/System.jsx';
import Survivor from './containers/Survivor/Survivor.jsx';
import Glossary from './containers/Glossary/Glossary.jsx';
import FAQ from './containers/FAQ/FAQ.jsx';
import Log from './containers/Log/Log.jsx';
import Survivors from './containers/Survivors/Survivors.jsx';
import Settlements from './containers/Settlement/Settlements.jsx';
import Settlement from './containers/Settlement/Settlement.jsx';
import Storage from './containers/Storage/Storage.jsx';
import Resources from './containers/Storage/Resources.jsx';
import Gear from './containers/Storage/Gear.jsx';
import Campaign from './containers/Campaign/Campaign.jsx';
import SurvivorHome from './containers/SurvivorHome/SurvivorHome.jsx';
import World from './containers/World/World.jsx';
import Aya from './components/Aya/Aya.jsx';
import NotFound from './components/NotFound/NotFound.jsx';
import Splash from './components/Splash/Splash.jsx';
import { AUTH_USER } from './actions/types';

require('../styles/main.scss');
const ReactGA = require('react-ga');

ReactGA.initialize('UA-89982304-01');

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
			<Route path="/" component={Login} />
			<Route component={App}>
				{/* <IndexRoute component={Splash} /> */}
				{/* <Route title="Splash" path="/splash" component={Splash} /> */}
				{/* <Route title="Home" path="/home" component={Home} /> */}

				{/* Global Routes */}
				<Route title="World" path="/world" component={World} />
				<Route title="FAQ" path="/faq" component={FAQ} />
				<Route title="Glossary" path="/glossary" component={Glossary} />
				<Route title="About" path="/about" component={About} />

				{/* User Routes */}
				<Route title="System" path="/system" component={System} />
				<Route title="Settlements" path="/settlements" component={Settlements} />


				{/* Settlement Routes */}
				<Route title="Dashboard" path="/settlements/:oid" component={Campaign} />
				<Route title="Settlement" path="/settlements/:oid/settlement" component={Settlement} />
				<Route title="Survivors" path="/settlements/:oid/survivors" component={Survivors} />
				<Route title="Survivor" path="/settlements/:oid/survivors/:id" component={SurvivorHome} />
				<Route title="Resources" path="/settlements/:oid/resources" component={Resources} />
				<Route title="Gear" path="/settlements/:oid/gear" component={Gear} />
				<Route title="Log" path="/settlements/:oid/log" component={Log} />

				{/* Dev Routes */}
				<Route title="Aya" path="/aya" component={Aya} />

				{/* Error Handling */}
				<Route title="Not Found" path="*" component={NotFound} />
			</Route>
		</Router>
	</Provider>
	, document.getElementById('app'));
