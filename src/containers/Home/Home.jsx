import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Button } from "reactstrap";
import { getHome } from "../../actions/getHome";
import List from "../../components/List/List";

class Home extends React.Component {
  componentWillMount() {
    this.props.getHome();
  }
  render() {
    if (this.props.homeData) {
      return (
        <div>
          <Button color="secondary" size="lg" block>
            Create New Campaign
          </Button>
          <List data={this.props.homeData.campaign} />
        </div>
      );
    }
    return null;
  }
}

// The BELOW IS REDUX DATA FLOW stuff , dont worry about it
// THIS IS HOW WE CALL THE API AND DO DATA FLOW, ILL EXPLAINS LATER
function mapStateToProps(state) {
  return { homeData: state.homeData };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      getHome: getHome
    },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
