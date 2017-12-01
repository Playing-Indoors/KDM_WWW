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
// import CursedItems from "./_CursedItems";

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
          to={`/settlements/${this.props.params.oid}/survivors/${this.props
            .params.survivorId}`}
          className="header-action"
        >
          <Icon name={"minus"} />
        </Link>
      );
    }
    return (
      <Link
        to={`/settlements/${this.props.params.oid}/survivors/${this.props.params
          .survivorId}/menu`}
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
          {/* <div
            className={`headerModal ${this.state.headerModal
              ? "is-active"
              : ""}`}
          >
            <div className="headerModal-links">
              <Link to={"settlements/59ceeefb8740d90655610539/log"}>
                View Log
              </Link>
              <Link to={"/settlements/create"} onClick={this.handleHeaderModal}>
                Make Favorite
              </Link>
              <Link to={"/settlements/create"} onClick={this.handleHeaderModal}>
                Rename
              </Link>
              <Link to={`${url}/sex`}>Gender Swap</Link>
              <Link to={`${url}/cursed`}>Manage Cursed Gear</Link>
              <Link tabIndex="0" onClick={() => this.renderModal("retire")}>
                Force Retirement
              </Link>
              <Link to={"/settlements/create"}>Kill Survivor</Link>
            </div>
          </div> */}
          {this.renderChildren()}
          <div className="layout layout--survivor">
            {/* <h1 className="text-center">{this.state.survivor.sheet.name}</h1> */}
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
              apiList={this.props.settlementData.game_assets.weapon_proficiency}
              amount={this.state.survivor.sheet["Weapon Proficiency"]}
              limit={8}
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
              type="disorder"
              apiType="disorders"
              survivorList={this.state.survivor.sheet.disorders}
              assetList={this.state.settlementData.game_assets.disorders}
              oid={this.state.survivor.sheet._id.$oid}
              maximum={3}
              placeholderNumber={3}
            />
            <Assets
              name="Abilities"
              type={["ability", "weapon_specialization"]}
              apiType="abilities_and_impairments"
              survivorList={this.state.survivor.sheet.abilities_and_impairments}
              assetList={
                this.state.settlementData.game_assets.abilities_and_impairments
              }
              oid={this.state.survivor.sheet._id.$oid}
            />
            <Assets
              name="Impairments"
              type="impairment"
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
            <Notes
              oid={this.state.survivor.sheet._id.$oid}
              notes={this.state.survivor.notes}
            />
            {/* <Status
              className={""}
              oid={this.state.survivor.sheet._id.$oid}
              value={this.state.survivor.sheet.cannot_spend_survival}
              flag={"cannot_spend_survival"}
              label={"Cannot spend survival"}
            />
            <Status
              className={""}
              oid={this.state.survivor.sheet._id.$oid}
              value={this.state.survivor.sheet.cannot_use_fighting_arts}
              flag={"cannot_use_fighting_arts"}
              label={"Cannot use fighting arts"}
            />
            <Status
              className={""}
              oid={this.state.survivor.sheet._id.$oid}
              value={this.state.survivor.sheet.skip_next_hunt}
              flag={"skip_next_hunt"}
              label={"Skip next hunt"}
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
