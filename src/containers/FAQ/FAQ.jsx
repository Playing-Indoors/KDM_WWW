import React from 'react';
import { InputGroup, Input, InputGroupButton, Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import faqJSON from './faqData.js';
import Widget from '../../components/Widget/Widget';
import _ from 'lodash';

class FAQ extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			originalFaqData: faqJSON.entry,
			faqData: faqJSON.entry,
		};
		this.handleTypeahead = this.handleTypeahead.bind(this);
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
	handleTypeahead(e){
		let filteredFAQ = this.state.originalFaqData.filter((faq)=>{
			let stringInContent = _.includes(faq.content.$t, e.target.value);
			if(stringInContent){
				return faq;
			}
		});
		this.setState({ faqData: filteredFAQ});
	}
	render() {
		return (
			<div>
				<Widget>
					<InputGroup>
						<Input onChange={this.handleTypeahead} placeholder="Search FAQ" />
						{/* <InputGroupButton color="primary">Search</InputGroupButton> */}
					</InputGroup>
				</Widget>
				{this.renderFAQItems()}
				{/* <Pagination>
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
				</Pagination> */}
			</div>
		);
	}
}

export default FAQ;
