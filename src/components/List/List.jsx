import React, { Component } from 'react';
import Icon from '../../components/Icon/Icon.jsx';
import Button from '../../components/Button/Button.jsx';

class List extends Component {
	constructor(props){
		super(props);
	}
	renderNodes(){
		return this.props.data.map((item, index )=> {
			return (
				<div className="list" key={index}>
					<div className={"list-icon" + (item.Founder ? '' : ' svg--primary')}>
						<Icon icon="flag" />
					</div>
					<div className="list-content">
						<h2 className="list-content-title">{item.name}</h2>
						<div className="list-content-meta">
							<div className="list-content-meta-item">
              	{/* if founder != currentuser */}
								Founded by <strong>{item.founder}</strong>
								{/* end if */}
							</div>
             	{/* Convert this to moment().fromNow() or something like that. if not MMM Do YYYY  */}
							<div className="list-content-meta-item">Last Played <strong>{item.last_played}</strong></div>
						</div>
						<div className="list-content-meta">
							<div className="list-content-meta-item">Lantern Year <strong>{item.lantern_year}</strong></div>
							<div className="list-content-meta-item">Population <strong>{item.population}</strong></div>
							{/* Would be nice to singularize player if == 1 */}
							<div className="list-content-meta-item">Players <strong>{item.players}</strong></div>
						</div>
					</div>
					<div className="list-actions">
					  {/* if !item.retired */ }
						<Button text="Play" style="secondary" />
						{/* else <Button text="Ended" style="link" disabled="true" size="block" /> */}
					</div>
				</div>
			);
		});
	}
	render() {
		return (
			<div className="list-group">
				{/* Order by date ~ last played at top */}
				{this.renderNodes()}
			</div>
		)
	}
}

export default List;
