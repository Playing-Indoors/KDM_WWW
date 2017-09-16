import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router";
import Icon from "../../components/Icon/Icon";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { closeHeader } from "../../actions/updateHeader";

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showNav: false,
      activeIndex: null,
      initialIndex: null
    };
    this.handleCloseNav = this.handleCloseNav.bind(this);
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.headerData) {
      this.setState({
        showNav: nextProps.headerData.showNav
      });
    }
  }
  componentDidMount() {
    this.calculateIndex();
  }
  handleCloseNav() {
    window.scrollTo(0, 0);
    this.props.closeHeader();
  }
  calculateIndex() {
    const inIndex = parseInt(
      document.body.querySelector(".mainNav-link--current").closest("li")
        .dataset.i,
      10
    );
    this.setState({
      initialIndex: inIndex,
      activeIndex: inIndex
    });
  }
  renderSubNav(mainIndex, title, children) {
    return (
      <div className="subNav">
        <div className="subNav-title">{title}</div>
        <ol>{this.renderSubNavChildren(children, mainIndex)}</ol>
      </div>
    );
  }
  renderSubNavChildren(children, mainIndex) {
    return children.map((item, index) => {
      return (
        <li key={index}>
          <Link
            to={item.link}
            className="subNav-link"
            activeClassName="is-active"
            onClick={e => {
              this.handleCloseNav();
              this.setState({
                activeIndex: mainIndex,
                initialIndex: mainIndex
              });
            }}
          >
            {item.title}
          </Link>
        </li>
      );
    });
  }
  renderNavClose() {
    if (this.state.showNav) {
      return <button onClick={this.handleCloseNav} className="subNavClose" />;
    }
    return null;
  }
  renderMainNav() {
    return this.props.data.map((item, index) => (
      <li data-i={index} key={index}>
        <Link
          onClick={e => {
            e.preventDefault();
          }}
          onFocus={e => {
            this.setState({
              activeIndex: index
            });
          }}
          onMouseEnter={e => {
            this.setState({
              activeIndex: index
            });
          }}
          className={
            this.state.activeIndex === index
              ? "mainNav-link is-active"
              : "mainNav-link"
          }
          activeClassName="mainNav-link--current"
          to={item.link}
        >
          <div className="mainNav-link-icon">
            <Icon name={item.icon} />
          </div>
          <div className="sr-only">{item.title}</div>
        </Link>
        {this.renderSubNav(index, item.title, item.children)}
      </li>
    ));
  }
  render() {
    return (
      <nav
        className={`mainNav ${this.state.showNav ? "is-active" : ""}`}
        onMouseLeave={e => {
          this.setState({
            activeIndex: this.state.initialIndex
          });
        }}
      >
        <ol>{this.renderMainNav()}</ol>
        {this.renderNavClose()}
      </nav>
    );
  }
}

Nav.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object)
};

function mapStateToProps(state) {
  return {
    headerData: state.headerData
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      closeHeader: closeHeader
    },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps, null, {
  pure: false
})(Nav);
