import React, { Component } from "react";
import PropTypes from "prop-types";
import Nav from "./components/Nav/Nav";
import Header from "./components/Header/Header";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getSettlement } from "./actions/getSettlement";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pageName: "Page Name"
    };
  }
  componentDidMount() {
    this.props.getSettlement();
  }
  showBack() {
    if (this.props.routes[3]) {
      return this.props.routes[3].back;
    } else if (this.props.routes[2]) {
      return this.props.routes[2].back;
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
  render() {
    return (
      <div className="app">
        {this.renderNav()}
        {this.renderHeader()}

        <main className="main">
          {React.cloneElement(this.props.children, { ...this.props })}
        </main>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.node
};

function mapStateToProps(state) {
  return {
    settlementData: state.settlementData
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      getSettlement
    },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
