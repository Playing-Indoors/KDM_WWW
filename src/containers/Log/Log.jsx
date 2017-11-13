import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import PropTypes from "prop-types";
import Header from "../../components/Header/Header";
import Widget from "../../components/Widget/Widget";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";
import { getSettlement } from "../../actions/getSettlement";
import { getLogs } from "../../actions/log";

class Log extends React.Component {
  componentDidMount() {
    const id = window.location.pathname.split("/");
    if (this.props.settlementData === null) {
      this.props.getSettlement(id[2]);
    }
    getLogs(id[2])
      .then(res => {
        console.log("OK LOGS", res);
      })
      .catch(err => {
        console.log(err);
      });
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.settlementData && this.props.settlementData === null) {
      this.setState({
        settlement: nextProps.settlementData
      });
    }
  }

  render() {
    if (this.props.settlementData) {
      return (
        <div>
          <Header name={"Campaign Log"} />
          <div className="layout layout--log">
            <h3 className="text-center">Doomhaven</h3>
            <Widget title="Most Recent Milestone">123</Widget>
            <Widget title="Most Recent Death">123</Widget>
            <Widget title="Most Recent Birth">123</Widget>
            <Widget title="Most Recent Hunt">123</Widget>
            <Widget title="Last 5 Logs">123</Widget>
          </div>
        </div>
      );
    }
    return <LoadingSpinner />;
  }
}

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

Log.propTypes = {
  getSettlement: PropTypes.func,
  settlementData: PropTypes.shape({
    sheet: PropTypes.object,
    user_assets: PropTypes.object
  })
};

export default connect(mapStateToProps, mapDispatchToProps)(Log);
