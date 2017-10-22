import React, { Component } from "react";
import { Link } from "react-router";
import { Button, FormGroup, Label, Input } from "reactstrap";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      loading: false,
      error: false
    };
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
  }
  handleEmailChange(e) {
    this.setState({
      email: e.target.value
    });
  }
  handlePasswordChange(e) {
    this.setState({
      password: e.target.value
    });
  }
  handleFormSubmit(e) {
    e.preventDefault();
    console.log("@Khoa send password reset api call", {
      email: this.state.email,
      password: this.state.password
    });
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
          <FormGroup className="input-form--dark">
            <Label>Create your account</Label>
            <Label for="email" hidden>
              Enter your email
            </Label>
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
          <FormGroup className="input-form--dark">
            <Label for="password" hidden>
              Enter your password
            </Label>
            <Input
              value={this.state.password}
              onChange={this.handlePasswordChange}
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              autoFocus
              required
              autoComplete="new-password"
              minLength="4"
              title="Enter password at least 4 characters long."
            />
          </FormGroup>
          <Button
            type="submit"
            color="primary"
            block
            disabled={
              this.state.email.length === 0 || this.state.password.length < 4
            }
          >
            Create Account
          </Button>
          <Link to={"/"} className="linkGroup mt-3">
            Back to login
          </Link>
        </form>
      </div>
    );
  }
}

export default Register;
