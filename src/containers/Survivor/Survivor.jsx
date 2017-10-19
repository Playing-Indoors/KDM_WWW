import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import _filter from "lodash/filter";
import Header from "../../components/Header/Header";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";
import SurvivorAbilities from "../../components/Survivor/SurvivorAbilities";
import SurvivorArmor from "../../components/Survivor/SurvivorArmor";
import SurvivorDisorders from "../../components/Survivor/SurvivorDisorders";
import SurvivorFightArts from "../../components/Survivor/SurvivorFightArts";
import SurvivorImpairments from "../../components/Survivor/SurvivorImpairments";
import Notes from "./_Notes";
import SurvivorStats from "../../components/Survivor/SurvivorStats";
import Stats from "./_SurvivorStats";
import Assets from "./_Assets";
import Bleeding from "./_Bleeding";
import Survival from "./_Survival";
import XP from "./_XP";
import Courage from "./_Courage";
import Understanding from "./_Understanding";
import Weapon from "./_Weapon";
import { getSettlement } from "../../actions/getSettlement";

// TODO
// [ ] Survivor name should be in page heading
// [x] Survivor boxes should be css grid
//

class Survivor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      settlementData: null,
      survivor: null,
      fightingArts: ["Unconscious Fighter", "Knights Step", "Keg Smash"]
    };
  }
  componentDidMount() {
    if (this.props.settlementData === null) {
      const id = window.location.pathname.split("/");
      this.props.getSettlement(id[2]);
    }
    if (this.props.settlementData) {
      let routeId = window.location.href.substr(
        window.location.href.lastIndexOf("/") + 1
      );
      let arr = _filter(
        this.props.settlementData.user_assets.survivors,
        survivor => {
          if (survivor.sheet._id.$oid === routeId) {
            return survivor;
          }
        }
      );
      this.setState({
        settlementData: this.props.settlementData,
        survivor: arr[0]
      });
    }
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.settlementData && this.props.settlementData === null) {
      this.setState({
        settlementData: nextProps.settlementData
      });
    }
    if (nextProps.settlementData) {
      let routeId = window.location.href.substr(
        window.location.href.lastIndexOf("/") + 1
      );
      let arr = _filter(
        nextProps.settlementData.user_assets.survivors,
        survivor => {
          if (survivor.sheet._id.$oid === routeId) {
            return survivor;
          }
        }
      );
      this.setState({
        settlementData: nextProps.settlementData,
        survivor: arr[0]
      });
    }
  }
  render() {
    if (this.state.survivor) {
      return (
        <div>
          <Header name={this.state.survivor.sheet.name} showBack />
          <div className="layout layout--survivor">
            {/* <h1 className="text-center">{this.state.survivor.sheet.name}</h1> */}
            <Survival
              amount={this.state.survivor.sheet.survival}
              oid={this.state.survivor.sheet._id.$oid}
              limit={this.state.settlementData.sheet.survival_limit}
              actions={this.state.survivor.survival_actions}
            />
            <Bleeding
              amount={this.state.survivor.sheet.bleeding_tokens}
              oid={this.state.survivor.sheet._id.$oid}
              limit={this.state.survivor.sheet.max_bleeding_tokens}
            />
            <XP
              oid={this.state.survivor.sheet._id.$oid}
              amount={this.state.survivor.sheet.hunt_xp}
              milestones={
                this.state.settlementData.survivor_attribute_milestones.hunt_xp
              }
            />
            <Courage
              oid={this.state.survivor.sheet._id.$oid}
              amount={this.state.survivor.sheet.Courage}
              limit={9}
              milestones={
                this.state.settlementData.survivor_attribute_milestones.Courage
              }
            />
            <Understanding
              oid={this.state.survivor.sheet._id.$oid}
              amount={this.state.survivor.sheet.Understanding}
              limit={9}
              milestones={
                this.state.settlementData.survivor_attribute_milestones
                  .Understanding
              }
            />
            <Weapon
              oid={this.state.survivor.sheet._id.$oid}
              amount={this.state.survivor.sheet["Weapon Proficiency"]}
              limit={8}
              milestones={[{ handle: "ui_prompt", values: [3, 8] }]}
            />
            {/* <Stats
              oid={this.state.survivor.sheet._id.$oid}
              stats={[
                { movement: this.state.survivor.sheet.Movement },
                { accuracy: this.state.survivor.sheet.Accuracy },
                { strength: this.state.survivor.sheet.Strength },
                { evasion: this.state.survivor.sheet.Evasion },
                { luck: this.state.survivor.sheet.Luck },
                { speed: this.state.survivor.sheet.Speed }
              ]}
            /> */}
            <Stats
              oid={this.state.survivor.sheet._id.$oid}
              movement={this.state.survivor.sheet.Movement}
              accuracy={this.state.survivor.sheet.Accuracy}
              strength={this.state.survivor.sheet.Strength}
              evasion={this.state.survivor.sheet.Evasion}
              luck={this.state.survivor.sheet.Luck}
              speed={this.state.survivor.sheet.Speed}
              modifiers={this.state.survivor.sheet.attribute_detail}
            />
            {/* <SurvivorStats
              movement={parseInt(this.state.survivor.sheet.Movement, 10)}
              accuracy={parseInt(this.state.survivor.sheet.Accuracy, 10)}
              strength={parseInt(this.state.survivor.sheet.Strength, 10)}
              evasion={parseInt(this.state.survivor.sheet.Evasion, 10)}
              luck={parseInt(this.state.survivor.sheet.Luck, 10)}
              speed={parseInt(this.state.survivor.sheet.Speed, 10)}
            /> */}
            <SurvivorArmor
              insanity={parseInt(this.state.survivor.sheet.Insanity, 10)}
              head={parseInt(this.state.survivor.sheet.Head, 10)}
              arms={parseInt(this.state.survivor.sheet.Arms, 10)}
              body={parseInt(this.state.survivor.sheet.Body, 10)}
              waist={parseInt(this.state.survivor.sheet.Waist, 10)}
              legs={parseInt(this.state.survivor.sheet.Legs, 10)}
            />
            <Assets
              name="Fighting Arts"
              type="fighting_art"
              survivorList={this.state.survivor.sheet.fighting_arts}
              assetList={this.state.settlementData.game_assets.fighting_arts}
              oid={this.state.survivor.sheet._id.$oid}
              maximum={3}
              placeholderNumber={3}
            />
            <Assets
              name="Disorders"
              type="disorder"
              survivorList={this.state.survivor.sheet.disorders}
              assetList={this.state.settlementData.game_assets.disorders}
              oid={this.state.survivor.sheet._id.$oid}
              maximum={3}
              placeholderNumber={3}
            />
            <Assets
              name="Abilities"
              type="ability"
              survivorList={this.state.survivor.sheet.abilities_and_impairments}
              assetList={
                this.state.settlementData.game_assets.abilities_and_impairments
              }
              oid={this.state.survivor.sheet._id.$oid}
            />
            <Assets
              name="Impairments"
              type="impairment"
              survivorList={this.state.survivor.sheet.abilities_and_impairments}
              assetList={
                this.state.settlementData.game_assets.abilities_and_impairments
              }
              oid={this.state.survivor.sheet._id.$oid}
            />
            <Assets
              name="Severe Injuries"
              type="severe_injury"
              survivorList={this.state.survivor.sheet.abilities_and_impairments}
              assetList={
                this.state.settlementData.game_assets.abilities_and_impairments
              }
              oid={this.state.survivor.sheet._id.$oid}
              allowDuplicates
            />
            {/* <Notes
              oid={this.state.survivor.sheet._id.$oid}
              notes={this.state.survivor.sheet.notes}
            /> */}
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

export default connect(mapStateToProps, mapDispatchToProps)(Survivor);
