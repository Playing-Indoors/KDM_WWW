import React from "react";
import { render } from "react-dom";
import {
  browserHistory,
  Router,
  Route,
  IndexRoute,
  Link,
  Redirect
} from "react-router";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers";
import requireAuth from "./containers/Require_auth";
import App from "./App";
import Login from "./containers/Login/Login";
import System from "./containers/System/System";
import Survivor from "./containers/Survivor/Survivor";
import Log from "./containers/Log/Log";
import Survivors from "./containers/Survivors/Survivors";
import SurvivorsCreate from "./containers/Survivors/SurvivorsCreate";
import Settlements from "./containers/Settlements/Settlements";
import SettlementsCreate from "./containers/Settlements/SettlementsCreate";
import Timeline from "./containers/Timeline/Timeline";
import Storage from "./containers/Storage/Storage";
import Resources from "./containers/Storage/Resources";
import Gear from "./containers/Storage/Gear";
import Dashboard from "./containers/Dashboard/Dashboard";
import More from "./containers/More/More";
import Aya from "./containers/Aya/Aya";
import NotFound from "./components/NotFound/NotFound";
import { AUTH_USER } from "./actions/types";

require("../styles/main.scss");
const ReactGA = require("react-ga");

ReactGA.initialize("UA-89982304-01");

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const store = createStoreWithMiddleware(reducers);
const token = localStorage.getItem("access_token");

if (token) {
  store.dispatch({ type: AUTH_USER });
}

function logPageView() {
  ReactGA.set({ page: window.location.pathname });
  ReactGA.pageview(window.location.pathname);
}

render(
  <Provider store={store}>
    <Router history={browserHistory} onUpdate={logPageView}>
      <Route path="/" component={Login} />
      {/* Dev Routes */}
      <Route title="Aya" path="/aya" component={Aya} />

      <Route component={App}>
        {/* <IndexRoute component={Splash} /> */}
        {/* <Route title="Splash" path="/splash" component={Splash} /> */}
        {/* <Route title="Home" path="/home" component={Home} /> */}
        <Route
          title="Dashboard"
          path="/dashboard"
          component={requireAuth(Dashboard)}
        />
        <Route path="/">
          <Route
            path="/settlements"
            component={requireAuth(Settlements)}
            noHeader
            back
          />
          <Route
            path="/settlements/create"
            component={requireAuth(SettlementsCreate)}
            noHeader
            back
          />
          <Route
            title="System"
            path="/system"
            component={requireAuth(System)}
          />
          <Route title="More" path="more">
            <IndexRoute component={requireAuth(More)} />
          </Route>
          {/* <Route title="World" path="/world" component={requireAuth(World)} />
          <Route title="About" path="/about" component={requireAuth(About)} /> */}
        </Route>

        {/* Settlement Routes */}
        <Route path="/settlements/:oid">
          <Route
            title="Settlement"
            path="settlement"
            component={requireAuth(Dashboard)}
          >
            <Route
              title="Dashboard"
              path="dashboard"
              component={requireAuth(Dashboard)}
            />
            <Route
              title="Timeline"
              path="timeline"
              component={requireAuth(Timeline)}
            />
          </Route>

          <Route
            title="Survivors"
            noHeader
            path="survivors"
            component={requireAuth(Survivors)}
          />

          <Route
            title="Survivors"
            noHeader
            back
            path="survivors/create"
            component={requireAuth(SurvivorsCreate)}
          />

          <Route
            title="Survivor"
            back
            path="survivors/:id"
            component={requireAuth(Survivor)}
          />
          <Route
            title="Storage"
            path="storage"
            component={requireAuth(Storage)}
          >
            <IndexRoute title="Resources" component={requireAuth(Resources)} />
            <Route title="Gear" path="gear" component={requireAuth(Gear)} />
          </Route>

          <Route title="Campaign Log" path="log">
            <IndexRoute component={requireAuth(Log)} />
          </Route>
        </Route>

        {/* Error Handling */}
        <Route title="Not Found" path="*" component={NotFound} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById("app")
);
