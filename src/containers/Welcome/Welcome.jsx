import React, { Component } from "react";
import { Button } from "reactstrap";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { setPreference } from "../../actions/preferences";
import Widget from "../../components/Widget/Widget";
import WidgetFooter from "../../components/Widget/WidgetFooter";

class Welcome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: true
    };
    // Binding Events
    this.handleClose = this.handleClose.bind(this);
  }
  handleClose() {
    const userId = localStorage.getItem("userId");
    const data = {
      user_id: userId,
      handle: "watcher-alpha-1",
      value: true
    };
    // this.setState({show: false});
    this.props.setPreference(userId, data);
  }
  render() {
    return (
      <div className="welcome">
        <div className="layout">
          <Widget>
            <h1>Welcome to Alpha 1</h1>
            <p>
              Welcome to the alpha testing of The Watcher. We are extremely
              excited and honored to have you.
            </p>
            <p>Features ready for testing:</p>
            <ul>
              <li>Survivor management</li>
            </ul>
            <p>
              We are using the same API that KDM-Manager uses so no data will be
              wiped through testing. You are more than welcome to use the The
              Watcher in your campaigns but please remember we&rsquo;re in alpha
              and paper sheets work nicely as a backup.
            </p>
            <p>
              For feedback you can contact us on{" "}
              <a
                href="https://twitter.com/thewatcherapp"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter (@thewatcherapp)
              </a>{" "}
              and to report bugs please use{" "}
              <a
                href="https://github.com/Playing-Indoors/KDM_WWW/issues"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>.
            </p>
            <WidgetFooter>
              <Button onClick={this.handleClose} color="primary" size="sm">
                Get Started
              </Button>
            </WidgetFooter>
          </Widget>
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      setPreference
    },
    dispatch
  );
}

export default connect(null, mapDispatchToProps)(Welcome);
