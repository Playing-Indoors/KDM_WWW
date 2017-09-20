import React, { Component } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import MilestoneDot from "./MilestoneDot";

class MilestoneDots extends Component {
  constructor(props) {
    super(props);

    // Form our new milestone array from props
    const newMiles = [];
    if (this.props.milestones.length > 0) {
      this.props.milestones.forEach(event => {
        event.values.forEach(value => {
          newMiles.push({
            value,
            handle: event.handle
          });
        });
      });
      newMiles.sort((a, b) => a.value - b.value);
    }

    this.state = {
      milestones: newMiles
    };
  }
  renderMilestones() {
    if (this.props.count > 0) {
      return Array(this.props.count)
        .fill()
        .map((x, index) => {
          // Search our milestone array to see if there's a match
          const IS_EVENT = this.state.milestones.findIndex(
            i => i.value === index + 1
          );
          // if (IS_EVENT > -1) {
          //   console.log(
          //     `We hit story ${this.state.milestones[IS_EVENT].handle}`
          //   );
          // }
          const IS_FILLED = this.props.current > index;
          let type = "default";
          // If milestone event happened
          if (IS_FILLED && IS_EVENT > -1) {
            type = "activeEvent";
          } else if (IS_EVENT > -1) {
            type = "defaultEvent";
          } else if (IS_FILLED) {
            type = "active";
          }
          if (this.props.onlyMilestones && IS_EVENT > -1) {
            // Only show event milestones
            return (
              <MilestoneDot type={type} key={index} mini={this.props.mini} />
            );
          } else if (!this.props.onlyMilestones) {
            // Show all milestones
            return (
              <MilestoneDot type={type} key={index} mini={this.props.mini} />
            );
          }
          return null;
        });
    }
    return null;
  }
  render() {
    return (
      <div
        className={classNames("milestoneDots", {
          "milestoneDots--mini": this.props.mini
        })}
      >
        {this.renderMilestones()}
      </div>
    );
  }
}

/*
	Gameplan for props

	Create a milestone array of objects
	[
		{
			value: 1,
			handle: 'core_bold',
		}
	]

	To render

	for 0 in count
		check if current >= count, fill
		if there's a milestone value that matches i
			display []story
		else if !onlyMilestones
			display normal

*/

MilestoneDots.propTypes = {
  count: PropTypes.number,
  current: PropTypes.number,
  // milestones describe the style as well as emits and event
  milestones: PropTypes.arrayOf(
    PropTypes.shape({
      handle: PropTypes.string,
      values: PropTypes.arrayOf(PropTypes.number)
    })
  ),
  mini: PropTypes.bool,
  onlyMilestones: PropTypes.bool
};

MilestoneDots.defaultProps = {
  count: 1,
  current: 0,
  milestones: [],
  mini: false,
  onlyMilestones: false
};

export default MilestoneDots;
