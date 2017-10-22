import React, { Component } from "react";
import { Link } from "react-router";
import { Button, FormGroup, Label, Input } from "reactstrap";

class Forgot extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      loading: false,
      error: false
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
    console.log("@Khoa send password reset api call", this.state.email);
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
          <Button
            type="submit"
            color="primary"
            block
            disabled={this.state.email.length === 0}
          >
            Send Reset Email
          </Button>
          <Link to={"/"} className="linkGroup mt-3">
            Back to login
          </Link>
        </form>
      </div>
    );
  }
}

export default Forgot;
