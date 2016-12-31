import React, { Component } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';
import Stat from '../../components/Stats/Stats';
import StatAdjust from '../../components/Stats/StatAdjust';

class StatGroup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: props.title,
      stats: props.stats,
      description: props.description,
      showModal: false,
    };
  }
  // Toggles the modal, allows to explicity show and hide
  handleModal(show = !this.state.showModal) {
    this.setState({
      showModal: show,
    });
  }
  // Renders our milestones and attaches their class
  renderStat() {
    return this.state.stats.map((item, index) => {
      return <Stat key={index} title={item} number={0} />;
    });
  }
  renderStatSpend() {
    return this.state.stats.map((item, index) => {
      return <StatAdjust key={index} title={item} number={0} />;
    });
  }
  render() {
    return (
      <div className="box">
        <header className="box-header">
          <div className="box-header-title">{this.state.title}</div>
        </header>
        <button onClick={() => { this.handleModal(); }} type="button" className="box-content">
          <div className="statGroup">
            {this.renderStat()}
          </div>
        </button>
        <Modal isOpen={this.state.showModal} toggle={() => { this.handleModal(); }}>
          <ModalHeader>{this.state.title}</ModalHeader>
          <ModalBody>
            <div className="statSpendGroup">
              {this.renderStatSpend()}
            </div>
          </ModalBody>
          <ModalFooter>
            <Button onClick={() => { this.handleModal(false); }} >Cancel</Button>
            <Button color="primary">Confirm</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

StatGroup.propTypes = {
  title: React.PropTypes.string.isRequired,
  stats: React.PropTypes.arrayOf(React.PropTypes.string).isRequired,
  description: React.PropTypes.string,
};

export default StatGroup;
