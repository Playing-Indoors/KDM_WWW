import React, { Component } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, TabContent, TabPane, Button } from 'reactstrap';
import Stat from '../../components/Stats/Stats';

const { number } = React.PropTypes;

class Survival extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Survival',
      number: this.props.number,
      showModal: false,
      activeTab: '1',
      survivalLimit: this.props.survivalLimit,
    };
    this.toggleModal = this.toggleModal.bind(this);
  }
  toggleModal() {
    this.setState({
      showModal: !this.state.showModal,
    });
  }
  toggleTab(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab,
      });
    }
  }

  render() {
    return (
      <div className="box">
        <header className="box-header">
          <div className="box-header-title">Survival</div>
        </header>
        <a href="#spendSurvival" role="button" onClick={this.toggleModal} className="box-content">
          <div className="statGroup">
            <Stat title={this.state.title} number={this.state.number} />
          </div>
        </a>
        <Modal isOpen={this.state.showModal} toggle={this.toggleModal}>
          <ModalHeader>
            Survival <br />
            <small>Max: {this.state.survivalLimit}</small>
          </ModalHeader>
          <ModalBody>
            <TabContent activeTab={this.state.activeTab}>
              <TabPane tabId="1">
                <div className="statSpend">
                  <button type="button" className="statSpend-change">&ndash;</button>
                  <div className="statSpend-num">1</div>
                  <button type="button" className="statSpend-change">+</button>
                </div>
                <div className="text-xs-center">
                  <br />
                  <Button onClick={() => { this.toggleTab('2'); }}>Spend Survival</Button>
                  <br /><br />
                </div>
              </TabPane>
              <TabPane tabId="2">
                <div className="text-xs-center">
                  which feat will the survivor be performing?
                  <br />
                  <Button>Dodge</Button>
                  <Button>Encourage</Button>
                  <Button>Dash</Button>
                  <Button>Surge</Button>
                  <br />
                  <br />
                </div>
              </TabPane>
            </TabContent>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggleModal}>Confirm</Button>
          </ModalFooter>
        </Modal>

      </div>
    );
  }
}

Survival.propTypes = {
  survivalLimit: number.isRequired,
  number: number.isRequired,
};

export default Survival;
