import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import PropTypes from "prop-types";
import Header from "../../components/Header/Header";
import Innovations from "./_Innovations";
import SurvivalLimit from "./_SurvivalLimit";
import Population from "./_Population";
import Quarries from "./_Quarries";
import Nemesis from "./_Nemesis";
import Principles from "./_Principles";
import Locations from "./_Locations";
import DeathCount from "./_Deaths";
import DefeatedMonsters from "./_Monsters";
import Notes from "../Settlement/_Notes";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";
import { getSettlement } from "../../actions/getSettlement";

class Settlement extends React.Component {
  componentDidMount() {
    // Grabs any current settlement data that we might have
    const currentSettlement = this.props.settlementData;
    const id = this.props.params.oid;
    if (
      // Checks to see if we have data
      currentSettlement === null ||
      // Makes sure that data is up to date
      currentSettlement.sheet._id.$oid !== id
    ) {
      this.props.getSettlement(id);
    }
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
          <Header name={this.props.settlementData.sheet.name} />
          <div className="layout layout--settlement">
            <SurvivalLimit
              oid={this.props.settlementData.sheet._id.$oid}
              amount={this.props.settlementData.sheet.survival_limit}
            />
            {/* <LanternYear
              amount={this.props.settlementData.sheet.lantern_year}
            /> */}

            <DeathCount amount={this.props.settlementData.sheet.death_count} />

            <Population amount={this.props.settlementData.sheet.population} />

            <Principles
              amount={this.props.settlementData.sheet.principles.length}
            />

            <Innovations
              list={this.props.settlementData.sheet.innovations}
              assets={this.props.settlementData.game_assets.innovations}
              oid={this.props.settlementData.sheet._id.$oid}
            />

            <Locations
              amount={this.props.settlementData.sheet.locations.length}
            />

            <DefeatedMonsters
              amount={this.props.settlementData.sheet.defeated_monsters.length}
            />

            <Quarries
              amount={
                Object.keys(this.props.settlementData.sheet.nemesis_encounters)
                  .length
              }
            />

            <Nemesis
              amount={this.props.settlementData.sheet.defeated_monsters.length}
              oid={this.props.settlementData.sheet._id.$oid}
            />

            <Notes />
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

Settlement.propTypes = {
  getSettlement: PropTypes.func,
  params: PropTypes.shape({
    oid: PropTypes.string.isRequired
  }),
  settlementData: PropTypes.shape({
    sheet: PropTypes.object,
    user_assets: PropTypes.object
  })
};

export default connect(mapStateToProps, mapDispatchToProps)(Settlement);
