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
                  <div className="stat">
                    <div className="stat-num">#</div>
                    <div className="stat-milestone">
                      <span className="is-passive"></span>
                      <span></span>
                    </div>
                    <div className="stat-title">Title</div>
                  </div>
                  <div className="stat">
                    <div className="stat-num">0</div>
                    <div className="stat-milestone">
                      <span></span>
                      <span></span>
                    </div>
                    <div className="stat-title">Understanding</div>
                  </div>
                  <div className="stat">
                    <div className="stat-num">1</div>
                    <div className="stat-milestone">
                      <span className="is-active"></span>
                      <span className="is-active"></span>
                    </div>
                    <div className="stat-title">Weapon</div>
                  </div>
                </div>
              </div>
            </div>
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

// The BELOW IS REDUX DATA FLOW stuff , dont worry about it
// THIS IS HOW WE CALL THE API AND DO DATA FLOW, ILL EXPLAINS LATER
function mapStateToProps(state) {
	return {ayaData: state.ayaData};
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({
		getAya: getAya
	}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Aya);
