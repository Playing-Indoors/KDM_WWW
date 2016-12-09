import React, { Component } from 'react';
import Stat from '../../components/Stats/Stats.jsx';
import {Modal, Button, Tabs, Tab, TabContainer, TabContent, TabPane} from 'react-bootstrap';

class SurvivorXP extends Component {
  constructor(props){
    super(props);
    this.state = {
      title: 'Survival',
      number: this.props.number,
			showModal: false,
    }
  }
	handleShowModal(){
    this.setState({
      showModal: true
    });
  }
	handleCloseModal(){
    this.setState({
      showModal: false
    });
  }
	handleSubmitStuff(){
		//send stuff to api
	}
  render() {
    return (
      <div className="box">
        <header className="box-header">
          <div className="box-header-title">Survival</div>
        </header>
        <a href="#spendSurvival" role="button" onClick={this.handleShowModal.bind(this)} className="box-content">
          <div className="statGroup">
            <Stat title={this.state.title} number={this.state.number} />
          </div>
        </a>
       <Modal show={this.state.showModal} onHide={this.handleCloseModal.bind(this)}>
          <Modal.Header>
            <Modal.Title>
              Survival <br />
              <small>Max: 1</small>
            </Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <Tabs id="uncontrolled-tab-example">
              <Tab eventKey={1} title="Tab 1">
                <div className="statSpend">
                  <button type="button" className="statSpend-change">&ndash;</button>
                  <div className="statSpend-num">1</div>
                  <button type="button" className="statSpend-change">+</button>
                </div>
                <div className="text-xs-center">
                  <br />
                  <Button>Spend Survival</Button>
                  <br /><br />
                </div>
              </Tab>
              <Tab eventKey={2} title="Tab 2">
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
              </Tab>
            </Tabs>
          </Modal.Body>

          <Modal.Footer>
            <Button bsStyle="primary" onClick={this.handleSubmitStuff.bind(this)} >Confirm</Button>
            <Button>Confirm</Button>
          </Modal.Footer>
        </Modal>
      </div>
    )
  }
}

export default SurvivorXP;
