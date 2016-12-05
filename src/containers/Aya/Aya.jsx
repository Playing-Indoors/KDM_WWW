import React from 'react';
import {connect} from 'react-redux';
import {getAya} from '../../actions/getAya';
import {bindActionCreators} from 'redux';
import Stat from '../../components/Stats/Stats.jsx';
import {Modal, Button} from 'react-bootstrap';

class Aya extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			ayaData: null,
			showModal: false
		}
	}
	componentWillMount(){
		this.props.getAya();
	}
	componentWillReceiveProps(nextProps){
		if(nextProps.ayaData){
			this.setState({
				ayaData: nextProps.ayaData
			})
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
		if(this.state.ayaData){
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
                  <Stat title="Test" number="5" milestone={['empty','empty']} />
                </div>
              </div>
            </div>

            <h2>Model</h2>

            {/* <Modal show={true}>
              <Modal.Header>
                <Modal.Title>
                  Survival <br />
                  <small>Limit: 1</small>
                </Modal.Title>
              </Modal.Header>

              <Modal.Body>
                <div className="statSpend">
                  <button type="button" className="statSpend-change">&ndash;</button>
                  <div className="statSpend-num">1</div>
                  <button type="button" className="statSpend-change">+</button>
                </div>
                or <br />
                <Button>Spend Survival</Button>
              </Modal.Body>

              <Modal.Footer>
                <Button bsStyle="primary">Confirm</Button>
                <Button bsStyle="secondary">Confirm</Button>
              </Modal.Footer>

            </Modal> */}
          </main>
					<button onClick={this.handleShowModal.bind(this)}>Click Me!</button>
					<Modal show={this.state.showModal} onHide={this.handleCloseModal.bind(this)}>
						<Modal.Body>
							<img src="https://img.pandawhale.com/post-61492-dancing-dickbutt-gif-imgur-tum-pTDg.gif"/>
						</Modal.Body>
						<Modal.Footer>
							<Button onClick={this.handleSubmitStuff.bind(this)} className="btn-primary">Submit</Button>
						</Modal.Footer>
					</Modal>
				</div>
			);
		} else {
				return null;
		}
	}
}

function mapStateToProps(state) {
	return {ayaData: state.ayaData};
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({
		getAya: getAya
	}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Aya);
