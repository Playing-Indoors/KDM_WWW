import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import PropTypes from "prop-types";
import Header from "../../components/Header/Header";
import Widget from "../../components/Widget/Widget";
import { Button } from "reactstrap";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";
import LogRecord from "../../components/LogRecord/LogRecord";
import { getSettlement } from "../../actions/getSettlement";
import { getLogs } from "../../actions/log";

class Log extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      page: 0,
      perPage: 40,
      log: []
    };

    this.handlePager = this.handlePager.bind(this);
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
  handlePager(step) {
    this.setState(prevState => ({
      page: prevState.page + step
    }));
  }
  renderLog() {
    if (this.state.log.length > 0) {
      const begin = this.state.page * this.state.perPage;
      const end = Math.min(begin + this.state.perPage, this.state.log.length);
      const arr = this.state.log.slice(begin, end);
      return arr.map(item => <LogRecord log={item} key={item._id.$oid} />);
    }
    return null;
  }
  renderPrev() {
    return (
      <Button
        color="link"
        onClick={() => {
          this.handlePager(-1);
        }}
        disabled={this.state.page === 0}
      >
        Prev
      </Button>
    );
  }
  renderNext() {
    const current = this.state.perPage * this.state.page + this.state.perPage;
    return (
      <Button
        color="link"
        onClick={() => {
          this.handlePager(1);
        }}
        disabled={current >= this.state.log.length}
      >
        Next
      </Button>
    );
  }
  render() {
    if (!this.state.loading) {
      return (
        <div>
          <Header name={"Campaign Log"} />
          <div className="layout layout--log">
            {this.renderLog()}
            <div className="text-center">
              {this.renderPrev()}
              {this.renderNext()}
            </div>
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
