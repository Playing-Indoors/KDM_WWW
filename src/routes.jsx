import React from "react";
import { render } from "react-dom";
import { browserHistory, Router, Route, IndexRoute } from "react-router";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers";
import requireAuth from "./containers/Require_auth";
import App from "./App";
import Login from "./containers/Login/Login";
import Register from "./containers/Login/Register";
import Forgot from "./containers/Login/Forgot";
import Logout from "./containers/Login/Logout";
import System from "./containers/System/System";
import Survivors from "./containers/Survivors/Survivors";
import SurvivorsCreate from "./containers/Survivors/SurvivorsCreate";
import Survivor from "./scenes/Survivor/Survivor";
import SurvivorFavoriteToggle from "./scenes/Survivor/containers/FavoriteToggle";
import SurvivorNameChange from "./scenes/Survivor/containers/NameChange";
import SurvivorRetireManage from "./scenes/Survivor/containers/RetireManage";
import SurvivorDeathRecord from "./scenes/Survivor/containers/DeathRecord";
import SurvivorSexChange from "./scenes/Survivor/containers/SexChange";
import SurvivorCursedItems from "./scenes/Survivor/containers/CursedItems";
import SurvivorExtraLinks from "./scenes/Survivor/containers/ExtraLinks";
import SurvivorLog from "./scenes/Survivor/containers/LogSurvivor";
import Settlements from "./containers/Settlements/Settlements";
import SettlementsCreate from "./containers/Settlements/SettlementsCreate";
import Storage from "./containers/Storage/Storage";
import Info from "./containers/Info/Info";
import Resources from "./containers/Storage/Resources";
import Gear from "./containers/Storage/Gear";
import Log from "./containers/Log/Log";
import Settlement from "./containers/Settlement/Settlement";
import Innovations from "./containers/Settlement/ManageInnovations";
import More from "./containers/More/More";
// import Aya from "./containers/Aya/Aya";
import NotFound from "./components/NotFound/NotFound";
import Welcome from "./containers/Welcome/Welcome";
import About from "./containers/About/About";
import { AUTH_USER } from "./actions/types";

require("../styles/main.scss");
require("../styles/output.css");

const ReactGA = require("react-ga");

ReactGA.initialize("UA-89982304-01");

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const store = createStoreWithMiddleware(reducers);
const token = localStorage.getItem("access_token");

if (token) {
  store.dispatch({ type: AUTH_USER });
}

function handlePageChange() {
  window.scrollTo(0, 0);
  ReactGA.set({ page: window.location.pathname });
  ReactGA.pageview(window.location.pathname);
}

render(
  <Provider store={store}>
    <Router history={browserHistory} onUpdate={handlePageChange}>
      {/* Unauth public links */}
      <Route path="/" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/forgot" component={Forgot} />
      <Route path="/logout" component={Logout} />
      <Route path="/info" component={Info} />
      <Route path="/about" component={About} noHeader back />

      <Route path="/welcome" component={Welcome} />
      {/* Dev Routes */}
      {/* <Route title="Aya" path="/aya" component={Aya} /> */}

      {/* App Routes */}
      <Route component={App}>
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
          path="/dashboard"
          title="Dashboard"
          component={requireAuth(More)}
        />
        <Route
          path="/settings"
          title="System"
          component={requireAuth(System)}
        />
        <Route
          path="/settlements/:oid"
          title="Settlement"
          component={requireAuth(Settlement)}
        />
        <Route
          path="/settlements/:oid/innovations"
          title="Settlement"
          component={requireAuth(Innovations)}
          noHeader
          back
        />
        <Route
          path="/settlements/:oid/log"
          title="Campaign Log"
          component={requireAuth(Log)}
        />
        <Route
          path="/settlements/:oid/survivors"
          title="Survivors"
          noHeader
          component={requireAuth(Survivors)}
        />
        <Route
          path="/settlements/:oid/survivors/create"
          title="Survivors"
          noHeader
          back
          component={requireAuth(SurvivorsCreate)}
        />

        <Route
          path="/settlements/:oid/survivors/:survivorId"
          title="Survivor"
          noHeader
          back
          component={requireAuth(Survivor)}
        >
          <Route path="menu" component={requireAuth(SurvivorExtraLinks)} />
          <Route path="sex" component={requireAuth(SurvivorSexChange)} />
          <Route
            path="favorite"
            component={requireAuth(SurvivorFavoriteToggle)}
          />
          <Route path="name" component={requireAuth(SurvivorNameChange)} />
          <Route path="retire" component={requireAuth(SurvivorRetireManage)} />
          <Route path="kill" component={requireAuth(SurvivorDeathRecord)} />
          <Route path="cursed" component={requireAuth(SurvivorCursedItems)} />
          <Route path="log" component={requireAuth(SurvivorLog)} />
        </Route>
        <Route
          path="/settlements/:oid/storage"
          title="Storage"
          component={requireAuth(Storage)}
        />
      </Route>
      <Route title="Not Found" path="*" component={NotFound} />
    </Router>
  </Provider>,
  document.getElementById("app")
);
