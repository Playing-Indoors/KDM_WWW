import React from "react";
import { Input } from "reactstrap";
import faqJSON from "./faqData.js";
import Widget from "../../components/Widget/Widget";
import _ from "lodash";

class FAQ extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      originalFaqData: faqJSON.entry,
      faqData: faqJSON.entry
    };
    this.handleTypeahead = this.handleTypeahead.bind(this);
  }
  handleTypeahead(e) {
    let filteredFAQ = this.state.originalFaqData.filter(faq => {
      let stringInContent = _.includes(
        faq.content.$t.toLowerCase(),
        e.target.value.toLowerCase()
      );
      if (stringInContent) {
        return faq;
      }
    });
    this.setState({ faqData: filteredFAQ });
  }
  renderFAQItems() {
    return this.state.faqData.map(faq => {
      return (
        <Widget
          title={`${faq.gsx$category.$t} : ${faq.gsx$question.$t}`}
          key={faq.gsx$id.$t}
        >
          {faq.gsx$answer.$t}
        </Widget>
      );
    });
  }
  render() {
    return (
      <div>
        <Widget>
          <Input onChange={this.handleTypeahead} placeholder="Search FAQ" />
        </Widget>
        {this.renderFAQItems()}
      </div>
    );
  }
}

export default FAQ;
