import React from "react";
import { Button } from "reactstrap";

import Header from "../../components/Header/Header";
import Widget from "../../components/Widget/Widget";
import WidgetFooter from "../../components/Widget/WidgetFooter";

const Alpha1 = () => (
  <div className="app">
    <div className="main">
      <Header name={"Welcome to Alpha 1"} />
      <div className="layout">
        <Widget>
          <p>
            Welcome to the alpha testing of The Watcher. We are extremely
            excited and honored to have you.
          </p>
          <p>Features ready for testing:</p>
          <ul>
            <li>Survivor management</li>
            <li>Settlement Innovation and Survival</li>
          </ul>
          <p>
            We are using the same API that KDM-Manager uses so no data will be
            wiped through testing. You are more than welcome to use the The
            Watcher in your campaigns but please remember we&rsquo;re inalpha
            and paper sheets work nicely as a backup.
          </p>
          <p>
            For feedback or bugs you can contact use on Twitter @thewatcherapp
            or on
            <a
              href="https://github.com/Playing-Indoors/KDM_WWW/issues"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>.
          </p>
          <WidgetFooter>
            <Button color="primary" size="sm">
              Get Started
            </Button>
          </WidgetFooter>
        </Widget>
      </div>
    </div>
  </div>
);

export default Alpha1;
