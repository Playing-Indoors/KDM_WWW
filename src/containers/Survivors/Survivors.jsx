import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Input } from 'reactstrap';
import Widget from '../../components/Widget/Widget';
import CardList from '../../components/CardList/CardList';

class Survivors extends React.Component {
	componentDidMount(){
		let path = this.props.location.pathname.match(/^\/settlements\/(\d+)/);
	}
	componentWillReceiveProps(nextProps) {
		if (nextProps.settlementData) {
			this.setState({
				settlementData: nextProps.settlementData,
			});
		}
	}
	renderSurvivors() {
		if (this.props.settlementData) {
			return this.props.settlementData.user_assets.survivors.map((survivor) => {
				return (
					<CardList
						key={survivor.sheet._id.$oid}
						name={survivor.sheet.name}
						href={survivor.sheet._id.$oid}
					>
						Hunt XP: {survivor.sheet.hunt_xp} &nbsp; &nbsp;
						Courage: {survivor.sheet.Courage} &nbsp; &nbsp;
						Understanding {survivor.sheet.Understanding}
					</CardList>
				);
			});
		} else {
				return (
					<div>"Loading Survivors..."</div>
				)
		}
	}
	render() {
		return (
			<div>
				<Widget>
					<Input placeholder="Search survivors..." />
				</Widget>
				{this.renderSurvivors()}
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		settlementData: state.settlementData,
	};
}

export default connect(mapStateToProps, null)(Survivors);
