import React from 'react';
import { InputGroup, Input, InputGroupButton, Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import faqJSON from './faqData.js';
import Widget from '../../components/Widget/Widget';

class FAQ extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			faqData: faqJSON.entry,
		};
	}
	renderFAQItems() {
		return this.state.faqData.map((faq) => {
			return (
				<Widget title={`${faq.gsx$category.$t} : ${faq.gsx$question.$t}`} key={faq.gsx$id.$t}>
					{faq.gsx$answer.$t}
				</Widget>
			);
		});
	}
	render() {
		return (
			<div>
				<Widget>
					<InputGroup>
						<Input placeholder="Search FAQ" />
						<InputGroupButton color="primary">Search</InputGroupButton>
					</InputGroup>
				</Widget>
				{this.renderFAQItems()}
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

export default FAQ;
