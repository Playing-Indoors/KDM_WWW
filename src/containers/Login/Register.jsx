import React, { Component } from "react";
import { Link } from "react-router";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { newUser } from "../../actions/newUser";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";

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
    if (this.state.email !== "" || this.state.password !== "") {
      this.setState({
        loading: true
      });
      let data = {
        username: this.state.email,
        password: this.state.password
      };
      this.props.newUser(data);
    }
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
        <form className="relative" onSubmit={this.handleFormSubmit}>
          {this.renderLoading()}
          <div className="block text-center mb-4">Create your account</div>
          <label htmlFor="email" className="block mb-2">
            Your Email
          </label>
          <input
            value={this.state.email}
            onChange={this.handleEmailChange}
            className="block mb-4 bg-grey-darker text-white py-3 px-4 w-full"
            id="email"
            type="email"
            name="email"
            placeholder="Enter your email..."
            autoFocus
            require
          />
          <label htmlFor="password" className="block mb-2">
            Your Password
          </label>
          <input
            value={this.state.password}
            onChange={this.handlePasswordChange}
            className="block mb-4 bg-grey-darker text-white py-3 px-4 w-full"
            id="password"
            type="password"
            name="password"
            placeholder="Enter your password..."
            autoComplete="new-password"
            require
            minLength="4"
            title="Enter password at least 4 characters long."
          />

          <button
            type="submit"
            className="block mb-4 bg-yellow text-white py-3 px-4 w-full hover:bg-yellow-dark focus:bg-yellow-dark no-outline"
            disabled={
              this.state.email.length === 0 || this.state.password.length < 4
            }
          >
            Create Account
          </button>
          <Link to={"/"} className="text-sm text-white">
            Back to login
          </Link>
        </form>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      newUser: newUser
    },
    dispatch
  );
}

export default connect(null, mapDispatchToProps)(Register);
