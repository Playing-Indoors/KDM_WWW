import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { reduxForm } from "redux-form";
import { authenticate } from "../../actions/index.js";

class Login extends Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    localStorage.clear();
  }
  handleFormSubmit({ username, password }) {
    this.props.authenticate({ username, password });
  }
  render() {
    const { handleSubmit, fields: { username, password } } = this.props;
    return (
      <div className="login">
        <div className="login-logo">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 337.8 270.7">
            <title>logo</title>
            <g id="_Group_" data-name="<Group>">
              <g id="_Group_2" data-name="<Group>">
                <path
                  id="_Path_"
                  data-name="<Path>"
                  className="cls-1"
                  d="M0,228.6H29.6v6.1l-11.5-.2,0.1,35.4H11.3l0.2-35.4L0,234.7v-6.1Z"
                />
                <path
                  id="_Path_2"
                  data-name="<Path>"
                  className="cls-1"
                  d="M34.2,269.9V225.1h6.9v12.4c4.4-2,8.1-3,11.2-3s5.3,1.1,6.6,3.2,2,5.3,2,9.4v22.8H54V248.7c0-3.4-.3-5.5-0.8-6.6a3.53,3.53,0,0,0-3.3-1.5,14.1,14.1,0,0,0-3.7.6c-1.4.4-3.1,1-5,1.7v27h-7Z"
                />
                <path
                  id="_Compound_Path_"
                  data-name="<Compound Path>"
                  className="cls-1"
                  d="M82.8,270.7c-9.9,0-14.8-6-14.8-18.1s4.9-18.1,14.7-18.1c4.4,0,7.7,1.3,9.8,3.8s3.3,6.7,3.3,12.5v4.3H75.2c0,4.4.7,7.3,2.2,8.6a5.68,5.68,0,0,0,4,1.3,31.25,31.25,0,0,0,10.1-1.8l1.8-.6,1.7,5.2A25.81,25.81,0,0,1,82.8,270.7ZM88.9,248a12.65,12.65,0,0,0-.1-1.6c0-.8-0.1-1.3-0.1-1.5s-0.1-.6-0.2-1.2a1.65,1.65,0,0,0-.4-1.1,3.77,3.77,0,0,1-.5-0.8,1.54,1.54,0,0,0-.7-0.7,3.55,3.55,0,0,1-.9-0.4,7.6,7.6,0,0,0-3.2-.4,13,13,0,0,0-3.8.5,4.35,4.35,0,0,0-2.3,1.9,7.61,7.61,0,0,0-1,3,25.12,25.12,0,0,0-.3,4.4l13.6-.3V248H88.9Z"
                />
                <path
                  id="_Path_3"
                  data-name="<Path>"
                  className="cls-1"
                  d="M120.7,269.9l-6-41.3h6.9l3.8,34.6h0.4l5.8-24.7h8.6l5.8,24.7h0.4l3.7-34.6h7L151,269.9h-8.9l-6-25.3h-0.4l-5.9,25.3h-9.1Z"
                />
                <path
                  id="_Compound_Path_2"
                  data-name="<Compound Path>"
                  className="cls-1"
                  d="M170.7,270.7a9.71,9.71,0,0,1-7.3-2.9c-1.8-1.9-2.7-4.8-2.7-8.6s1.2-6.6,3.7-8.3,6-2.6,10.7-2.6l5.7,0.1c0-3.8-.3-6.1-0.9-7s-1.8-1.2-3.6-1.2a25.55,25.55,0,0,0-5.9.7,40.55,40.55,0,0,0-6.9,2l-1.8-5c0.5-.2,1.3-0.5,2.2-0.9a37,37,0,0,1,5.2-1.5,29.74,29.74,0,0,1,6.9-.9c7.8,0,11.8,4.3,11.8,12.8V270h-4.4l-0.9-3.7h-0.6a14.71,14.71,0,0,1-1.7,1.3,22.1,22.1,0,0,1-4.1,2A16.73,16.73,0,0,1,170.7,270.7Zm10-16.7a52.62,52.62,0,0,0-6.6-.4c-2.8,0-4.5.3-5.1,1-0.9.8-1.3,2.3-1.3,4.5a8.6,8.6,0,0,0,.9,4.6,3.23,3.23,0,0,0,2.8,1.2,14.23,14.23,0,0,0,4.3-.7,33.4,33.4,0,0,0,5.1-2V254h-0.1Z"
                />
                <path
                  id="_Path_4"
                  data-name="<Path>"
                  className="cls-1"
                  d="M197.7,258.7V242.4h-4v-4.3l4.3-.8,1.4-8.2h5.3v8h6.9v5.3h-7V259a14.8,14.8,0,0,0,.5,4.9c0.3,0.6,1.2.9,2.6,0.9l3.8-.2v5.5a21.15,21.15,0,0,1-4.7.5q-4.65,0-6.9-2.4C198.4,266.5,197.7,263.4,197.7,258.7Z"
                />
                <path
                  id="_Path_5"
                  data-name="<Path>"
                  className="cls-1"
                  d="M241.8,262.3a46.72,46.72,0,0,0,2,5c-0.4.2-.8,0.5-1.5,0.9a17.36,17.36,0,0,1-3.9,1.5,20.79,20.79,0,0,1-6,.9,13.72,13.72,0,0,1-10.7-4.4c-2.6-3-3.9-7.5-3.9-13.7,0-6.9,1.6-11.6,4.7-14.4,2.8-2.4,6.6-3.6,11.2-3.6a39.75,39.75,0,0,1,9.1,1.1L242,241a95.26,95.26,0,0,0-9.9-.8c-2.3,0-3.9.5-4.8,1.4-1.7,1.8-2.5,5.6-2.5,11.4s1.1,9.5,3.4,11.2a5.27,5.27,0,0,0,3.2.9,16,16,0,0,0,4.5-.7A42.19,42.19,0,0,0,241.8,262.3Z"
                />
                <path
                  id="_Path_6"
                  data-name="<Path>"
                  className="cls-1"
                  d="M250.4,269.9V225.1h6.9v12.4c4.4-2,8.1-3,11.2-3s5.3,1.1,6.6,3.2,2,5.3,2,9.4v22.8h-6.9V248.7c0-3.4-.3-5.5-0.8-6.6s-1.7-1.5-3.3-1.5a14.1,14.1,0,0,0-3.7.6c-1.4.4-3.1,1-5,1.7v27h-7Z"
                />
                <path
                  id="_Compound_Path_3"
                  data-name="<Compound Path>"
                  className="cls-1"
                  d="M299,270.7c-9.9,0-14.8-6-14.8-18.1s4.9-18.1,14.7-18.1c4.4,0,7.7,1.3,9.8,3.8s3.3,6.7,3.3,12.5v4.3H291.4c0,4.4.7,7.3,2.2,8.6a5.68,5.68,0,0,0,4,1.3,31.25,31.25,0,0,0,10.1-1.8l1.8-.6,1.7,5.2A26.39,26.39,0,0,1,299,270.7Zm6-22.7a12.65,12.65,0,0,0-.1-1.6c0-.8-0.1-1.3-0.1-1.5s-0.1-.6-0.2-1.2a1.65,1.65,0,0,0-.4-1.1,3.78,3.78,0,0,1-.5-0.8,1.54,1.54,0,0,0-.7-0.7,6.32,6.32,0,0,1-.9-0.4,7.6,7.6,0,0,0-3.2-.4,13,13,0,0,0-3.8.5,4.35,4.35,0,0,0-2.3,1.9,7.61,7.61,0,0,0-1,3,25.12,25.12,0,0,0-.3,4.4l13.6-.3V248H305Z"
                />
                <path
                  id="_Path_7"
                  data-name="<Path>"
                  className="cls-1"
                  d="M330.2,235.9a11.21,11.21,0,0,1,4.5-1.3,10.07,10.07,0,0,1,3.1.5l-0.5,6.1a26.23,26.23,0,0,0-2.7-.1,13.72,13.72,0,0,0-8.1,2.6V270h-6.9V235.4h4.3a29,29,0,0,0,.9,3.6h0.4A22.33,22.33,0,0,1,330.2,235.9Z"
                />
              </g>
            </g>
            <g id="_Group_3" data-name="<Group>">
              <g id="_Group_4" data-name="<Group>">
                <path
                  id="_Compound_Path_4"
                  data-name="<Compound Path>"
                  className="cls-1"
                  d="M247.2,57.7a82,82,0,0,0-156.6,0l-0.5,1.6,0.5,1.6A81.18,81.18,0,0,0,137.2,112h-0.5a9.53,9.53,0,0,1,4.1,7.7v20.6a4.91,4.91,0,0,0,4.9,4.9h1.1a5,5,0,0,0,5-5V129.5a2,2,0,0,1,1.9-1.9c0.9,0,2,.5,2,2.3v45a4.91,4.91,0,0,0,4.9,4.9h1.1a5,5,0,0,0,5-5V132a2,2,0,0,1,2-2,2.06,2.06,0,0,1,2,1.9v63.7a5,5,0,0,0,5,5h1.1a4.91,4.91,0,0,0,4.9-4.9V134.5c0-1.9,1.1-2.3,2-2.3a1.9,1.9,0,0,1,1.9,1.9v25.5a5,5,0,0,0,5,5h1.1a4.91,4.91,0,0,0,4.9-4.9V119.6a9.39,9.39,0,0,1,4-7.6,81.28,81.28,0,0,0,46.9-51.2l0.5-1.6Zm-78.3,44.4c-30.8,0-55.3-14.2-67.5-42.9a71.22,71.22,0,0,1,135,0C224.6,87.9,199.7,102.1,168.9,102.1Z"
                />
                <circle
                  id="_Path_8"
                  data-name="<Path>"
                  className="cls-1"
                  cx="168.6"
                  cy="55.3"
                  r="23.3"
                />
              </g>
            </g>
          </svg>
          <div className="login-logo-tagline">
            A management tool for Kingdom Death
          </div>
        </div>
        {this.props.authenticated.error ? (
          <h2>Woops, bad info. Try again.</h2>
        ) : (
          ""
        )}
        <form
          className="login-form"
          onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}
        >
          <div className="form-group">
            <div className="input-group">
              <label
                className="input-group-addon input-group-addon--floating"
                htmlFor="email"
              >
                <i className="fa fa-fw fa-user" aria-hidden="true" />
              </label>
              <input
                {...username}
                type="email"
                id="email"
                className="form-control"
                placeholder="email"
                aria-describedby="email"
              />
            </div>
          </div>

          <div className="form-group">
            <div className="input-group">
              <label
                className="input-group-addon input-group-addon--floating"
                htmlFor="password"
              >
                <i className="fa fa-fw fa-lock" aria-hidden="true" />
              </label>
              <input
                {...password}
                type="password"
                id="password"
                className="form-control"
                placeholder="password"
                aria-describedby="password"
              />
            </div>
          </div>

          <br />
          <button type="submit" id="login-button" className="btn btn-primary">
            Create
          </button>
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
