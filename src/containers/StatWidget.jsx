import React, { Component } from 'react';
import { connect } from 'react-redux';

export let StatWidget = ComposedComponent => class extends Component {
		constructor(props) {
	    super(props);
	    this.state = {
	      title: props.title,
	      stats: props.stats,
	      description: props.description,
	      showModal: false,
	    };
	  }
		handleModal(show = !this.state.showModal) {
			this.setState({
				showModal: show,
			});
		}
    render(){
			return (
	      <div className="box">
	        <header className="box-header">
	          <div className="box-header-title">{this.state.title}</div>
	        </header>
	        <button onClick={() => { this.handleModal(); }} type="button" className="box-content">
	          <div className="statGroup">
							<ComposedComponent {...this.props} />
	          </div>
	        </button>
	      </div>
	    );
    }
}
