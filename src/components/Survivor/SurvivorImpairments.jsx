import React, { Component } from "react";
import PropTypes from "prop-types";
import Stats from "../../components/Stats/Stats";
import StatAdjust from "../../components/Stats/StatAdjust";
import StatBox from "../../components/Stats/StatBox";

class SurvivorImpairments extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      name: "Impairments",
      min: 0
    };
    this.handleModal = this.handleModal.bind(this);
  }
  handleModal() {
    this.setState({
      showModal: !this.state.showModal
    });
  }
  render() {
    return (
      <StatBox
        myClass="survivorImpairments"
        name={this.state.name}
        modalBody={<div>Nothing</div>}
      />
    );
  }
}

SurvivorImpairments.propTypes = {
  amount: PropTypes.number,
  max: PropTypes.number
};

export default SurvivorImpairments;
