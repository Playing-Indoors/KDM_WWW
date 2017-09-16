import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Survivor from "../Survivor/Survivor.jsx";
import CardList from "../../components/CardList/CardList";
import _ from "underscore";

class SurvivorHome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      settlementData: null,
      survivorData: null,
      currentSurvivor: null
    };
  }
  componentDidMount() {
    let path = this.props.location.pathname.match(/^\/settlements\/(\d+)/);
    console.log(path[1]);
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.settlementData) {
      this.setState({
        settlementData: nextProps.settlementData,
        survivorData: nextProps.settlementData.user_assets.survivors
      });
    }
  }
  loadSurvivor(id) {
    let arr = _.filter(this.state.survivorData, survivor => {
      if (survivor.sheet._id.$oid === id) {
        return survivor;
      }
    });
    this.setState({
      currentSurvivor: arr[0]
    });
  }
  renderSurvivorLinks() {
    return this.state.survivorData.map((survivor, l) => {
      return (
        <div key={l}>
          <button
            onClick={this.loadSurvivor.bind(this, survivor.sheet._id.$oid)}
          >
            {survivor.sheet.name}
          </button>
          <CardList
            onClick={this.loadSurvivor.bind(this, survivor.sheet._id.$oid)}
            name={survivor.sheet.name}
            desc={`Hunt XP: ${survivor.sheet.hunt_xp}`}
            href="#route"
          />
        </div>
      );
    });
  }
  render() {
    if (this.state.settlementData) {
      return (
        <div>
          {this.renderSurvivorLinks()}
          {this.state.currentSurvivor && this.state.settlementData ? (
            <div>
              {this.state.currentSurvivor.sheet.name}
              <Survivor
                currentSurvivor={this.state.currentSurvivor}
                settlementData={this.state.settlementData}
              />
            </div>
          ) : null}
        </div>
      );
    }
    return null;
  }
}

function mapStateToProps(state) {
  return {
    settlementData: state.settlementData
  };
}

export default connect(mapStateToProps, null)(SurvivorHome);
