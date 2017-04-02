import React from 'react';
import { InputGroup, Input, InputGroupButton, Pagination, PaginationItem, PaginationLink } from 'reactstrap';
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
						<Input placeholder="Search glossary" />
						<InputGroupButton color="primary">Search</InputGroupButton>
					</InputGroup>
				</Widget>
				{this.renderGlossaryItems()}
				<Pagination>
					<PaginationItem disabled>
						<PaginationLink previous href="#" />
					</PaginationItem>
					<PaginationItem active>
						<PaginationLink href="#">
							1
						</PaginationLink>
					</PaginationItem>
					<PaginationItem>
						<PaginationLink href="#">
							2
						</PaginationLink>
					</PaginationItem>
					<PaginationItem>
						<PaginationLink href="#">
							3
						</PaginationLink>
					</PaginationItem>
					<PaginationItem>
						<PaginationLink href="#">
							4
						</PaginationLink>
					</PaginationItem>
					<PaginationItem>
						<PaginationLink href="#">
							5
						</PaginationLink>
					</PaginationItem>
					<PaginationItem>
						<PaginationLink next href="#" />
					</PaginationItem>
				</Pagination>
			</div>
		);
	}
}

export default Glossary;
