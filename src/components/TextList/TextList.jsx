import React, { Component } from "react";
import PropTypes from "prop-types";

class TextList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: props.list
    };
  }
  // updates props
  componentWillReceiveProps(nextProps) {
    if (nextProps.list) {
      this.setState({
        list: nextProps.list
      });
    }
  }
  renderList() {
    const num = Math.max(this.props.minimum, this.state.list.length);
    return [...Array(num)].map((_, i) => {
      if (this.state.list[i]) {
        return (
          <li className="textList-item" key={i}>
            {this.state.list[i]}
          </li>
        );
      }
      return (
        <li className="textList-item" key={i}>
          - -
        </li>
      );
    });
  }
  render() {
    return <ul className="textList">{this.renderList()}</ul>;
  }
}

TextList.defaultProps = {
  minimum: 1,
  list: []
};

TextList.propTypes = {
  minimum: PropTypes.number,
  list: PropTypes.arrayOf(PropTypes.string)
};

export default TextList;
