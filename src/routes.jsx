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
import Settlements from './containers/Settlements/Settlements.jsx';
import Timeline from './containers/Timeline/Timeline.jsx';
import Storage from './containers/Storage/Storage.jsx';
import Resources from './containers/Storage/Resources.jsx';
import Gear from './containers/Storage/Gear.jsx';
import Dashboard from './containers/Dashboard/Dashboard.jsx';
import SurvivorHome from './containers/SurvivorHome/SurvivorHome.jsx';
import World from './containers/World/World.jsx';
import More from './containers/More/More.jsx';
import Aya from './components/Aya/Aya.jsx';
import NotFound from './components/NotFound/NotFound.jsx';
import Splash from './components/Splash/Splash.jsx';
import { AUTH_USER } from './actions/types';

require('../styles/main.scss');
const ReactGA = require('react-ga');

ReactGA.initialize('UA-89982304-01');

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const store = createStoreWithMiddleware(reducers);
const token = localStorage.getItem('access_token');

if (token) {
	store.dispatch({ type: AUTH_USER });
}

function logPageView() {
	ReactGA.set({ page: window.location.pathname });
	ReactGA.pageview(window.location.pathname);
}

render(
	<Provider store={store}>
		<Router history={browserHistory} onUpdate={logPageView} >
			<Route path="/" component={Login} />
			{/* Dev Routes */}
			<Route title="Aya" path="/aya" component={Aya} />

			<Route component={App}>
				{/* <IndexRoute component={Splash} /> */}
				{/* <Route title="Splash" path="/splash" component={Splash} /> */}
				{/* <Route title="Home" path="/home" component={Home} /> */}


				<Route path="/">
					<Route title="Settlements" path="/settlements" component={requireAuth(Settlements)} />
					<Route title="System" path="/system" component={requireAuth(System)} />
					<Route title="World" path="/world" component={requireAuth(World)} />
					<Route title="About" path="/about" component={requireAuth(About)} />
				</Route>

				{/* Settlement Routes */}
				<Route path="/settlements/:oid">

					<Route
						title="Settlement"
						path="settlement"
						component={requireAuth(Dashboard)}
					>
						<Route title="Dashboard" path="dashboard" component={requireAuth(Dashboard)} />
						<Route title="Timeline" path="timeline" component={requireAuth(Timeline)} />
					</Route>

					<Route path="survivors" >
						<IndexRoute title="Survivors" component={requireAuth(Survivors)} />
						<Route title="Survivor" back path="/:id" component={requireAuth(Survivor)} />
					</Route>

					<Route path="storage" component={requireAuth(Resources)}>
						<Route title="Resources" path="resources" component={requireAuth(Resources)} />
						<Route title="Gear" path="gear" component={requireAuth(Gear)} />
					</Route>

					<Route title="Campaign Log" path="log">
						<IndexRoute component={requireAuth(Log)} />
					</Route>

					<Route title="More" path="more">
						<IndexRoute component={requireAuth(More)} />
					</Route>
{/*
					<Route title="aya" path="aya">
						<IndexRoute component={requireAuth(Aya)} />
					</Route> */}
				</Route>


				{/* Error Handling */}
				<Route title="Not Found" path="*" component={NotFound} />
			</Route>
		</Router>
	</Provider>
	, document.getElementById('app'));
