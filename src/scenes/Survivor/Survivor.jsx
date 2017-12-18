import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import _filter from "lodash/filter";
import { Link } from "react-router";
import Header from "../../components/Header/Header";
import Icon from "../../components/Icon/Icon";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";
import Notes from "./_Notes";
import Stats from "./_SurvivorStats";
import Assets from "./_Assets";
import Armor from "./_Armor";
import Bleeding from "./_Bleeding";
import Survival from "./_Survival";
import XP from "./_XP";
import Courage from "./_Courage";
import Understanding from "./_Understanding";
import Weapon from "./_Weapon";
// import Name from "./_Name";
// import Favorite from "./_Favorite";
// import Retire from "./_Retire";
// import Death from "./_Death";
import Status from "./_Status";
import DeathWidget from "./containers/DeathWidget";
import CursedWidget from "./containers/CursedItemsWidget";

import { getSettlement } from "../../actions/getSettlement";

class Survivor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      headerModal: false,
      settlementData: null,
      showPopup: "",
      survivor: null
    };
    this.handleHeaderModal = this.handleHeaderModal.bind(this);
  }
  componentDidMount() {
    if (this.props.settlementData === null) {
      this.props.getSettlement(this.props.params.oid);
    }
    if (this.props.settlementData) {
      const arr = _filter(
        this.props.settlementData.user_assets.survivors,
        survivor => {
          if (survivor.sheet._id.$oid === this.props.params.survivorId) {
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
      const arr = _filter(
        nextProps.settlementData.user_assets.survivors,
        survivor => {
          if (survivor.sheet._id.$oid === this.props.params.survivorId) {
            return survivor;
          }
        }
      );
      this.setState({
        settlementData: nextProps.settlementData,
        survivor: arr[0]
      });
    }
    if (nextProps.location !== this.props.location) {
      this.setState({
        headerModal: false
      });
    }
  }
  handleHeaderModal() {
    this.setState(prevState => ({
      headerModal: !prevState.headerModal
    }));
  }
  renderModal(name) {
    this.setState({
      showPopup: name,
      headerModal: false
    });
  }
  renderChildren() {
    if (this.props.children) {
      return <div className="headerModal is-active">{this.props.children}</div>;
    }
    return null;
  }
  renderMenuButton() {
    if (this.props.children) {
      return (
        <Link
          to={`/settlements/${this.props.params.oid}/survivors/${
            this.props.params.survivorId
          }`}
          className="header-action"
        >
          <Icon name={"minus"} />
        </Link>
      );
    }
    return (
      <Link
        to={`/settlements/${this.props.params.oid}/survivors/${
          this.props.params.survivorId
        }/menu`}
        className="header-action"
      >
        <Icon name={"pencil"} />
      </Link>
    );
  }
  render() {
    if (this.state.survivor) {
      return (
        <div>
          <Header
            back={`/settlements/${this.props.params.oid}/survivors`}
            name={this.state.survivor.sheet.name}
          >
            {this.renderMenuButton()}
            {/* <button onClick={this.handleHeaderModal} className="header-action">
              <Icon name={"pencil"} />
            </button> */}
          </Header>
          {this.renderChildren()}
          <div className="layout layout--survivor">
            <DeathWidget
              dead={this.state.survivor.sheet.dead}
              survivorId={this.props.params.survivorId}
              settlement={this.props.params.oid}
            />
            <Survival
              amount={this.state.survivor.sheet.survival}
              oid={this.state.survivor.sheet._id.$oid}
              limit={this.state.settlementData.sheet.survival_limit}
              actions={this.state.survivor.survival_actions}
              canIncrease={this.state.survivor.sheet.can_gain_survival}
              canDecrease={!this.state.survivor.sheet.cannot_spend_survival}
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
              abilityAssets={
                this.state.settlementData.game_assets.abilities_and_impairments
              }
              abilitySurvivor={
                this.state.survivor.sheet.abilities_and_impairments
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
              abilityAssets={
                this.state.settlementData.game_assets.abilities_and_impairments
              }
              abilitySurvivor={
                this.state.survivor.sheet.abilities_and_impairments
              }
            />
            <Weapon
              oid={this.state.survivor.sheet._id.$oid}
              amount={this.state.survivor.sheet["Weapon Proficiency"]}
              limit={8}
              type={this.state.survivor.sheet.weapon_proficiency_type || ""}
              milestones={[{ handle: "ui_prompt", values: [3, 8] }]}
            />
            <Stats
              oid={this.state.survivor.sheet._id.$oid}
              movement={{
                stat: this.state.survivor.sheet.Movement,
                token: this.state.survivor.sheet.attribute_detail.Movement
                  .tokens,
                gear: this.state.survivor.sheet.attribute_detail.Movement.gear
              }}
              accuracy={{
                stat: this.state.survivor.sheet.Accuracy,
                token: this.state.survivor.sheet.attribute_detail.Accuracy
                  .tokens,
                gear: this.state.survivor.sheet.attribute_detail.Accuracy.gear
              }}
              strength={{
                stat: this.state.survivor.sheet.Strength,
                token: this.state.survivor.sheet.attribute_detail.Strength
                  .tokens,
                gear: this.state.survivor.sheet.attribute_detail.Strength.gear
              }}
              evasion={{
                stat: this.state.survivor.sheet.Evasion,
                token: this.state.survivor.sheet.attribute_detail.Evasion
                  .tokens,
                gear: this.state.survivor.sheet.attribute_detail.Evasion.gear
              }}
              luck={{
                stat: this.state.survivor.sheet.Luck,
                token: this.state.survivor.sheet.attribute_detail.Luck.tokens,
                gear: this.state.survivor.sheet.attribute_detail.Luck.gear
              }}
              speed={{
                stat: this.state.survivor.sheet.Speed,
                token: this.state.survivor.sheet.attribute_detail.Speed.tokens,
                gear: this.state.survivor.sheet.attribute_detail.Speed.gear
              }}
            />
            <Armor
              oid={this.state.survivor.sheet._id.$oid}
              values={{
                brain: this.state.survivor.sheet.Insanity,
                head: this.state.survivor.sheet.Head,
                arms: this.state.survivor.sheet.Arms,
                body: this.state.survivor.sheet.Body,
                waist: this.state.survivor.sheet.Waist,
                legs: this.state.survivor.sheet.Legs
              }}
            />
            <Assets
              name="Fighting Arts"
              type={["fighting_art", "secret_fighting_art"]}
              apiType="fighting_arts"
              survivorList={this.state.survivor.sheet.fighting_arts}
              assetList={this.state.settlementData.game_assets.fighting_arts}
              oid={this.state.survivor.sheet._id.$oid}
              maximum={3}
              placeholderNumber={3}
            />
            <Assets
              name="Disorders"
              type={["core_disorders", "expansion_disorders"]}
              apiType="disorders"
              survivorList={this.state.survivor.sheet.disorders}
              assetList={this.state.settlementData.game_assets.disorders}
              oid={this.state.survivor.sheet._id.$oid}
              maximum={3}
              placeholderNumber={3}
            />
            <Assets
              name="Abilities"
              type={[
                "ability",
                "abilities_and_impairments",
                "weapon_specialization",
                "weapon_mastery"
              ]}
              apiType="abilities_and_impairments"
              survivorList={this.state.survivor.sheet.abilities_and_impairments}
              assetList={
                this.state.settlementData.game_assets.abilities_and_impairments
              }
              oid={this.state.survivor.sheet._id.$oid}
            />
            <Assets
              name="Impairments"
              type={["impairment", "curse"]}
              apiType="abilities_and_impairments"
              survivorList={this.state.survivor.sheet.abilities_and_impairments}
              assetList={
                this.state.settlementData.game_assets.abilities_and_impairments
              }
              oid={this.state.survivor.sheet._id.$oid}
            />
            <Assets
              name="Severe Injuries"
              type="severe_injury"
              apiType="abilities_and_impairments"
              survivorList={this.state.survivor.sheet.abilities_and_impairments}
              assetList={
                this.state.settlementData.game_assets.abilities_and_impairments
              }
              oid={this.state.survivor.sheet._id.$oid}
              allowDuplicates
            />
            <CursedWidget
              survivorId={this.props.params.survivorId}
              settlement={this.props.params.oid}
              items={this.state.survivor.sheet.cursed_items}
              assets={this.state.settlementData.game_assets.cursed_items}
            />
            <Notes
              oid={this.state.survivor.sheet._id.$oid}
              notes={this.state.survivor.notes}
            />
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
