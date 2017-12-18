import React, { Component } from "react";
import { Link } from "react-router";
import { Button, FormGroup, Label, Input } from "reactstrap";
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
      return <div className="tw-bg-red tw-p-4 tw-mb-4">{this.state.error}</div>;
    }
    return null;
  }
  renderMessage() {
    if (this.state.messageSent) {
      return (
        <div className="tw-bg-green tw-p-4 tw-mt-4 tw-mb-4">
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
          <FormGroup className="input-form--dark">
            <Label for="email">Enter your email</Label>
            <Input
              value={this.state.email}
              onChange={this.handleEmailChange}
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              autoFocus
              required
            />
          </FormGroup>
          {this.renderError()}
          <Button
            type="submit"
            color="primary"
            block
            disabled={this.state.email.length === 0}
          >
            Send Reset Email
          </Button>
          {this.renderMessage()}
          <Link to={"/"} className="linkGroup mt-3">
            Back to login
          </Link>
        </form>
      </div>
    );
  }
}

export default Forgot;
