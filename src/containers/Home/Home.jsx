import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getHome } from '../../actions/getHome';
import Nav from '../../components/Nav/Nav';
import Header from '../../components/Header/Header';
import List from '../../components/List/List';
import Button from '../../components/Button/Button';
import DeleteMe from '../DeleteMe';


class Home extends React.Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    this.props.getHome();
  }
  render() {
    if (this.props.homeData) {
      return (
        <div className="page-home">
          <Nav data={this.props.homeData.nav} />
          <Header data={this.props.homeData.page} />
          <main className="main">
            <Button text="Create New Campaign" style="secondary" size="lg btn-block" />
            <List data={this.props.homeData.campaign} />
          </main>

          <DeleteMe />

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
  return bindActionCreators({
    getHome: getHome,
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
