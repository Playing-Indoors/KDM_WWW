import React, { Component } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';
import Stat from '../../components/Stats/Stats';
import StatAdjust from '../../components/Stats/StatAdjust';

class StatGroupObj extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // statObj: props.statObj,
      title: props.statObj.title,
      stats: props.statObj.children,
      description: props.statObj.description,
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
    return this.state.stats.map((item, index) =>
      <Stat
        key={index}
        name={item.name}
        amount={item.amount}
        max={item.max}
        min={item.min}
        milestones={item.milestones}
      />,
    );
  }
  renderStatSpend() {
    return this.state.stats.map((item, index) =>
      <StatAdjust
        key={index}
        name={item.name}
        amount={item.amount}
        max={item.max}
        min={item.min}
        milestones={item.milestones}
      />,
    );
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

StatGroupObj.propTypes = {
  statObj: React.PropTypes.shape({
    title: React.PropTypes.string.isRequired,
    style: React.PropTypes.string,
    description: React.PropTypes.string,
    // children: React.PropTypes.arrayOf(React.PropTypes.shape().isRequired,
  }),
};

export default StatGroupObj;
