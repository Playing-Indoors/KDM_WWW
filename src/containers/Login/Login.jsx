import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { reduxForm } from "redux-form";
import { Link } from "react-router";
import { Alert, Button, FormGroup, Label, Input } from "reactstrap";
import { authenticate } from "../../actions/login";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";
import { browserHistory } from "react-router";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      error: false
    };
  }

  componentDidMount() {
    const token = localStorage.getItem("access_token");
    if (token) {
      browserHistory.push(`/settlements/`);
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.authenticated.error) {
      this.setState({
        error: true,
        loading: false
      });
    }
  }
  handleFormSubmit({ username, password }) {
    this.setState({
      loading: true,
      error: false
    });
    this.props.authenticate({ username, password });
  }
  renderLoading() {
    if (this.state.loading) {
      return <LoadingSpinner absolute />;
    }
    return null;
  }
  renderErrorMessage() {
    if (this.props.authenticated.error) {
      return <Alert color="danger">Woops, bad login. Try again.</Alert>;
    }
    return null;
  }
  render() {
    const { handleSubmit, fields: { username, password } } = this.props;
    return (
      <div className="layout layout--login">
        <div className="login-logo">
          <img
            src="/lib/assets/logo-mark.svg"
            alt="The Watcher | KDM Manager"
          />
        </div>
        {this.renderErrorMessage()}
        <form
          className="login-form"
          onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}
        >
          {this.renderLoading()}
          <FormGroup className="input-form--dark">
            <Label for="email">Log in to The Watcher</Label>
            <Input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              autoFocus
              {...username}
              required
            />
          </FormGroup>
          <FormGroup className="input-form--dark">
            <Label for="password" hidden>
              Password
            </Label>
            <Input
              {...password}
              type="password"
              name="email"
              id="password"
              placeholder="Password"
              autoComplete="current-password"
              required
            />
          </FormGroup>

          <Button
            type="submit"
            color="primary"
            block
            disabled={
              this.props.fields.username.invalid ||
              this.props.fields.password.invalid
            }
          >
            Login
          </Button>

          <div className="linkGroup mt-3">
            <Link to={"/forgot"}>Forgot Password</Link>
            <Link to={"/register"}>Create Account</Link>
          </div>
        </form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    authenticated: state.authenticated
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      authenticate
    },
    dispatch
  );
}

export default reduxForm(
  {
    form: "signin",
    fields: ["username", "password"]
  },
  mapStateToProps,
  mapDispatchToProps
)(Login);
