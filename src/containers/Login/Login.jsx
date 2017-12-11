import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { reduxForm } from "redux-form";
import { Link, browserHistory } from "react-router";
import { authenticate } from "../../actions/login";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";

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
      return (
        <div className="bg-red p-4 mb-4">Woops, bad login. Try again.</div>
      );
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
        <form
          className="relative"
          onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}
        >
          {this.renderLoading()}

          <label htmlFor="email" className="block mb-2">
            Log in to The Watcher
          </label>
          <input
            className="block mb-4 bg-grey-darker text-white py-3 px-4 w-full"
            id="email"
            type="email"
            name="email"
            placeholder="Enter your email..."
            autoFocus
            {...username}
            require
          />
          <input
            className="block mb-4 bg-grey-darker text-white py-3 px-4 w-full"
            id="password"
            type="password"
            name="password"
            placeholder="Enter your password..."
            autoComplete="current-password"
            {...password}
            require
          />

          {this.renderErrorMessage()}

          <button
            type="submit"
            className="block mb-4 bg-yellow text-white py-3 px-4 w-full hover:bg-yellow-dark focus:bg-yellow-dark no-outline"
            disabled={
              this.props.fields.username.invalid ||
              this.props.fields.password.invalid
            }
          >
            Login
          </button>

          <div className="flex justify-between">
            <Link className="text-sm text-white" to={"/forgot"}>
              Forgot Password
            </Link>
            <Link className="text-sm text-white" to={"/register"}>
              Create Account
            </Link>
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
