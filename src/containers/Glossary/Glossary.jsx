import React from 'react';
import { InputGroup, Input, InputGroupButton } from 'reactstrap';
import glossaryJSON from './GlossaryData.js';
import Widget from '../../components/Widget/Widget';
import _ from 'lodash';

class Glossary extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			glossaryData: glossaryJSON.glossary,
			originalGlossaryData: glossaryJSON.glossary,
		};
		this.handleTypeahead = this.handleTypeahead.bind(this);
	}
	handleTypeahead(e){
		let filteredGlossary = this.state.originalGlossaryData.filter((glossary)=>{
			let stringInContent = _.includes(glossary.entry_content.toLowerCase(), e.target.value.toLowerCase());
			let stringInTitle = _.includes(glossary.entry_title.toLowerCase(), e.target.value.toLowerCase());
			if(stringInContent || stringInTitle){
				return glossary;
			}
		});
		this.setState({ glossaryData: filteredGlossary});
	}
	renderGlossaryItems() {
		return this.state.glossaryData.slice(0, 10).map((glossary) => {
			return (
				<Widget title={glossary.entry_title} key={glossary.id}>
					<div dangerouslySetInnerHTML={{__html: glossary.entry_content }} />
					{glossary.entry_amendment}
				</Widget>
			);
		});
	}
	render() {
		return (
			<div>
				<Widget>
					<InputGroup>
						<Input onChange={this.handleTypeahead} placeholder="Search glossary" />
					</InputGroup>
				</Widget>
				{this.renderGlossaryItems()}
			</div>
		);
	}
}

export default Glossary;
