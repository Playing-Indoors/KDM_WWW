import React from 'react';
import glossaryJSON from './GlossaryData.js';
import Widget from '../../components/Widget/Widget';

class Glossary extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			glossaryData: glossaryJSON.glossary,
		};
	}
	renderGlossaryItems() {
		return this.state.glossaryData.map((glossary) => {
			return (
				<Widget title={glossary.entry_title}>
					<div dangerouslySetInnerHTML={{__html: glossary.entry_content }} />
					{glossary.entry_amendment}
				</Widget>
			);
		});
	}
	render() {
		return (
			<div>
				{this.renderGlossaryItems()}
			</div>
		);
	}
}

export default Glossary;
