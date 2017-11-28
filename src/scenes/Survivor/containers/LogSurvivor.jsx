import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import PropTypes from "prop-types";
import Header from "../../../components/Header/Header";
import LoadingSpinner from "../../../components/LoadingSpinner/LoadingSpinner";
import { getSettlement } from "../../../actions/getSettlement";
import { getLogs } from "../../../actions/log";

class Log extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      log: []
    };
  }
  componentDidMount() {
    const id = window.location.pathname.split("/");
    if (this.props.settlementData === null) {
      this.props.getSettlement(id[2]);
    }
    getLogs(id[2])
      .then(res => {
        console.log("OK LOGS", res);
        this.setState({
          log: res.data,
          loading: false
        });
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

  renderLog() {
    if (this.state.log.length > 0) {
      return this.state.log.map(item => (
        <div key={item._id.$oid}>
          <small>
            LY {item.ly}:&nbsp;
            {item.event}
          </small>
        </div>
      ));
    }
    return null;
  }

  render() {
    if (!this.state.loading) {
      return (
        <div>
          <Header name={"Campaign Log"} />
          <div className="layout layout--log">{this.renderLog()}</div>
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
