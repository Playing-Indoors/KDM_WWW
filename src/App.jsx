import React, { Component } from "react";
import PropTypes from "prop-types";
import Nav from "./components/Nav/Nav";
import Header from "./components/Header/Header";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getUser } from "./actions/getUserData";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pageName: "Page Name"
    };
  }
  componentDidMount() {
    this.props.getUser();
  }
  showBack() {
    if (this.props.routes[3]) {
      return this.props.routes[3].back;
    } else if (this.props.routes[2]) {
      return this.props.routes[2].back;
    } else if (this.props.routes[1]) {
      return this.props.routes[1].back;
    }
    return null;
  }
  renderNav() {
    if (this.showBack()) {
      return null;
    }
    return <Nav />;
  }
  renderHeader() {
    if (this.props.routes[3] && this.props.routes[3].noHeader) {
      return null;
    } else if (this.props.routes[2] && this.props.routes[2].noHeader) {
      return null;
    } else if (this.props.routes[1] && this.props.routes[1].noHeader) {
      return null;
    }
    const subName = this.props.routes[2] ? this.props.routes[2].title : null;
    const superSubName = this.props.routes[3]
      ? this.props.routes[3].title
      : null;
    return (
      <Header
        name={this.props.routes[1].title}
        subName={subName}
        superSubName={superSubName}
        showBack={this.showBack()}
      />
    );
  }
  renderChildren() {
    return React.Children.map(this.props.children, child => {
      return React.cloneElement(this.props.children, {
        userData: this.props.userData
      });
    });
  }
  render() {
    return (
      <div className="app">
        {this.renderNav()}
        {this.renderHeader()}

        <main className="main">{this.renderChildren()}</main>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.node
};

function mapStateToProps(state) {
  return {
    userData: state.userData
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      getUser
    },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
