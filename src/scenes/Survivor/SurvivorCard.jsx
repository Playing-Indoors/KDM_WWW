import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Icon from "../../components/Icon/Icon";
import { Link } from "react-router";

class SurvivorCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      survivorId: this.props.survivor._id.$oid
    };
  }
  assetLookup(handle, type) {
    const asset = this.props.settlementData.game_assets[type][handle];
    if (asset) {
      return asset.name;
    }
    return null;
  }
  renderIcon(name, size) {
    if (name.length > 0) {
      return <Icon name={name} size={size} />;
    }
    return null;
  }
  renderSex() {
    const sex = this.props.survivor.sex === "F" ? "female" : "male";
    return <Icon name={sex} size={16} />;
  }
  renderFavorite() {
    const favorite =
      this.props.survivor.favorite.indexOf(this.props.userData.user.login) !==
      -1;
    if (favorite) {
      return (
        <div className="text-yellow">
          <Icon name={"star"} size={24} />
        </div>
      );
    }
    return null;
  }
  renderStat(label, value) {
    return (
      <div className="pr-3 flex items-center">
        <span className="pr-1">{label}:</span>
        <span className="inline-block text-white max-w-12 truncate">
          {value}
        </span>
      </div>
    );
  }
  renderAsset(label, type) {
    const list = this.props.survivor[type].map(asset =>
      this.assetLookup(asset, type)
    );
    const filter = list.filter(i => i.indexOf("Specialization") === -1);
    if (filter.length > 0) {
      // So settlement specilization kind of fucks with this list. so i'm
      // going to hardcode filtering out specilazation.
      // I don't know if this is a good idea. But it's worth trying -CK
      return (
        <div className="pb-1">
          <span className="pr-1">{label}:</span>
          <span className="text-white">{filter.join(", ")}</span>
        </div>
      );
    }
    return null;
  }
  renderSkinny() {
    if (this.props.detailed) {
      return null;
    }
    return (
      <div className="mt-2 text-xs text-grey">
        {this.renderStat("XP", this.props.survivor.hunt_xp)}
      </div>
    );
  }
  renderDetails() {
    if (this.props.detailed) {
      let weapon = this.props.survivor["Weapon Proficiency"];
      const weaponType = this.props.survivor.weapon_proficiency_type;
      if (weaponType) {
        const spec = this.assetLookup(
          `${weaponType}_specialization`,
          "weapon_specializations"
        );
        weapon = `${weapon} - ${spec.substring(17)}`;
      }
      return (
        <div className="mt-2 text-xs text-grey">
          <div className="flex sm:justify-between items-center flex-wrap sm:flex-no-wrap">
            {this.renderStat("XP", this.props.survivor.hunt_xp)}
            {this.renderStat("Sur", this.props.survivor.survival)}
            {this.renderStat("Cou", this.props.survivor.Courage)}
            {this.renderStat("Und", this.props.survivor.Understanding)}
            {this.renderStat("Wea", weapon)}
            {this.renderStat("Ins", this.props.survivor.Insanity)}
          </div>
          <div className="flex sm:justify-between items-center flex-wrap sm:flex-no-wrap">
            {this.renderStat("Mov", this.props.survivor.Movement)}
            {this.renderStat("Acc", this.props.survivor.Accuracy)}
            {this.renderStat("Str", this.props.survivor.Strength)}
            {this.renderStat("Eva", this.props.survivor.Evasion)}
            {this.renderStat("Luc", this.props.survivor.Luck)}
            {this.renderStat("Spd", this.props.survivor.Speed)}
          </div>
          <div>
            {this.renderAsset("Fighting Arts", "fighting_arts")}
            {this.renderAsset("Disorders", "disorders")}
            {this.renderAsset(
              "Abilties & Impairments",
              "abilities_and_impairments"
            )}
            {this.renderAsset("Cursed", "cursed_items")}
          </div>
        </div>
      );
    }
    return null;
  }
  render() {
    const link = `/settlements/${this.props.settlement}/survivors/${this.state
      .survivorId}`;
    return (
      <Link
        to={link}
        className="block p-4 bg-grey-darker text-white hover:text-white hover:no-underline hover:bg-grey-darkest focus:bg-grey-darkest"
      >
        <div className="flex justify-between items-center">
          {this.renderSex()}
          <div className="flex-1 flex items-baseline">
            <div className="px-3">{this.props.survivor.name}</div>
            {this.renderSkinny()}
          </div>
          {this.renderFavorite()}
        </div>
        {this.renderDetails()}
      </Link>
    );
  }
}

function mapStateToProps(state) {
  return {
    settlementData: state.settlementData,
    userData: state.userData
  };
}

SurvivorCard.defaultProps = {
  detailed: false
};

SurvivorCard.propTypes = {
  survivor: PropTypes.shape({}),
  settlement: PropTypes.string,
  detailed: PropTypes.bool
};

export default connect(mapStateToProps, null)(SurvivorCard);
