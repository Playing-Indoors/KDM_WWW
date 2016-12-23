import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Modal, Button, Tabs, Tab } from 'react-bootstrap';
import { getAya } from '../../actions/getAya';
import Stat from '../../components/Stats/Stats';

class Aya extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ayaData: null,
      showModal: false,
    };
  }
  componentWillMount() {
    this.props.getAya();
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.ayaData) {
      this.setState({
        ayaData: nextProps.ayaData,
      });
    }
  }
  handleShowModal() {
    this.setState({
      showModal: true,
    });
  }
  handleCloseModal() {
    this.setState({
      showModal: false,
    });
  }
  handleSubmitStuff() {
    // send stuff to api
  }
  render() {
    if (this.state.ayaData) {
      return (
        <div className="page-aya">
          <main className="main">

            <h2>Box</h2>
            <p>A box is a container to put things in.</p>

            <h2>Stats</h2>
            <p>Shows data, supports <em>number</em>, <em>milestones</em>, <em>title</em></p>

            <div className="box">
              <header className="box-header">
                <div className="box-header-title">Box</div>
              </header>
              <div className="box-content">
                <div className="statGroup">
                  <Stat />
                  <Stat title="title" number="10" />
                  <Stat title="Test" number="5" milestone={['empty', 'empty']} />
                </div>
              </div>
            </div>

            <Tabs defaultActiveKey={2} id="uncontrolled-tab-example">
              <Tab eventKey={1} title="Tab 1">Tab 1 content</Tab>
              <Tab eventKey={2} title="Tab 2">Tab 2 content</Tab>
              <Tab eventKey={3} title="Tab 3" disabled>Tab 3 content</Tab>
            </Tabs>

            <h2>Model</h2>

            <button onClick={this.handleShowModal.bind(this)}>Click Me!</button>

            <Modal show={this.state.showModal} onHide={this.handleCloseModal.bind(this)}>
              <Modal.Header>
                <Modal.Title>
                  Survival <br />
                  <small>Max: 1</small>
                </Modal.Title>
              </Modal.Header>

              <Modal.Body>
                <div className="statSpend">
                  <button type="button" className="statSpend-change">&ndash;</button>
                  <div className="statSpend-num">1</div>
                  <button type="button" className="statSpend-change">+</button>
                </div>
                <div className="text-xs-center">
                  or <br />
                  <Button>Spend Survival</Button>
                </div>
              </Modal.Body>

              <Modal.Footer>
                <Button bsStyle="primary" onClick={this.handleSubmitStuff.bind(this)} >Confirm</Button>
                <Button>Confirm</Button>
              </Modal.Footer>

            </Modal>
          </main>
        </div>
      );
    } else {
      return null;
    }
  }
}

function mapStateToProps(state) {
  return { ayaData: state.ayaData };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getAya }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Aya);
