import React, { Component } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import MilestoneDot from "./MilestoneDot";

// TODO: make this support non dots too (used in survival)

function buildMilestone(milestones, size) {
  // Join our milestone array
  const joinMilestones = [];
  milestones.forEach(event => {
    event.values.forEach(value => {
      joinMilestones.push({
        value,
        handle: event.handle
      });
    });
  });
  joinMilestones.sort((a, b) => a.value - b.value);

  // Build our array of milestones
  const arrMilestones = Array(size)
    .fill()
    .map((x, index) => {
      const findMilestone = joinMilestones.findIndex(
        item => item.value === index + 1
      );
      if (findMilestone > -1) {
        return {
          handle: joinMilestones[findMilestone].handle
        };
      }
      return {};
    });
  return arrMilestones;
}

class MilestoneDots extends Component {
  constructor(props) {
    super(props);

    this.state = {
      milestones: buildMilestone(this.props.milestones, this.props.size)
    };
  }

  componentWillReceiveProps(nextProps) {
    // if (nextProps.milestones) {
    //   this.setState({
    //     milestones: buildMilestone(nextProps.milestones, nextProps.size)
    //   });
    // }
    if (nextProps.current) {
      this.setState({
        current: nextProps.current
      });
    }
    if (nextProps.milestones) {
      this.setState({
        milestones: buildMilestone(nextProps.milestones, nextProps.size),
        current: nextProps.current
      });
    }
  }
  renderMilestones() {
    if (this.state.milestones.length > 0) {
      return this.state.milestones.map((stone, index) => {
        let type = "default";
        const IS_EVENT = Object.prototype.hasOwnProperty.call(stone, "handle");
        const IS_FILLED = this.props.current > index;
        if (IS_FILLED && IS_EVENT) {
          type = "activeEvent";
        } else if (IS_EVENT) {
          type = "defaultEvent";
        } else if (IS_FILLED) {
          type = "active";
        }
        if (
          (this.props.onlyMilestones && IS_EVENT) ||
          !this.props.onlyMilestones
        ) {
          return (
            <MilestoneDot
              type={type}
              key={index}
              mini={this.props.mini}
              handle={stone.handle}
            />
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

MilestoneDots.propTypes = {
  size: PropTypes.number,
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
  size: 1,
  current: 0,
  milestones: [],
  mini: false,
  onlyMilestones: false
};

export default MilestoneDots;
