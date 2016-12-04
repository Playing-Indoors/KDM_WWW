import React from 'react';
import {connect} from 'react-redux';
import {getAya} from '../../actions/getAya';
import {bindActionCreators} from 'redux';
import Stat from '../../components/Stats/Stats.jsx';
import { Button, Modal } from 'react-bootstrap';

class Aya extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			ayaData: null
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

            <Modal show={true}>
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

            </Modal>
          </main>
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
