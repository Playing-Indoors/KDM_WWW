import React, { Component } from "react";
import { Link } from "react-router";
import { passwordReset } from "../../actions/passwordReset";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";

class Forgot extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      loading: false,
      messageSent: false,
      error: ""
    };
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
  }
  handleEmailChange(e) {
    this.setState({
      email: e.target.value
    });
  }
  handleFormSubmit(e) {
    e.preventDefault();
    this.setState({ loading: true });
    passwordReset({ username: this.state.email })
      .then(() => {
        this.setState({
          loading: false,
          error: false,
          messageSent: true
        });
      })
      .catch(err => {
        this.setState({
          loading: false,
          error: err.data
        });
      });
  }
  renderError() {
    if (this.state.error.length > 0) {
      return <div className="bg-red p-4 mb-4">{this.state.error}</div>;
    }
    return null;
  }
  renderMessage() {
    if (this.state.messageSent) {
      return (
        <div className="bg-green p-4 mb-4">
          Email Sent! Please check your inbox.
        </div>
      );
    }
    return null;
  }
  renderLoading() {
    if (this.state.loading) {
      return <LoadingSpinner absolute />;
    }
    return null;
  }

  render() {
    return (
      <div className="layout layout--login">
        <div className="login-logo">
          <img
            src="/lib/assets/logo-mark.svg"
            alt="The Watcher | KDM Manager"
          />
        </div>
        <form className="login-form" onSubmit={this.handleFormSubmit}>
          {this.renderLoading()}
          <label htmlFor="login" className="block mb-2">
            Log in to The Watcher
          </label>
          <input
            value={this.state.email}
            onChange={this.handleEmailChange}
            className="block mb-4 bg-grey-darker text-white py-3 px-4 w-full"
            id="login"
            type="email"
            name="login"
            placeholder="Enter your email..."
            autoFocus
            require
          />
          {this.renderError()}
          <button
            type="submit"
            className="block mb-4 bg-yellow text-white py-3 px-4 w-full hover:bg-yellow-dark focus:bg-yellow-dark no-outline"
            disabled={this.state.email.length === 0}
          >
            Send Reset Email
          </button>
          {this.renderMessage()}
          <Link to={"/"} className="text-sm text-white">
            Back to login
          </Link>
        </form>
      </div>
    );
  }
}

export default Forgot;
